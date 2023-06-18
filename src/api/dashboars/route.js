const getData = async () => {
  const api = await fetch("https://fakestoreapi.com/products");
  return api.json();
};

const data = await getData();
