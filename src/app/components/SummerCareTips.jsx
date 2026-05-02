const SummerCareTips = () => {
  return (
    <div className="w-11/12 mx-auto px-4 py-10">

      <h2 className="text-2xl font-bold text-center mb-8">
        Summer Care Tips 🌿
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-6 bg-base-100 shadow rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Stay Hydrated 💧</h3>
          <p className="text-sm opacity-70">
            Drink at least 8–10 glasses of water daily to keep your body cool and fresh.
          </p>
        </div>

        <div className="p-6 bg-base-100 shadow rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Sun Protection ☀️</h3>
          <p className="text-sm opacity-70">
            Use sunscreen SPF 30+ and wear sunglasses before going outside.
          </p>
        </div>

        <div className="p-6 bg-base-100 shadow rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Light Clothing 👕</h3>
          <p className="text-sm opacity-70">
            Wear breathable cotton clothes to stay cool in hot weather.
          </p>
        </div>

      </div>

    </div>
  );
};

export default SummerCareTips;