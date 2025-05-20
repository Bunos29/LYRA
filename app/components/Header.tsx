export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md shadow-md fixed top-0 z-50">
      <div className="text-2xl font-bold text-emerald-700">LYRA</div>
      <nav className="space-x-4 text-emerald-800 font-medium">
        <a href="#features">Features</a>
        <a href="#login">Login</a>
      </nav>
    </header>
  );
}

