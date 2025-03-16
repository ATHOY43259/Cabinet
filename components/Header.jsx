import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col">
    {/* Header Div with Brand Mark, Cabinet Title, and Icons */}
    <div className="flex items-center p-6 bg-white border-b border-gray-200">
      <img src="/assets/battery.svg" alt="Brand Mark" className="w-6 h-6 mr-2" />
      <h1 className="text-2xl font-bold text-gray-800">Cabinet</h1>
      <div className="flex space-x-4 items-center ml-auto">
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <Bell className="h-5 w-5 text-gray-500" />
        </button>
        
        <button className="hover:bg-gray-200 rounded">
        <img src="/assets/UserMenu.svg" alt="UserMenu" />
        </button>
        
      </div>
    </div>
    {/* Separate Div for Add Cabinet Button */}
    <div className="flex justify-end p-4">
    <Button className="flex items-center gap-2 bg-[#1E293B] text-white rounded-md px-4 py-2 hover:bg-[#1E293B]/90">
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" fill="none" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8M8 12h8" />
      </svg>
      <span className="text-sm font-medium">Add Cabinet</span>
    </Button>
    </div>
  </div>
  );
};

export default Header;