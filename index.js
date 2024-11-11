const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Set the start and end dates
const startDate = "2022-12-04";
const endDate = "2022-12-15";

// Function to execute shell commands
function executeCommand(command) {
  try {
    execSync(command, { stdio: "inherit", shell: true });
  } catch (error) {
    console.error(`Error executing command: ${command}`, error);
  }
}

// Function to remove the index.lock file if it exists
function removeLockFileIfExists() {
  const lockFile = path.join(__dirname, ".git", "index.lock");
  if (fs.existsSync(lockFile)) {
    console.log("Removing existing index.lock file...");
    fs.unlinkSync(lockFile); // Remove the lock file
  }
}

// Function to backdate commits
function backdateCommits(startDate, endDate) {
  let currentDate = new Date(startDate);

  // Loop through each date from start_date to end_date
  while (currentDate <= new Date(endDate)) {
    const formattedDate = currentDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    const commitDate = `${formattedDate} 10:00:00`;

    // Modify the file (dummyfile.txt in this case)
    executeCommand(`echo "Commit for ${commitDate}" >> dummyfile.txt`);

    // Stage the changes
    executeCommand("git add dummyfile.txt");

    // Make the commit with the specified date (Windows-compatible method)
    const command = `set GIT_COMMITTER_DATE="${commitDate}" && git commit --date="${commitDate}" -m "Backdated commit for ${commitDate}"`;
    executeCommand(command);

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

// Function to push changes to GitHub
function pushToGitHub() {
  try {
    // Push changes to the remote repository (replace 'main' with the appropriate branch name if needed)
    executeCommand("git push origin main");

    // Optionally, use force push if you want to overwrite the history (be careful with this)
    // executeCommand("git push origin main --force");

    console.log("Changes pushed to GitHub.");
  } catch (error) {
    console.error("Error pushing to GitHub:", error);
  }
}

// Remove any existing lock files before starting the process
removeLockFileIfExists();

// Run the backdating process
backdateCommits(startDate, endDate);

// Push the commits to GitHub
pushToGitHub();
