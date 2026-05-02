import ProductCard from "../components/ProductCard";

export default async function ProductsPage() {

  const res = await fetch("https://b13-assignment-8-five.vercel.app/data/product-data.json");
  const products = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        All Summer Products ☀️
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}