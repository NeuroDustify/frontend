import React, { useState, useEffect } from "react";
import { Menu, X, Bell, Trash2, BarChart2, Settings, User, LogOut, Map, Calendar } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Single useEffect hook for time update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Custom theme colors - Blue theme
  const brandColor = "bg-blue-600";
  const brandHoverColor = "hover:bg-blue-700";
  const brandTextColor = "text-blue-600";
  const brandHoverTextColor = "hover:text-blue-600";

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className={`${brandColor} text-white p-2 rounded-lg shadow-md`}>
              <Trash2 className="h-6 w-6" />
            </div>
            <h1 className="text-xl h-full translate-y-[-12px] md:text-2xl font-bold text-gray-800 tracking-tight">
              Smart<span className={brandTextColor}>Bin</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            <a href="#" className={`flex items-center space-x-1 ${brandTextColor} font-medium`}>
              <BarChart2 className="h-4 w-4" />
              <span>Dashboard</span>
            </a>
            <a href="#" className={`flex items-center space-x-1 text-gray-600 ${brandHoverTextColor} transition-colors`}>
              <Trash2 className="h-4 w-4" />
              <span>Bins</span>
            </a>
            <a href="#" className={`flex items-center space-x-1 text-gray-600 ${brandHoverTextColor} transition-colors`}>
              <Map className="h-4 w-4" />
              <span>Map View</span>
            </a>
            <a href="#" className={`flex items-center space-x-1 text-gray-600 ${brandHoverTextColor} transition-colors`}>
              <Calendar className="h-4 w-4" />
              <span>Schedule</span>
            </a>
            <a href="#" className={`flex items-center space-x-1 text-gray-600 ${brandHoverTextColor} transition-colors`}>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </a>
          </div>

          {/* User Profile and Notifications */}
          <div className="flex items-center space-x-4">
            {/* Time Display */}
            <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-gray-600">{formattedTime}</span>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button className="p-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="h-8 w-8 overflow-hidden rounded-full">
                  <div className={`${brandColor} text-white h-full w-full flex items-center justify-center font-medium`}>
                    A
                  </div>
                </div>
                <span className="hidden md:inline-block text-sm font-medium text-gray-700">Admin</span>
              </button>

              {/* Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">Admin User</p>
                    <p className="text-xs text-gray-500">admin@smartbin.io</p>
                  </div>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </a>
                  <div className="border-t border-gray-100"></div>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-white ${brandColor}`}
            >
              <BarChart2 className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              <Trash2 className="h-5 w-5" />
              <span>Bins</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              <Map className="h-5 w-5" />
              <span>Map View</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex items-center px-4">
              <div className={`${brandColor} text-white rounded-full h-10 w-10 flex items-center justify-center font-medium`}>
                A
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Admin User</div>
                <div className="text-sm font-medium text-gray-500">admin@smartbin.io</div>
              </div>
              <div className="ml-auto bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-gray-600">{formattedTime}</span>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="#"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign out</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;