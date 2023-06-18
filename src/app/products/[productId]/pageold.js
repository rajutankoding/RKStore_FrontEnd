// import { useRouter } from "next/router";
import Image from "next/image";

const Detail = (params) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/kamera.jpg"
          alt="Kamera"
          // className="dark:invert"
          width={200}
          height={250}
          priority
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn gap-2">
            Inbox
            <div className="badge badge-secondary">+99</div>
          </button>
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
