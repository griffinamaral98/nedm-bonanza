import Nav from "../components/Nav/Nav";

const FestInfo = () => {
  return (
    <>
      <Nav />
      <section className="py-8 px-4 mx-auto text-center">
        <p className="text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-white">
          June 28-30
        </p>
        <p className="text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-white">
          Litchfield, NH
        </p>
        <p className="text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-white">
          Early bird tickets available Dec 1st.
        </p>
        <p className="text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-white">
          More info coming soon...
        </p>
      </section>
    </>
  );
};

export default FestInfo;
