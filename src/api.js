export const apiRequest = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resove, reject) => {
    // reject("Error API func");
    setTimeout(() => {
      resove({ login: "test", name: "Vasya", role: "operator" });
    }, 500);
  });
