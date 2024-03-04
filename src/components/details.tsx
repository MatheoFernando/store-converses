export function Details() {
  return (
    <section className="flex flex-col md:flex-row mt-36 md:items-center md:justify-between gap-16">
      <article className="w-full md:w-1/2 ">
        <h1 className="text-4xl max-w-sm font-semibold mb-8 ">We provide you <span className="text-btn"> Super Quality</span> Shoes</h1>
        <p className="text-slate-700 text-lg leading-7 max-w-lg">
          
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-slate-700 text-lg leading-7 max-w-lg mt-4">Our dedication to detail and excellence ensures your satisfaction</p>
       
          <button className="text-text  bg-btn  w-44 rounded-full py-4 px-8 my-16 ">View details </button>

       
      </article>
      <article className="w-full md:w-1/2 ">
              <img src="./images/shoe8.svg" alt="" />
      </article>
    </section>
  );
}
