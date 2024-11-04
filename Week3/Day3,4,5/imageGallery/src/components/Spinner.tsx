const Spinner = () => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <h1 className="font-mont text-xl font-bold">Loading Spinner</h1>
      <div className="my-8  pb-4 h-16 w-16 rounded-full border-4 border-transparent border-t-mintGreen animate-spin "></div>
    </div>
  );
};

export default Spinner;
