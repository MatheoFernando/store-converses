import { DetailsAbout } from "../constants";

export function MoreDetails() {
  return (
    <section className=" w-full grid md:grid-cols-3 gap-8 mt-48 ">
      {DetailsAbout.map((item) => (
        <div className="cards px-8 py-16 rounded-2xl" key={item.id}>
              <img src={item.img_url} alt="" className="bg-btn w-12 h-12 p-2 rounded-full"/>
              <h1 className="text-2xl font-semibold mt-8">{item.label}</h1>
              <p className="text-lg text-slate-700 mt-4">{item.decricao}</p>
        </div>
      ))}
    </section>
  );
}
