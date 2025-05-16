import React, { useState } from "react";
import DustbinTable from "../components/DustbinTable";
import DustbinForm from "../components/DustbinForm";
import StatCards from "../components/StatCard";

// Main Dashboard Component
const Dashboard = () => {
  // State to hold dustbin data
  const [dustbins, setDustbins] = useState([
    {
      id: "#001",
      location: "Park Entrance",
      fillLevel: 75,
      status: "Active",
      lastReported: "1 minute ago",
    },
    {
      id: "#002",
      location: "Market Square",
      fillLevel: 95,
      status: "Needs Attention",
      lastReported: "5 minutes ago",
    },
    {
      id: "#003",
      location: "Community Center",
      fillLevel: 30,
      status: "Active",
      lastReported: "10 minutes ago",
    },
  ]);

  // Handle adding a new dustbin
  const handleAddDustbin = (newDustbinData) => {
    if (newDustbinData.id && newDustbinData.location) {
      // Add new dustbin with default values
      setDustbins([
        ...dustbins,
        {
          ...newDustbinData,
          fillLevel: 0,
          status: "Active",
          lastReported: "Just now",
        },
      ]);
    }
  };

  // Calculate overall status
  const totalDustbins = dustbins.length;
  const needingCollection = dustbins.filter(
    (dustbin) => dustbin.fillLevel >= 90
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white overflow-hidden shadow-xl rounded-2xl mb-8">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-xl p-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Smart Dustbin Dashboard
                  </h1>
                  <p className="mt-1 text-gray-500">
                    Monitor and manage your smart dustbin network in real-time
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  System Online
                </span>
              </div>
            </div>
          </div>
        </div>

        <StatCards/>
        
        {/* Main Content */}
        <div className="flex flex-col gap-8">
          {/* Dustbin Details Section - Takes up 2/3 on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white overflow-hidden shadow-xl rounded-2xl p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-indigo-500 text-white p-2 rounded-lg mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </span>
                Dustbin Network Status
              </h2>
              
              <DustbinTable dustbins={dustbins} />
            </div>
          </div>

          {/* Add New Dustbin Section - Takes up 1/3 on large screens */}
          <div className="lg:col-span-1">
            <DustbinForm onAddDustbin={handleAddDustbin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;