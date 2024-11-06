import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-sky-600 to-cyan-800 p-4 shadow-md rounded-lg text-2xl">
      <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-white">
        <li className='hover:font-bold'>
          <Link href="/">Home</Link>
        </li>
        <li className='hover:font-bold'>
          <Link href="/about">About</Link>
        </li>
        <li className='hover:font-bold'>
          <Link href="/contact">Contact</Link>
        </li>
        <li className='hover:font-bold'>
          <Link href="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
