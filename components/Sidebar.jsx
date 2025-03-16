import Link from "next/link";
import { LayoutDashboard, ShoppingCart, Box, Battery, AlertTriangle, FileText, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-20 bg-white p-4 flex flex-col justify-between">
      <div className="space-y-6">
        {/* Brand Mark */}
        <div className="flex flex-col items-center space-y-2 mb-6">
          <img src="/assets/brandmark-design.svg" alt="brandmark-design" />
        </div>
        {/* Navigation Links */}
        <div className="space-y-2">
          <Link
            href="/dashboard"
            className="flex flex-col items-center p-2 hover:bg-gray-200 rounded"
          >
            <img src="/assets/dashboard.svg" alt="dashboard" className="w-6 h-6" />
            <span className="text-gray-600 text-sm font-medium">Dashboard</span>
          </Link>
          <Link
            href="/order"
            className="flex flex-col items-center p-2 hover:bg-gray-200 rounded"
          >
            <img src="/assets/order.svg" alt="order" className="w-6 h-6" />
            <span className="text-gray-600 text-sm font-medium">Order</span>
          </Link>
          <Link
            href="/cabinet"
            className="flex flex-col items-center p-2 hover:bg-gray-200 rounded text-purple-600"
          >
            <img src="/assets/cabinet.svg" alt="cabinet" className="w-6 h-6" />
            <span className="text-purple-600 text-sm font-medium">Cabinet</span>
          </Link>
          <Link
            href="/batteries"
            className="flex flex-col items-center p-2 hover:bg-gray-200 rounded"
          >
            <img src="/assets/batteries.svg" alt="batteries" className="w-6 h-6" />
            <span className="text-gray-600 text-sm font-medium">Batteries</span>
          </Link>
          <Link
            href="/vehicles"
            className="flex flex-col items-center p-2 hover:bg-gray-200 rounded"
          >
            <img src="/assets/vehicles.svg" alt="batteries" className="w-6 h-6" />
            <span className="text-gray-600 text-sm font-medium">Vehicles</span>
          </Link>
          <Link
          
            href="/alerts"
            className="flex flex-col items-center p-2 hover:bg-gray-200 rounded"
          >
            <img src="/assets/alerts.svg" alt="alerts" className="w-6 h-6" />
            <span className="text-gray-600 text-sm font-medium">Alerts</span>
          </Link>
          <Link
            href="/logs"
            className="flex flex-col items-center p-2 hover:bg-gray-200 rounded"
          >
            <img src="/assets/logs.svg" alt="logs" className="w-6 h-6" />
            <span className="text-gray-600 text-sm font-medium">Logs</span>
          </Link>
          <Link
            href="/settings"
            className="flex flex-col items-center p-2 hover:bg-gray-200 rounded"
          >
            <img src="/assets/settings.svg" alt="settings" className="w-6 h-6" />
            <span className="text-gray-600 text-sm font-medium">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;