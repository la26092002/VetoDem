
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter } from 'lucide-react';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:flex-1  p-8 min-h-full  flex-col justify-evenly items-center relative">
          <div className="mt-16 max-w-md">
            <h1 className="text-primary text-3xl md:text-7xl font-light  mb-2">
              Welcome to
            </h1>
            <h1 className="text-primary text-4xl md:text-7xl font-bold mb-12">
              Veto Express
            </h1>
          </div>
          
          <div className="mt-4">
            <h3 className="font-medium mb-4 text-xl">Do you have an account?</h3>
            <Link to="/login">
              <Button variant="outline" className="rounded-full border-primary text-primary text-xl px-12">
                Login
              </Button>
            </Link>
          </div>

        {/* Image positioned absolutely at the bottom */}
        <div className="absolute bottom-0 left-0 w-full -z-10">
          <img
              src="/signup.png" // Use the correct image source
              alt="Pet"
              className="w-auto h-auto max-h-[351px] max-w-[437px] object-contain" // Added rotate-y-180 here
          />
        </div>
      </div>
      
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <form>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  className="w-full h-12"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number / Email
                </label>
                <Input
                  id="email"
                  type="text"
                  className="w-full h-12"
                  placeholder="Enter your mobile or email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full h-12"
                    placeholder="Enter your password"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                  >
                    👁️
                  </button>
                </div>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full h-12"
                    placeholder="Confirm your password"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                  >
                    👁️
                  </button>
                </div>
              </div>
              
              <Button className="w-full bg-primary text-white h-12 rounded-full">
                Registration
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR CONTINUE WITH</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <SocialButton logo={<img src="/google.png" alt="google" className="h-5 w-5" />} />
                <SocialButton logo={<img src="/fb.png" alt="Facebook" className="h-5 w-5" />}  />
                <SocialButton logo={<img src="/twitter.png" alt="twitter" className="h-5 w-5" />}  />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const SocialButton: React.FC<{ logo: React.ReactNode }> = ({ logo }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-full h-10 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
    >
      {logo}
    </button>
  );
};

export default Register;
