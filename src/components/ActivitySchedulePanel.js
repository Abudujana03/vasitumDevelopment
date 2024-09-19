import React from 'react';

const ActivitySchedulePanel = () => {
  return (
    <div className="space-y-6 w-full ">
        {/* Recent Activity Section */}
        <div className='bg-slate-800 pb-4 rounded-lg'>
          <div className="text-xl text-white pl-4 font-semibold bg-slate-800 shadow-lg py-4 rounded-lg">Recently Activity</div>
          <div className=" text-white pl-6 pb-4 rounded-lg">

            <p className="mt-4">You Posted a New Job</p>
            <p className="text-sm text-gray-400 mt-1">Kindly check the requirements and terms of work and make sure everything is right.</p>

          </div>
          <div className='flex justify-between gap-2 px-6 text-center'>
            <p className=" text-sm text-gray-400 py-4">Today you made 12 Activity</p>
            <button className="bg-red-500 text-white font-semibold px-4  rounded-md">See All Activity</button>
          </div>
        </div>

        {/* Upcoming Schedule Section */}
        <div className="bg-white mt-4  p-6 rounded-lg border">
          <div>
              <div className='flex justify-between'>
                <h3 className="text-lg font-semibold">Upcoming Schedule</h3>
                <input className='border max-w-60' type="date" />
              </div>
              <ul className="mt-4 space-y-3">
                <div>
                  <p className='pb-2'>Priority</p>
                  <li className='pl-4 bg-slate-400 rounded-md p-2'>
                    <p>Review candidate applications</p>
                    <span className="text-sm text-gray-100">Today, 11:30 AM</span>
                  </li>
                </div>
                <div>
                  <p className='pb-2'>Other</p>
                  <li className='pl-4 bg-slate-400 rounded-md p-2 mb-4'>
                    <p>Interview with candidates</p>
                    <span className="text-sm text-gray-100">Today, 10:30 AM</span>
                  </li>
                  <li className='pl-4 bg-slate-400 rounded-md p-2'>
                    <p>Short meeting with product designer from IT Department</p>
                    <span className="text-sm text-gray-100">Today, 09:15 AM</span>
                  </li>
                </div>
              </ul>
          </div>
          <div className='text-center'> 
            <hr className=" mt-4"/>
            <button className="text-red-500 text-md mt-4 text-center">Create a New Schedule</button>
          </div>
      </div>
    </div>
  );
};
export default ActivitySchedulePanel;
