import React from 'react';

const AppDownload = () => {
  return (
          <div className="flex flex-row flex-wrap justify-center items-center container mx-auto p-4">
            {/* Left div - 50% width */}
            <div className="w-1/2">
              <div>
                <img src="/public/download_app.png" alt="Download App" className="h-32" />
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="block">
                  <img src="/public/app_store.PNG" alt="App Store" className="h-10" />
                </a>
                <a href="#" className="block">
                  <img src="/public/google_play.PNG" alt="Google Play" className="h-10" />
                </a>
              </div>
            </div>

            {/* Right div - 50% width */}
            <div className="w-1/2 relative">
              <img
                  src="/public/mobile_app.png"
                  alt="Mobile App"
              />
            </div>
          </div>
  );
};

export default AppDownload;