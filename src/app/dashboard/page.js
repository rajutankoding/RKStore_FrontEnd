import CardComponent from "@/components/CardComponent";

const getData = async () => {
  const api = await fetch("https://fakestoreapi.com/products");
  return api.json();
};
const Dashboard = async (props) => {
  const data = await getData();
  //   console.log("iki API", api);
  //   console.log("This Props", data);
  return (
    <>
      {data.map((data, index) => (
        <CardComponent data={data} key={index} />
      ))}
    </>
  );
};

export default Dashboard;
