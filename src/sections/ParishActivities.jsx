import React, { useRef } from 'react';
import { activities } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ParishActivities = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]); // array of refs for each card

  // Clean ref array before each render
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);

  return (
    <section id="activitysection" ref={sectionRef} className="activity-showcase py-10">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              ref={addToRefs}
              className="bg-white-50 shadow-md rounded-lg p-4"
            >
              <div className="image-wrapper mb-4">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-auto rounded"
                />
              </div>
              <h2 className="text-xl lg:text-3xl font-bold mb-2 text-black">{activity.title}</h2>
              <div className="text-gray-800 md:text-base text-sm">
                {activity.description.map((item, i) =>
                  typeof item === 'string' ? (
                    <p key={i} className={`mb-2 ${i === 0 ? 'font-bold' : 'uppercase font-bold'}`}>
                      {item}
                    </p>
                  ) : (
                    <p key={i}>
                      <span className="text-black font-bold">{item.label}:</span> {item.time}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParishActivities;
