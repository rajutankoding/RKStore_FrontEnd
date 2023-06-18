export const getItems = async (context) => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const resource = await res.json();
  return { props: { ...resource } };
};
