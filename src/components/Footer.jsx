"use client";
import React from 'react';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className='flex flex-1 justify-end items-end p-6 bg-[#477987]'>
        <div>Copyright © 2023 Ibby. All Rights Reserved.</div>
        <Link href={"https://github.com/JulioMRosas"}><GitHubIcon/></Link>
    </footer>
  )
}

export default Footer;