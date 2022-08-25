import React from "react";
import Feature1 from "../../assets/images/feature-icon-1.png";
import Feature2 from "../../assets/images/feature-icon-2.png";
import Feature3 from "../../assets/images/feature-icon-3.png";
import Feature from "./Feature";

const Features = () => {
  const Features = [
    {
      id: 1,
      image: Feature1,
      title: "Create An Account",
      desc: "Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.",
    },
    {
      id: 1,
      image: Feature2,
      title: "Attatch Bank Account",
      desc: "Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.",
    },
    {
      id: 1,
      image: Feature3,
      title: "Send Money",
      desc: "Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin Fperfer endis velit sed fuga volup tation sit praising pain.",
    },
  ];
  return (
    <section className="py-20 px-4 lg:px-0">
      <div className="grid lg:grid-cols-3 gap-5">
        {Features.map((feature,i) => (
          <Feature key={i} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
