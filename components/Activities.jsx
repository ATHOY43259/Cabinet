import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Activities = ({ activities }) => {
  return (
    <div className="p-4">
      <Card className="w-full shadow-md rounded-lg border border-gray-200">
        <CardHeader className="border-b border-gray-300 p-4">
          <div className="flex justify-between items-center w-full">
            <CardTitle className="text-lg font-semibold text-gray-800">Cabinet Activities</CardTitle>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="p-2 pl-8 border border-gray-300 rounded w-40"
                />
                <img
                  src="/assets/search.svg"
                  alt="Search"
                  className="absolute left-2 top-2 w-6 h-6 text-gray-500"
                />
              </div>
              <div className="relative">
                <select className="p-2 pl-8 border border-gray-300 rounded w-24 appearance-none">
                  <option>Filter</option>
                </select>
                <img
                  src="/assets/flux.svg"
                  alt="Filter"
                  className="absolute left-2 top-2 w-6 h-46text-gray-500"
                />
              </div>
              <select className="p-2  border border-gray-300 rounded w-32">
                  <option>Bulk Action</option>
                </select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-2">
          <Table>
            <TableHeader>
                <TableRow>
                  <TableHead className="w-10"></TableHead>
                  <TableHead className="text-gray-600 relative">
                    <span className="inline-block">Activity ID</span>
                    
                    <img
                    src="/assets/filtar.svg"
                    alt="Filter"
                    className="inline-block ml-1 h-4 w-4 align-middle"
          />
                  </TableHead>
                  <TableHead className="text-gray-600 relative">
                    <span className="inline-block">Date & Time</span>
                    <img
                    src="/assets/filtar.svg"
                    alt="Filter"
                    className="inline-block ml-1 h-4 w-4 align-middle"
                    />
                  </TableHead>
                  <TableHead className="text-gray-600 relative">
                    <span className="inline-block">Cabinet ID</span>
                    <img
                    src="/assets/filtar.svg"
                    alt="Filter"
                    className="inline-block ml-1 h-4 w-4 align-middle"
                    />
                  </TableHead>
                  <TableHead className="text-gray-600 relative">
                    <span className="inline-block">Slot ID</span>
                    <img
                    src="/assets/filtar.svg"
                    alt="Filter"
                    className="inline-block ml-1 h-4 w-4 align-middle"
                    />
                  </TableHead>
                  <TableHead className="text-gray-600 relative">
                    <span className="inline-block">Battery ID</span>
                    <img
                    src="/assets/filtar.svg"
                    alt="Filter"
                    className="inline-block ml-1 h-4 w-4 align-middle"
                    />
                  </TableHead>
                  <TableHead className="text-gray-600 relative">
                    <span className="inline-block">Activity Type</span>
                    <img
                    src="/assets/filtar.svg"
                    alt="Filter"
                    className="inline-block ml-1 h-4 w-4 align-middle"
                    />
                  </TableHead>
                  <TableHead className="text-gray-600 relative">
                    <span className="inline-block">Details</span>
                    <img
                    src="/assets/filtar.svg"
                    alt="Filter"
                    className="inline-block ml-1 h-4 w-4 align-middle"
                    />
                  </TableHead>
                </TableRow>
              </TableHeader>
            <TableBody>
              {activities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="w-10">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  </TableCell>
                  <TableCell className={"text-blue-500"}>{activity.id}</TableCell>
                  <TableCell>{activity.dateTime}</TableCell>
                  <TableCell>{activity.cabinetId}</TableCell>
                  <TableCell>{activity.slotId}</TableCell>
                  <TableCell>{activity.batteryId}</TableCell>
                  <TableCell>{activity.activityType}</TableCell>
                  <TableCell>{activity.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-between mt-4 items-center">
            <div className="flex items-center space-x-2">
              <select className="p-2 border border-gray-300 rounded">
                <option>20</option>
              </select>
              <span className="text-gray-600 text-sm">Items per page 1-20 of 200 items</span>
            </div>
            <div className="flex space-x-1">
              <Button variant="outline" size="sm" className="text-gray-600 border border-gray-300 rounded px-2 py-1">
                1
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 border border-gray-300 rounded px-2 py-1">
                2
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 border border-gray-300 rounded px-2 py-1">
                3
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 border border-gray-300 rounded px-2 py-1">
                4
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 border border-gray-300 rounded px-2 py-1">
                5
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 border border-gray-300 rounded px-2 py-1">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activities;