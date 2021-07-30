fetch("https://fathomless-shore-96703.herokuapp.com/get-blogs/")
  .then((response) => response.json())
  .then((data) => console.log(data));
