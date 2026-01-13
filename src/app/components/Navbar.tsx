import { CameraIcon } from '@radix-ui/react-icons';
import * as Nav from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';


const Navbar: React.FC = () => {
  return (
    <div className='flex justify-between items-center sm:w-full w-[95%] mx-auto'>
        
            <a href="/" className="text-4xl font-bold custom-text mt-8 mb-4 mr-12">
            Aman Chhetri
            </a>
            <Nav.Root className='list-none'>
            <Nav.List className='flex space-x-4 items-center'>
                <Nav.Item>
                <Nav.Link asChild>
                    <Link href="https://www.linkedin.com/in/aman-chh" rel="noopener noreferrer" target="_blank" className='custom-text text-lg mt-8 mb-4 ml-12 hover:underline transition-transform'>
                    /linkedin
                    </Link>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link asChild>
                    <Link href="https://github.com/Amandinh0" rel="noopener noreferrer" target="_blank" className='custom-text text-lg mt-8 mb-4 hover:underline transition-transform'>
                    /github
                    </Link>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link asChild>
                    <Link href="/resume" className='custom-text text-lg mt-8 mb-4 hover:underline transition-transform'>
                    /resume
                    </Link>
                </Nav.Link>
                </Nav.Item>
            </Nav.List>
            </Nav.Root>
        
    </div>
  );
};

export default Navbar;
