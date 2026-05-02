import ProductCard from "./ProductCard";

const PopularProducts = async () => {

  const res = await fetch("https://b13-assignment-8-five.vercel.app/data/product-data.json");
  const products = await res.json();

  const popularProducts = products.slice(0, 3);

  return (
    <div className="w-11/12 mx-auto max-w-7xl mx-auto px-4 py-10">

      <h2 className="text-2xl font-bold text-center mb-8">
        Popular Products 🔥
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {popularProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
};

export default PopularProducts;