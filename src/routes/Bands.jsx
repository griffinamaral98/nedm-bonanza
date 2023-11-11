import { LazyLoadImage } from "react-lazy-load-image-component";

import Nav from "../components/Nav/Nav";

const Bands = () => {
  return (
    <>
      <Nav />
      <img
        src="/assets/full-logo.png"
        alt="NEDM Bonanza"
        className="mx-auto h-72 drag my-4"
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-xl">
          <div>
            <LazyLoadImage
              src="/assets/BONGINATOR.png"
              alt="Bonginator"
              className="h-36 md:h-96 rounded-lg"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/FROGMALLET.png"
              alt="Frog Mallet"
              className="h-36 md:h-96 rounded-lg"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/GROANING.png"
              alt="Groaning Retch"
              className="h-36 md:h-96 rounded-lg"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/genophobic.png"
              alt="Genophobic Perversion"
              className="h-36 md:h-96 rounded-lg"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/judge.png"
              alt="JUDGEXJUDY"
              className="h-36 md:h-96 rounded-lg"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/MATRIPHAGY.png"
              alt="Mathriphagy"
              className="h-36 md:h-96 rounded-lg"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/NECRALANT.png"
              alt="Necralant"
              className="h-36 md:h-96 rounded-lg"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/PRACTICALGORE.png"
              alt="Practical Gore"
              className="h-36 md:h-96 rounded-lg"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/SCISSORHASH.png"
              alt="Scissorhash"
              className="h-36 md:h-96 rounded-lg"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/WRETCHED.png"
              alt="Wretched Inferno"
              className="h-36 md:h-96 rounded-lg mb-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bands;
