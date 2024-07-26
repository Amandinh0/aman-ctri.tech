import { CameraIcon, GitHubLogoIcon, LinkedInLogoIcon, BackpackIcon } from '@radix-ui/react-icons';
import * as Nav from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';


const Navbar: React.FC = () => {
  return (
    <div className='flex justify-between items-center'>
        
            <a href="/" className="text-4xl font-bold custom-text mt-8 mb-4 mr-12">
            Aman Chhetri
            </a>
            <Nav.Root className='list-none'>
            <Nav.List className='flex space-x-4'>
                <Nav.Item>
                <Nav.Link asChild>
                    <Link href="https://www.linkedin.com/in/aman-chh" rel="noopener noreferrer" target="_blank">
                    <LinkedInLogoIcon className='custom-text h-10 w-10 mt-8 mb-4 ml-12'/>
                    </Link>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="https://github.com/Amandinh0" rel="noopener noreferrer" target="_blank"><GitHubLogoIcon className='custom-text h-10 w-10 mt-8 mb-4'/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/resume">
                <BackpackIcon className='custom-text h-10 w-10 mt-8 mb-4'/>
                </Nav.Link>
                </Nav.Item>
            </Nav.List>
            </Nav.Root>
        
    </div>
  );
};

export default Navbar;
