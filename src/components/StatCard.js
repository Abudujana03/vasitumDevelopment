import React from 'react';

const StatCard = ({ title, count, subtitle, highlightColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <h1 className="text-4xl font-bold">{count}</h1>
      <p className="text-sm text-gray-500">{subtitle}</p>
      {highlightColor && <p className={`text-${highlightColor}-500`}>Urgently needed</p>}
    </div>
  );
};

export default StatCard;
