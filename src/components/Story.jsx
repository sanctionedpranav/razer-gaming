import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import Button from "./Button";
import RoundedCornerSVG from "./RoundedCornerSVG";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const element = frameRef.current;
    if (!element) return;

    const rectangle = element.getBoundingClientRect();
    const x = clientX - rectangle.left;
    const y = clientY - rectangle.top;
    const centerX = rectangle.width / 2;
    const centerY = rectangle.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The Multiversal ip world
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br/> hidden real<b>m</b>"
            sectionId="#story"
            containerClass={
              "mt-5 pointer-events-none mix-blend-difference relative z-10"
            }
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  onMouseLeave={handleMouseLeave}
                  // onMouseUp={handleMouseUp}
                  // onMouseEnter={handleMouseEnter}
                  onMouseMove={handleMouseMove}
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>

            <RoundedCornerSVG />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit  flex-col  items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              libero dicta obcaecati reiciendis odit. Natus ipsam iusto voluptas
              dignissimos sequi, sint, consequatur necessitatibus, eaque quos
              assumenda accusantium et omnis labore.
            </p>

            <Button
              id={"realm Button"}
              title={"Discover Prologue"}
              containerClass={"mt-5"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
