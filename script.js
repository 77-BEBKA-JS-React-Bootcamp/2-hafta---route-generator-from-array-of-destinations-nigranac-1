function findRoutes(routes) {
  const followed = [];

  routes
    .map((current) => {
      if (!routes.find((point) => point[1] === current[0])) {
        followed.push(current[0]);
        followed.push(current[1]);
      }
    })
    .map(() => {
      routes.map((current) => {
        current[0] === followed[followed.length - 1] &&
          followed.push(current[1]);
      });
    });

  return console.log(followed.join(", "));
}
