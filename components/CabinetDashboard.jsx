"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Stats from "./Stats";
import CabinetAlerts from "./CabinetAlerts";
import Cabinets from "./Cabinets";
import Activities from "./Activities";

const CabinetDashboard = () => {
  const cabinets = [
    { id: "CAB-001", slots: "2/4", alerts: 3 },
    { id: "CAB-002", slots: "4/4", alerts: 2 },
    { id: "CAB-003", slots: "3/4", alerts: 3 },
    { id: "CAB-004", slots: "1/4", alerts: 0 },
  ];

  const activities = [
    { id: "AC-0001", dateTime: "30 Oct 2023 - 10:00 am", cabinetId: "CAB-001", slotId: "SL-06", batteryId: "BAT-08", activityType: "Battery Added", details: "Battery ID BAT001 added to SL-06" },
    { id: "AC-0033", dateTime: "31 Oct 2023 - 2:00 pm", cabinetId: "CAB-003", slotId: "SL-02", batteryId: "BAT-09", activityType: "Battery Removed", details: "Battery ID BAT002 removed from SL-02" },
    { id: "AC-0031", dateTime: "1 Nov 2023 - 9:15 am", cabinetId: "CAB-001", slotId: "SL-06", batteryId: "BAT-08", activityType: "Power Off", details: "Power Off CAB-01" },
    { id: "AC-0011", dateTime: "2 Nov 2023 - 3:45 pm", cabinetId: "CAB-001", slotId: "SL-06", batteryId: "BAT-08", activityType: "Power On", details: "Power On CAB-01" },
    { id: "AC-0041", dateTime: "3 Nov 2023 - 11:00 am", cabinetId: "CAB-002", slotId: "SL-02", batteryId: "BAT-08", activityType: "Power On", details: "Battery ID BAT001 added to SL-02" },
    { id: "AC-0012", dateTime: "4 Nov 2023 - 1:00 pm", cabinetId: "CAB-004", slotId: "SL-04", batteryId: "BAT-08", activityType: "Battery Removed", details: "Battery ID BAT001 added to SL-04" },
    { id: "AC-0045", dateTime: "5 Nov 2023 - 4:30 pm", cabinetId: "CAB-001", slotId: "SL-02", batteryId: "BAT-08", activityType: "Battery Added", details: "Battery ID BAT001 added to SL-02" },
    { id: "AC-0071", dateTime: "6 Nov 2023 - 8:00 am", cabinetId: "CAB-004", slotId: "SL-05", batteryId: "BAT-08", activityType: "Battery Added", details: "Battery ID BAT001 added to SL-05" },
  ];

  const stats = {
    totalCabinets: 4,
    inactiveCabinets: 1,
    totalSlots: 16,
    slotsOccupied: 8,
    availableSlots: 8,
    orderToday: 2,
    totalDue: 25,
  };

  return (
    <div className="flex min-h screen bg-gray-100 ">
      <Sidebar />
      <div className="flex-1 ">
        <Header />
        <div className="flex-1 p-4">
        <Stats stats={stats} />
        <div className="flex flex-col md:flex-row gap-4 p-4">
          <CabinetAlerts />
          <Cabinets cabinets={cabinets} />
        </div>
        </div >
        <div className=" px-4">
        <Activities activities={activities} />
        </div>
        
        
      </div>
    </div>
  );
};

export default CabinetDashboard;