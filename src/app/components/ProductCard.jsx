import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <div className="card bg-base-100 shadow hover:shadow-xl transition duration-300 overflow-hidden">

            <figure className="relative w-full h-48">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
            </figure>

            <div className="p-4 space-y-2">

                <h2 className="font-bold text-lg line-clamp-1">
                    {product.name}
                </h2>

                <p className="text-sm opacity-70">
                    {product.brand}
                </p>

                <div className="flex justify-between items-center">
                    <span className="text-yellow-500">
                        ⭐ {product.rating}
                    </span>

                    <span className="font-semibold">
                        ${product.price}
                    </span>
                </div>

                <div className="text-xs opacity-60">
                    {product.category}
                </div>

                <Link href={`/products/${product.id}`}>
                    <button className="btn btn-primary btn-sm w-full mt-2">
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default ProductCard;