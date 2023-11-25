import { LazyLoadImage } from "react-lazy-load-image-component";

import Nav from "../components/Nav/Nav";
import BandsArray from "../utils/BandsArray";

const Bands = () => {
  return (
    <>
      <Nav />
      <img
        src="/assets/full-logo.webp"
        alt="NEDM Bonanza"
        className="mx-auto h-72 drag my-4"
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-xl mb-6">
          {BandsArray.map((band) => {
            return (
              <LazyLoadImage
                src={`/assets/bands/${band.src}`}
                alt={band.alt}
                className="h-36 md:h-96 rounded-lg"
                key={band.alt}
                effect="opacity"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bands;
