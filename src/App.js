import React from 'react';
import Sidebar from './components/Sidebar'; // Existing Sidebar
import Navbar from './components/Navbar'; // Existing Navbar
import DashboardMainPanel from './components/MainPanel';
import ActivitySchedulePanel from './components/ActivitySchedulePanel';

const App = () => {
  return (
    <div className="flex">
      <div className='h-screen fixed'>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-4 ml-40">  {/* Added margin-left to account for fixed sidebar */}
      <Navbar />
        <hr className='mt-4' />
        
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
          {/* Main Panel (Dashboard + Announcements) */}
          <div className="lg:col-span-2">
            <DashboardMainPanel />
          </div>
          
          {/* Side Panel (Recent Activity + Schedule) */}
          <div className="lg:col-span-1">
            <ActivitySchedulePanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
