import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

const AccordionInfo = () => {
	const [open, setOpen] = useState(1);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	return (
		<>
			<Accordion
				open={open === 1}
				className="py-8 px-4 mx-auto max-w-screen-lg"
			>
				<AccordionHeader
					onClick={() => handleOpen(1)}
					className="text-white hover:text-[#96ff00]"
				>
					Fest Info
				</AccordionHeader>
				<AccordionBody className="text-white text-lg">
					<p>
						The New England Death Metal Funtime Bonanza is the the most extreme
						outdoor music festival in the New England area. Hosted in Lebanon,
						ME, the Bonanza brings in artists and vendors from all over New
						England, as well as bands from all over the country. 2024 will mark
						our 3rd year of doing the Bonanza, and it is by far our biggest and
						most ambitious Bonanza yet.
					</p>
					<br />
					<p>
						This year&apos;s festival features 45 bands from all over the US,
						spanning multiple genres including death, grind, thrash, and even
						folk punk. The lineup for this years Bonanza was carefully curated
						to deliver equal parts brutality and fun. We will also be hosting
						many games and events to keep everyone at their most entertained all
						weekend.
					</p>
				</AccordionBody>
			</Accordion>

			<Accordion
				open={open === 2}
				className="py-8 px-4 mx-auto max-w-screen-lg"
			>
				<AccordionHeader
					onClick={() => handleOpen(2)}
					className="text-white hover:text-[#96ff00]"
				>
					Venue Info
				</AccordionHeader>
				<AccordionBody className="text-white text-lg">
					<img src="/assets/map.webp" alt="Venue Map" className="rounded-lg" />
					<h2 className="text-2xl underline">Vendors</h2>
					<p>
						The 2024 NEDMFTB is being held at Charleez Hill in Lebanon, ME, (aka
						The Cannabis Church of New England). This venue offers a state of
						the art indoor stage and plenty of outdoor space for camping,
						vendors, and of course the additional outdoor stage. This venue is a
						safe haven for all walks of life and we believe there is no better
						spot to host and event of this scale.
					</p>

					<br />

					<h2 className="text-2xl underline">Venue Rules</h2>

					<ul className="list-disc list-inside">
						<li>NO PETS</li>
						<li>NO HARD DRUGS</li>
						<li>NO WEAPONS</li>
						<li>NO FIGHTS</li>
						<li>NO ASSHOLES</li>
						<li>
							Violation of these rules will result in PERMANENT ejection from
							the festival
						</li>
					</ul>

					<br />

					<h2 className="text-2xl underline">
						Things you should know about Charleez Hill
					</h2>

					<ul className="list-disc list-inside">
						<li>THERE IS NO RUNNING WATER!! BRING PLENTY OF WATER BOTTLES!</li>
						<li className="indent-8">
							Additional porta potties will be provided for the fest
						</li>
						<li>
							NO ALCOHOL IS SOLD ON SITE!! THE FEST IS BYOB!! BE RESPONSIBLE!
							COOLERS ARE ALLOWED AND ENCOURAGED
						</li>
						<li>CASH!! CASH!! CASH!!</li>
						<li>
							Cell phone service is limited and there is NO WI-FI so be sure to
							bring enough cash so you can enjoy and support all our great
							vendors!
						</li>
					</ul>

					<br />

					<h2 className="text-2xl underline">Parking</h2>
					<ul className="list-disc list-inside">
						<li>
							Upon arrival on Center Rd, you will be greeted by a parking
							attendant
						</li>
						<li>
							If you are camping, you may bring your car up to the fest grounds
							and unload your camping gear
						</li>
						<li>
							Once unloaded you will be directed to the next available parking
							space.{" "}
						</li>
						<li>
							Parking will start on the street. Once that is full we will use
							our auxiliary parking lot located on a field just down the road
							from the venue
						</li>
						<li>
							Vehicle campers will be directed to the vehicle camping area.
						</li>
					</ul>
				</AccordionBody>
			</Accordion>

			<Accordion
				open={open === 3}
				className="py-8 px-4 mx-auto max-w-screen-lg"
			>
				<AccordionHeader
					onClick={() => handleOpen(3)}
					className="text-white hover:text-[#96ff00]"
				>
					Camping
				</AccordionHeader>
				<AccordionBody className="text-white text-lg">
					<p>
						We highly encourage everyone attending the Bonanza to bring a tent
						and camp out, or camp in their car. If you plan on camping at this
						year’s Bonanza, here is everything you should know.
					</p>

					<br />

					<h2 className="text-2xl underline">
						<a
							href="https://www.amazon.com/hz/wishlist/ls/1LU2VT9VXH2D0/ref=hz_ls_biz_ex"
							target="_blank"
							rel="noreferrer"
						>
							Amazon Wishlist of things to bring!
						</a>
					</h2>

					<br />

					<h2 className="text-2xl underline">Vehicle Camping</h2>
					<ul className="list-disc list-inside">
						<li>
							If you are camping in your vehicle, you must do so in our
							designated Vehicle Camping area
						</li>
						<li>
							Please limit travel in and out of the vehicle camping area.{" "}
						</li>
						<li>Idling your engine overnight is not permitted.</li>
					</ul>

					<br />

					<h2 className="text-2xl underline">What you should bring!</h2>
					<ul className="list-disc list-inside">
						<li>Tent</li>
						<li>Sleeping Bag</li>
						<li>Bug Spray</li>
						<li>Sunblock</li>
						<li>Lots of water</li>
						<li>Cooler</li>
						<li>Food</li>
						<li>Something to cook with</li>
						<li>Friends</li>
						<li>Beer</li>
					</ul>

					<br />

					<h2 className="text-2xl underline">
						What you really shouldn&apos;t bring!
					</h2>
					<ul className="list-disc list-inside">
						<li>Pets</li>
						<li>Really loud speakers (quiet music is fine)</li>
						<li>Fireworks</li>
						<li>Knives</li>
					</ul>

					<br />

					<h2 className="text-2xl underline">Rules & Guidelines</h2>
					<ul className="list-disc list-inside">
						<li>
							Campfires are designated to the fire pits located around the
							campgrounds
						</li>
						<li>
							Campsites are first come first serve. There are no designated or
							reserved areas
						</li>
						<li>Be considerate of other campers space</li>
					</ul>
				</AccordionBody>
			</Accordion>

			<Accordion
				open={open === 8}
				className="py-8 px-4 mx-auto max-w-screen-lg"
			>
				<AccordionHeader
					onClick={() => handleOpen(8)}
					className="text-white hover:text-[#96ff00]"
				>
					Events
				</AccordionHeader>
				<AccordionBody className="text-white text-lg">
					<p className=" mb-4">
						To ensure that every Bonanza attendee is thoroughly entertained at
						all hours of the festival, we have lots of games and activities
						planned throughout the weekend. Some of these activities include:
					</p>

					<ul>
						<li className="text-2xl text-center text-[#96ff00]">
							The NEDM Clam Chowder Chug Contest (21+)
						</li>
						<img
							src="assets/events/chowder.webp"
							alt="Clam Chowder Chug"
							className="w-[500px] mx-auto"
						/>
						<li className="text-center mb-4">
							This one’s for the freaks. Think you got what it takes?
						</li>

						<li className="text-2xl text-center text-[#96ff00]">
							Live Hash Making Workshop with Scissorhash
						</li>
						<img
							src="assets/events/hash.webp"
							alt="Hash Making Workshop"
							className="w-[500px] mx-auto"
						/>
						<li className="text-center mb-4">
							Join Erik and Jack as they teach everyone the artisan process of
							making ice-water bucket hash! Live for everyone to see and learn!
							Pay attention, there will be a quiz.
						</li>

						<li className="text-2xl text-center text-[#96ff00]">
							Bonginator&apos;s Bong Rip Competition (21+)
						</li>
						<img src="assets/events/bong.webp" className="w-[500px] mx-auto" />
						<li className="text-center mb-4">
							Watch as contestants fry their way to the top. Each member of the
							band Bonginator will judge each individual bong rip for length,
							capacity, and style. Must be 21+ to enter
						</li>

						<li className="text-2xl text-center text-[#96ff00]">
							Practical Gore&apos;s Horror Scream contest
						</li>
						<img
							src="assets/events/scream.webp"
							alt="Practical Gore Horror Scream"
							className="w-[500px] mx-auto"
						/>
						<li className="text-center">
							Time to scare the neighbors! We wanna hear your most blood
							curdling cries for help in the Horror Scream competition! Judged
							by the members of Practical Gore, the winner will be sampled on an
							upcoming track of theirs!
						</li>
					</ul>
					<hr className="mt-4 mb-4" />

					<p className="text-center text-2xl text-[#96ff00] mb-6">
						Each night, after all the bands are done, we have nightly events
						that are sure to keep the party going.
					</p>
					<ul>
						<li className="text-2xl text-center text-[#96ff00]">
							Friday, June 28 - Freak Show with Kyle Leist
						</li>
						<img
							src="assets/events/freak show.webp"
							className="w-[500px] mx-auto"
						/>
						<li className="text-center">
							For your morbid curiousity and for his sick pleasure we present
							you with CIRQUE SOULLESS. A traveling freakshow unearthed from the
							underground. Expect to be called on stage to help with his
							masochistic desires.
						</li>

						<li className="text-2xl text-center text-[#96ff00]">
							Friday, June 28 - Metal Trivia with Shay
						</li>
						<img
							src="assets/events/trivia.webp"
							className="w-[500px] mx-auto"
						/>
						<li className="text-center">
							This one’s for the elitists and gatekeepers. Finally prove to the
							world that you know more than everyone! Be sure to study up on
							Metal Archives!!!
						</li>

						<li className="text-2xl text-center text-[#96ff00]">
							Saturday, June 29 - Goth Rave with DJ Kuro
						</li>
						<img src="assets/events/rave.webp" className="w-[500px] mx-auto" />
						<li className="text-center">
							Kuro spins an ecclectic mix of Retro, 90&apos;s, Glam, Goth,
							Industrial, Synth-Pop, Alterna-Pop, 80&apos;s, and Punk. Come
							Dance Your Ass Off!
						</li>

						<li className="text-2xl text-center text-[#96ff00]">
							Sunday, June 30 - Drag Show featuring Stevie Dicks, Ruko, Sweaty
							Bottom, and Zest
						</li>
						<div className="grid grid-cols-4 gap-2">
							<img
								src="assets/events/drag1.webp"
								className="h-[250px] w-[200px]"
							/>

							<img
								src="assets/events/drag2.webp"
								className="h-[250px] w-[200px]"
							/>
							<img
								src="assets/events/drag3.webp"
								className="h-[250px] w-[200px]"
							/>
							<img
								src="assets/events/drag4.webp"
								className="h-[250px] w-[200px]"
							/>
						</div>
						<li className="text-center">
							Expect the unexpected! This thrilling drag show will absolutely
							knock your socks off! Featuring Splits, Kicks and Dips these
							performances from Stevie Dicks, Ruko, Sweaty and Zest will be
							unlike no other. Be prepared to hear your favorite metal songs in
							ways you haven’t seen before!
						</li>
					</ul>
				</AccordionBody>
			</Accordion>
		</>
	);
};

export default AccordionInfo;
