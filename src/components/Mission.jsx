import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { missions } from "../constants";

gsap.registerPlugin(ScrollTrigger);


const Mission = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = missions[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
        //   trigger: "#counter",
          start: "top center",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="mission" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {missions.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-3xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-base leading-relaxed">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
