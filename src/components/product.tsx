import  { useState, useEffect } from 'react';
import { ourProducts } from "../constants";

type ProductItem = {
  id: string;
  img_url: string | string[];
  star: string;
  labetitulo: string;
  price: string;
};

type ProductCardProps = {
  product: ProductItem;
  index: number;
};

export function Product() {
  return (
    <section className="mb-40 md:mb-64">
      <h1 className="text-5xl font-semibold mb-8 leading-[60px]">
        Our <span className="text-btn">Popular</span> Products
      </h1>
      <p className="text-slate-700 text-lg leading-7 max-w-lg">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value.
      </p>

      <article className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mt-28">
        {ourProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </article>
    </section>
  );
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const isLast = index === ourProducts.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isLast && Array.isArray(product.img_url) && product.img_url.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % product.img_url.length);
      }, 800); 

      return () => clearInterval(interval);
    }
  }, [isLast, product.img_url]);

  return (
    <div className="">
      {Array.isArray(product.img_url) ? (
        <img src={product.img_url[currentIndex]} alt="" className="mb-8 " />
      ) : (
        <img src={product.img_url} alt="" className="mb-8 " />
      )}
      <h2 className="text-btn text-lg font-extralight flex gap-3">
        <img src="./icons/star.svg" alt="" />
        {product.star}
      </h2>
      <h1 className="text-2xl font-semibold my-2">
        {product.labetitulo}
      </h1>
      <p className="text-xl font-semibold">{product.price}</p>
    </div>
  );
};

export default Product;
