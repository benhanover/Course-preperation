let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

// resolve value is 1 because once you resolve something it ignores anything after
promise.then((value) => {
  console.log(value);
});
