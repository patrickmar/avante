const Stats = () => (
  <section className=" mt-32 text-background text-center bg-dark  ">
    <div className="grid  gap-x-2 grid-cols-4 ">
      <div className="md:p-12 p-6  mt-0 md:mb-0 hover:bg-red-700 object-center  hover:object-contain md:h-[360] md:w-[360] ">
        <h2 className="font-inter font-semibold  md:text-[80px] text-[22.77px]  display-5 text-primary  hover:text-white">
          10+
        </h2>
        <h5 className="font-inter font-semibold md:text-[24px] text-[6.83px]  mt-4">
          Years of experience
        </h5>
      </div>

      <div className="md:p-12 p-6  mt-0 md:mb-0 hover:bg-red-700 object-center hover:text-white hover:object-contain md:h-[360] md:w-[360]">
        <h2 className="font-inter font-semibold md:text-[80px] text-[22.77px]  display-5 text-primary hover:text-white  mb-4">
          35+
        </h2>
        <h5 className="font-inter font-semibold  md:text-[24px] text-[6.83px] font-medium mb-4">
          Satisfied Clients
        </h5>
      </div>

      <div className="md:p-12 p-6  mt-0 md:mb-0 hover:bg-red-700   object-contain md:h-[360] md:w-[360] ">
        <h2 className="font-inter font-semibold  md:text-[80px] text-[22.77px] font-bold display-5 text-primary hover:text-white ">
          50+
        </h2>
        <h5 className="font-inter font-semibold  md:text-[24px] text-[6.83px]  mt-4">
          Complete Projects{' '}
        </h5>
      </div>

      <div className=" md:p-12 p-6  mt-0 md:mb-0 hover:bg-red-700 object-center  hover:object-contain md:h-[360] md:w-[360] ">
        <h2 className="font-inter font-semibold  md:text-[80px] text-[22.77px] font-bold display-5 text-primary hover:text-white">
          5+
        </h2>
        <h5 className="font-inter font-semibold  md:text-[24px] text-[6.83px] font-medium mt-4">
          Live products{' '}
        </h5>
      </div>
    </div>
  </section>
);

export default Stats;
