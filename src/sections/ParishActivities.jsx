import React from 'react'
import { activities } from '../constants';

const ParishActivities = () => {
  return (
    <div id='activity' className='activity-showcase py-10'>
      <div className='w-full px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {activities.map((activity) => (
            <div key={activity.id} className='bg-white-50 shadow-md rounded-lg p-4'>
              <div className='image-wrapper mb-4'>
                <img src={activity.image} alt={activity.title} className='w-full h-auto rounded' />
              </div>
              <h2 className='text-xl lg:text-3xl font-bold mb-2 text-black'>{activity.title}</h2>
              <div className='text-gray-800 md:text-base text-sm'>
                {activity.description.map((item, index) =>
                  typeof item === 'string' ? (
                    <p key={index} className={`mb-2 ${index === 0 ? 'font-bold' : 'uppercase font-bold'}`}>
                      {item}
                    </p>
                  ) : (
                    <p key={index}>
                      <span className='text-black font-bold'>{item.label}:</span> {item.time}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParishActivities;