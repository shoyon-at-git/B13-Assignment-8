import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(
    "https://b13-assignment-8-five.vercel.app/data/product-data.json",
    { cache: "no-store" }
  );

  const products = await res.json();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-11/12 mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10 items-start">

        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-xl shadow"
          />
        </div>

        <div className="space-y-4">

          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p><span className="font-semibold">ID:</span> {product.id}</p>

          <p><span className="font-semibold">Brand:</span> {product.brand}</p>

          <p><span className="font-semibold">Category:</span> {product.category}</p>

          <p className="text-yellow-500 text-lg">
            ⭐ Rating: {product.rating}
          </p>

          <p className="text-xl font-semibold">
            Price: ${product.price}
          </p>

          <p><span className="font-semibold">Stock:</span> {product.stock}</p>

          <p className="text-sm opacity-70">
            {product.description}
          </p>

          <button className="btn btn-primary w-full mt-4">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}