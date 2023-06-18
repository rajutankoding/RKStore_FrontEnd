import Link from "next/link";
// import BsFillCartPlusFill from "@/icon";
import { BsFillCartPlusFill } from "react-icons/bs";
// import { BsFillCartPlusFill } from "react-icons/lib";
// IconBase;
// IconBase;
const getData = async () => {
  const api = await fetch("https://fakestoreapi.com/products");
  return api.json();
};

const CardComponent = async (props) => {
  const data = await getData();
  //   console.log(props);
  return (
    <>
      <div className="itemCard">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <div className="img">
              <img src={props.data.image} alt="Shoes" />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="title">{props.data.title}</h2>
            <div className="badge badge-secondary">NEW</div>
            <p>{props.data.description}</p>
            <div className="card-actions justify-start">
              <div className="badge badge-md badge-info">$987,654</div>
            </div>
            <div className="card-actions justify-end">
              <Link
                href={"/products/{props.data.id}"}
                className="btn btn-sm btn-info"
              >
                Detail
              </Link>
              <div className="btn btn-sm btn-success">
                Add
                <BsFillCartPlusFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
