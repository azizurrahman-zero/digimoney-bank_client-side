import React from "react";
import Natural from "../../assets/images/natural.jpg";

const BlogFeature = () => {
  return (
    <div className="w-[90%] mx-auto   ">
      <div className="grid lg:grid-cols-2 bg-[#EDEAE7] pb-[50px] px-10 lg:px-20">
        <div>
          <img
            className="w-[400px] lg:h-[500px] mt-[-40px] "
            src={Natural}
            alt=""
          />
        </div>
        <div className="flex  justify-center items-center">
          <div>
            <h2 className="lg:text-5xl text-3xl">The sky perfectly blended into the landscape</h2>
            <p className="text-lg leading-[1.5] my-6">
              pEt harum quidem rerum facilis est et expedita distinctio. Ut
              proverbia non nulla veriora sint quam vestra dogmata. Si sapiens,
              ne tum quidem miser, cum ab Oroete, praetore Darei, in crucem
              actus est. Tum ille timide vel potius verecunde: Facio, inquit.
              Quae similitudo in genere etiam humano apparet. Quo plebiscito
              decreta a senatu est consuli [...]
            </p>
            <button className=" px-10 py-2 hover:text-primary hover:border-primary font-semibold rounded-full border-2 border-black">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFeature;
