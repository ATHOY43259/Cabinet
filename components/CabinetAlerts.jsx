import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CabinetAlerts = () => {
  const alerts = [
    { count: 3, color: "bg-red-500" },
    { count: 2, color: "bg-yellow-500" },
    { count: 1, color: "bg-blue-500" },
    { count: 3, color: "bg-red-500" },
  ];

  return (
    <Card className="w-full md:w-1/2 p-2 shadow-sm rounded-lg">
      <CardHeader className="border-b border-gray-300 p-3">
        <CardTitle className="text-lg  font-semibold text-gray-800">Cabinet Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-3">
      <div className="divide-y divide-gray-200">
          {alerts.map((alert, index) => (
            <div key={index} className="flex justify-between items-center py-3">
              <span className="text-gray-900 text-sm">Alert</span>
              <span
                className={`w-10 h-6 rounded-full ${alert.color} flex items-center justify-center text-white text-sm font-semibold`}
              >
                {alert.count}
              </span>
            </div>
          ))}
        </div>
        
      </CardContent>
    </Card>
  );
};

export default CabinetAlerts;