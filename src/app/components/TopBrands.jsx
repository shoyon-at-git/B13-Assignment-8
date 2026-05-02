const TopBrands = () => {
  const brands = [
    { name: "SunShade", desc: "Premium sunglasses brand" },
    { name: "OceanWear", desc: "Summer beach fashion" },
    { name: "CoolSkin", desc: "Skincare essentials" },
    { name: "AirStep", desc: "Comfortable summer footwear" }
  ];

  return (
    <div className="w-11/12 mx-auto  px-4 py-10">

      <h2 className="text-2xl font-bold text-center mb-8">
        Top Brands ⭐
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {brands.map((brand, index) => (
          <div key={index} className="p-6 bg-base-100 shadow rounded-xl text-center hover:shadow-lg transition">

            <h3 className="font-bold text-lg">
              {brand.name}
            </h3>

            <p className="text-sm opacity-70 mt-2">
              {brand.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default TopBrands;