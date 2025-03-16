import { Card, CardContent } from "@/components/ui/card";

const Stats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-4 p-4">
      {Object.entries(stats).map(([key, value]) => (
        <Card key={key} className="shadow-sm rounded-lg overflow-hidden">
          <CardContent className="px-4 py-2 text-left">
            <p className="text-xl capitalize font-semibold text-gray-600 ">{key.split(/(?=[A-Z])/).join(" ")}</p>
            <p className="text-2xl font-semibold text-gray-600 mt-1">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;