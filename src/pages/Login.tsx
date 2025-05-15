import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Facebook, Twitter } from 'lucide-react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left side - Login Form (unchanged) */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-primary text-4xl md:text-5xl font-bold mb-12">
              Login
            </h1>

            <form>
              <div className="space-y-6">
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember password
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-gray-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button className="w-full bg-primary text-white h-12 rounded-full">
                  Login
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
                  {/* Assuming SocialButton is defined elsewhere or inline as below */}
                  <SocialButton logo={<img src="/google.png" alt="google" className="h-5 w-5" />} />
                  <SocialButton logo={<img src="/fb.png" alt="Facebook" className="h-5 w-5" />}  />
                  <SocialButton logo={<img src="/twitter.png" alt="twitter" className="h-5 w-5" />}  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right side - Registration Info and Image */}
        <div className="hidden md:flex md:flex-1 bg-transparent p-8 min-h-full flex-col justify-center items-center relative"> {/* Added relative positioning */}
          <div className="max-w-md mx-auto text-center md:text-left"> {/* Adjusted text alignment */}
            {/* Adjusted text size and margin */}
            <h2 className="text-3xl font-bold mb-4">
              Don't have an account?
            </h2>
            {/* Adjusted text size and margin */}
            <p className="text-gray-600 text-base mb-8">
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </p>
            <Link to="/register">
              <Button variant="outline" className="rounded-full border-primary text-primary px-8">
                Registration
              </Button>
            </Link>
          </div>



          {/* Image positioned absolutely at the bottom */}
          <div className="absolute bottom-0 right-0 w-full flex justify-end ">
            <img
                src="/signin.jpg" // Use the correct image source
                alt="Pet"
                className="w-auto h-auto max-h-[351px] max-w-[437px] object-contain" // Added rotate-y-180 here
            />
          </div>
        </div>
      </div>
  );
};

// Ensure SocialButton component is defined if not imported
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

export default Login;