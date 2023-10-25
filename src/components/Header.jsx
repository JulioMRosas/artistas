import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='hidden sm:flex justify-evenly p-4 bg-red-500'>
        <Link href={"../"}>Inicio</Link>
        <Link href={"../register"}>Registrar</Link>
        <Link href={"../consult"}>Ver Registros</Link>
    </header>
  )
}

export default Header;