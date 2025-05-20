export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen text-center pt-32 bg-gradient-to-br from-teal-100 to-green-100">
      <div>
        <h1 className="text-5xl font-bold text-emerald-800">Willkommen bei LYRA</h1>
        <p className="mt-4 text-lg text-emerald-600">Dein KI-Fitnesscoach</p>
        <button className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition">
          Jetzt starten
        </button>
      </div>
    </section>
  );
}
