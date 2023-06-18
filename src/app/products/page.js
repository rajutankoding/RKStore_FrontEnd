import ItemListComponent from "@/components/ItemListComponent";

const getData = async () => {
  const api = await fetch("https://fakestoreapi.com/products");
  return api.json();
};
const Products = async () => {
  const data = await getData();

  return (
    <>
      <ItemListComponent params={data} />
    </>
  );
};

export default Products;
