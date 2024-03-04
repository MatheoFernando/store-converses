import { CustomersSay } from "../constants";

export function Customers() {
  return (
    <section className="bg-slate-100 text-center py-16 mb-28 ">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-8">What Our <span className="text-btn"> Customers </span> Say?</h1>
        <p className="text-lg text-slate-700 mt-4 ">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-16">
          {CustomersSay.map((sayitem) => (
            <div
              className="max-w-xl flex flex-col items-center"
              key={sayitem.id}
            >
              <img
                src={sayitem.img_url}
                alt=""
                className="rounded-full h-28 w-28"
              />
              <p className="text-lg text-slate-700 mt-4 max-w-sm my-6">
                {sayitem.decricao}
              </p>
              <h2 className="text-btn text-lg font-extralight flex gap-3">
                <img src="./icons/star.svg" alt="" />
                {sayitem.star}
              </h2>
              <h1 className="text-2xl font-semibold mt-8">{sayitem.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
