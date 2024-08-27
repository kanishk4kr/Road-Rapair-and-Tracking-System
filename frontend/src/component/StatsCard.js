import React from 'react';

const StatsCard = ({slNO, id,location,type, name}) => {
    const bgColorClass = slNO % 2 === 0 ? 'bg-gray-400' : 'bg-gray-200';
  return (
    <div className={`flex justify-between items-center ${bgColorClass} hover:bg-gray-500 shadow-md rounded-lg p-4 mb-2`}>
      <span className="text-sm font-semibold">{slNO}</span>
      <span className="text-sm font-semibold">{id}</span>
      <span className="text-sm font-semibold">{location}</span>
      <span className="text-sm font-semibold">{type}</span>
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
};

export default StatsCard;
