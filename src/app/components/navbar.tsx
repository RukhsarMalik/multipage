// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-semibold mb-4 md:mb-0">
          <Link href="/">Online Book Reading</Link>
        </div>

        {/* Menu Section */}
        <div className="flex flex-row space-x-8">
          <Link href="/" className="text-white hover:text-yellow-400">Home</Link>
          <Link href="/" className="text-white hover:text-yellow-400">Browse Books</Link>
          <Link href="/" className="text-white hover:text-yellow-400">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
