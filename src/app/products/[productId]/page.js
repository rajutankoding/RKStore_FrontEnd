import InfoComponent from "@/components/InfoComponent";
import "./styleDetail.css";
import { BsFillCartPlusFill } from "react-icons/bs";

// PR Tampilkan Data By ID
const detail = () => {
  return (
    <div className="flex detail w-full lg:flex-row">
      {/* Kiri */}
      <div className="grid detailKiri  bg-base-300  place-items-center">
        <figure>
          <img src="/kamera.jpg" alt="Kamera" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Disini Nanti Diisi Gambar
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      {/* <div className="divider lg:divider-horizontal"></div> */}

      {/* Kanan */}
      <div className="grid flex-grow  bg-base-100">
        <div className="flex flex-col w-full">
          <div className="grid bg-base-300">
            {/* card */}
            <div className=" bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Tampilkan Data By ID
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                  <div className="badge badge-accent badge-outline">
                    Fashion
                  </div>
                  <div className="badge badge-accent badge-outline">
                    Products
                  </div>
                </div>
                <h2 className="text-xl">$987,654</h2>
                <div className="badge badge-lg"></div>
                <div className="btn btn-sm btn-success">
                  Buy
                  <BsFillCartPlusFill />
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid bg-base-300">
            {/* card */}
            <div className=" bg-base-200 shadow-xl">
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                  <p>Full Caption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detail;
