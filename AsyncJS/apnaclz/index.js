function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
//CallBackHell->Nested callbacks stacked below one another forming a pyramid structure.
//call Back hell
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

// To resolve CallbackHell we use promise
