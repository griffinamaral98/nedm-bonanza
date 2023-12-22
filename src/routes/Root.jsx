import Nav from "../components/Nav/Nav";

const HomePage = () => {
  return (
    <>
      <Nav />
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center ">
          <img
            src="/assets/Flyer.webp"
            alt="NEDM Bonanza"
            className="mx-auto md:h-fit drag"
          />
          <div className="flex flex-col mx-auto space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.instagram.com/nedm_bonanza/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-none"
              target="blank"
            >
              <img src="/assets/instagram.svg" alt="" className="mr-2" />
              Follow us on Instagram for more updates
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
