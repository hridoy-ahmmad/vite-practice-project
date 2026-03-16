import { MenuIcon, X } from 'lucide-react';
import React, { useState } from 'react';


const navs = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "Services",
        path: "/services",
        submenu: [
            { name: "Web Development", path: "/services/web" },
            { name: "UI Design", path: "/services/ui" }
        ]
    },
    {
        id: 3,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 4,
        name: "Contact",
        path: "/contact"
    }
];


const Nav = () => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('/')
    return (
        <div className=''>
            <div className=' py-5 bg-black/70 backdrop-blur-sm shadow-2xl p-5 text-white fixed top-0 left-0 w-full z-50'>
                <nav className='flex justify-between items-center container mx-auto'>
                    <div className='text-2xl font-bold'>Logo</div>
                    <ul className={`md:flex  gap-4 hidden font-semibold text-md`}>
                        {
                            navs.map(nav =>
                                <li key={nav.id}
                                    onClick={() => {
                                        setActive(nav.path)
                                    }
                                    }
                                    className={`${active === nav.path ? 'border-b-3 border-green-500' : ''} cursor-pointer`}
                                >{nav.name}</li>
                            )
                        }
                    </ul>
                    <button className='md:hidden' onClick={() => setOpen(current => !current)}>
                        {
                            open ? <X></X> : <MenuIcon></MenuIcon>
                        }
                    </button>
                    <div className='hidden md:flex'>
                        <button className='btn btn-success text-white'>sign up</button>
                    </div>
                </nav>
            </div>
            
            {/* Mobile menu */}
            <div className={`md:hidden gap-4 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-40"} backdrop-blur-sm absolute mt-20 left-2  w-[70%] z-50  transition-all duration-500 overflow-hidden`} >
                <ul className='w-full text-white/90 text-center pt-5 flex flex-col gap-5 text-xl font-bold bg-black/80 '>
                    {
                        navs.map(nav =>
                            <li
                                key={nav.id}
                                onClick={() => {
                                    setActive(nav.path)
                                    setOpen(false)
                                }
                                }
                                className={`${active === nav.path ? 'text-green-500' : ''}`}
                            >{nav.name}</li>
                        )
                    }
                    <div>
                        <button className='btn btn-success text-white inline my-5'>sign up</button>
                    </div>
                </ul>

            </div>
        </div>

    );
};

export default Nav;