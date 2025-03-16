// components/Cabinets.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Cabinets = () => {
  const cabinets = [
    { id: "CAB-001", slots: "2/4", hasDanger: true },
    { id: "CAB-002", slots: "4/4", hasDanger: false },
    { id: "CAB-003", slots: "3/4", hasDanger: true },
    { id: "CAB-004", slots: "1/4", hasDanger: true },
  ];

  return (
    <Card className="w-full shadow-md rounded-lg border border-gray-200">
      <CardHeader className="flex justify-between items-right border-b border-gray-300">
      <CardTitle className="text-lg font-semibold p-1 text-gray-900">Cabinets</CardTitle>
      
    </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cabinets.map((cabinet) => (
            <div
              key={cabinet.id}
              className="border border-gray-200 rounded-lg p-3 bg-gray-50 shadow-sm"
            >
              <h3 className="text-gray-900 text-sm font-medium border-b border-gray-300 pb-2 ">
                Cabinet ID: {cabinet.id}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-700 text-xl ">Slots</p>
                <p className="text-blue-500 text-xl  font-medium">{cabinet.slots}</p>
              </div>
              <div className="flex items-center gap-1 mt-15">
                <img src="/assets/solar.svg" alt="Solar" className="w-10 h-10 text-gray-600" />
                {cabinet.hasDanger && (
                  <img src="/assets/danger.svg" alt="Danger" className="w-10 h-10 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Cabinets;