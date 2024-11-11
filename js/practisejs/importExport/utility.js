let getData = async () => {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );
  let data = await response.json();
  console.log(data);
};
export { getData };
