// import { LazyLoadImage } from "react-lazy-load-image-component";

import Nav from "../components/Nav/Nav";
// import BandsArray from "../utils/BandsArray";

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
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-screen-xl mb-6">
					<img
						src="/assets/days/Friday.webp"
						alt="Friday Flier"
						className="rounded-lg"
					/>
					<img
						src="/assets/days/Saturday.webp"
						alt="Saturday Flier"
						className="rounded-lg"
					/>
					<img
						src="/assets/days/Sunday.webp"
						alt="Sunday Flier"
						className="rounded-lg"
					/>
					<img
						src="/assets/days/Friday Schedule.webp"
						alt="Sunday Flier"
						className="rounded-lg"
					/>
					<img
						src="/assets/days/Saturday Schedule.webp"
						alt="Sunday Flier"
						className="rounded-lg"
					/>
					<img
						src="/assets/days/Sunday Schedule.webp"
						alt="Sunday Flier"
						className="rounded-lg"
					/>
				</div>
			</div>

			{/* <div className="flex justify-center">
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
          }).reverse()}
        </div>
      </div> */}
		</>
	);
};

export default Bands;
