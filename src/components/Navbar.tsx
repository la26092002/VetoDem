import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {MenuIcon} from 'lucide-react';
import {FiSearch, FiShoppingCart} from "react-icons/fi";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white py-3 px-4 md:px-8 flex items-center justify-between shadow-sm">
            <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-primary flex items-center">
                    <img src="/logo.jpg" alt="VetoExpress" className="h-8 mr-2"/>
                    <span className="hidden md:inline">VETO EXPRESS</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/shop">Shop</NavLink>
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/about-us">About Us</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <button className="text-gray-600 hover:text-gray-800 bg-gray-300 rounded-full p-2">
                    <FiSearch className="h-4 w-4"/>
                </button>

            </div>

            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-800 bg-green-400 rounded-full p-2">
                    <FiShoppingCart className="h-4 w-4" color={"white"}/>
                </button>


                <Link to="/login" className="hidden md:block">
                    <Button variant="outline" className="border-primary text-primary rounded-full px-6">
                        Sign in
                    </Button>
                </Link>

                <Button variant="ghost" className="md:hidden" size="icon">
                    <MenuIcon className="h-6 w-6"/>
                </Button>
            </div>
        </nav>
    );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({href, children}) => {
    return (
        <Link to={href} className="text-gray-600 hover:text-primary transition-colors">
            {children}
        </Link>
    );
};

export default Navbar;
