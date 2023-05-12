import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <Link href={'/'} className="m-3 underline">
        Home Page
      </Link>
      <Link href={'/Login'} className="m-3 underline">
        Login
      </Link>
      <Link href={'/DadJokes'} className="m-3 underline">
        Dad Jokes
      </Link>
    </nav>
  );
};

export default NavBar;
