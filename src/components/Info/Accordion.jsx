import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

const AccordionInfo = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        className="py-8 px-4 mx-auto max-w-screen-lg"
      >
        <AccordionHeader onClick={() => handleOpen(1)} className="text-white">
          What you should bring!
        </AccordionHeader>
        <AccordionBody class="text-white">
          The Bonanza isn’t in the middle of nowhere like some other fests are,
          so we do have shops reasonably nearby. However, it’s important to come
          prepared. Here is a list of things we HIGHLY encourage everyone to
          bring with them.
          <br />
          <br />
          THE BONANZA IS 100% BYOB! THERE ARE NO LIMITS TO THIS! BRING AS MUCH
          OR AS LITTLE AS YOU WANT!
          <br />
          <br />
          CASH IS KING!! MANY VENDORS ARE NOT ABLE TO USE THEIR CARD READERS DUE
          TO POOR CELL SERVICE. BRING! CASH!
          <br />
          <br />
          General Supplies you’ll want to have:
          <ol className="list-decimal list-inside">
            <li>Water</li>
            <li>Sunscreen</li>
            <li>BUG SPRAY! BUG SPRAY! BUG SPRAY!</li>
            <li>
              Swim trunks (It&apos;s gonna get messy. Theres also a pool.)
            </li>
            <li>Extra underwear</li>
          </ol>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 2}
        className="py-8 px-4 mx-auto max-w-screen-lg"
      >
        <AccordionHeader onClick={() => handleOpen(2)} className="text-white">
          Features
        </AccordionHeader>
        <AccordionBody className="text-white">
          <h2 className="text-2xl underline">Vendors</h2>
          <p>
            The Bonanza is a hotbed for all kinds of vendors across the New
            England area. Some types of vendors we’ve seen are artists, clothing
            designers, glass blowers, comic book collectors, record labels, and
            many more!
          </p>

          <h2 className="text-2xl underline">Games</h2>
          <p>
            This year we are stepping things up and introducing festival-wide
            games for anyone that wants to participate. Our wonderful
            gamesmaster Vic Gregg (RSI) will be coordinating contests and events
            throughout the weekend, such as:
            <ul className="list-disc list-inside">
              <li>Relay races</li>
              <li>Lube wrestling</li>
              <li>Clam Chowder Chug Contest</li>
              <li>And many more to come!</li>
            </ul>
          </p>

          <h2 className="text-2xl underline">Food</h2>
          <p>
            The Bonanza will feature many different food trucks and vendors to
            keep everyone satisfied all weekend. Campers are also encouraged to
            bring their own food for cooking whenever they like. Food vendors
            will be listed here closer to the fest.
          </p>

          <h2 className="text-2xl underline">Activities/Events</h2>
          <p>
            Throughout the weekend there will be various performances and
            activities to keep everyone entertained at all times. We have horror
            movies playing all day on at outdoor projector. There’s a pool there
            too! Water gun fights are a common occurrence. As soon as bands are
            done, we open up the basement for Karaoke! We also have performances
            scheduled for each night once bands are done, so stay tuned to see
            what those will be!
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 3}
        className="py-8 px-4 mx-auto max-w-screen-lg"
      >
        <AccordionHeader onClick={() => handleOpen(3)} className="text-white">
          Venue Info
        </AccordionHeader>
        <AccordionBody className="text-white">
          Just like in 2023, the 2024 Bonanza will be held at The Five/Nine in
          Litchfield, New Hampshire. You aren’t going to find much on it aside
          from on facebook or instagram, however here is all the info you need.
          The Five/Nine is a house. Does that make the Bonanza a “house show”? I
          don’t know, I guess technically, but this ain’t no house show you’ve
          ever been to. The Bonanza is a full fledged death metal festival just
          like any other you would go to. We work our asses off to make sure our
          stages, facilities, staff, vendors, food, etc. are to the same
          standard as any major festival.
          <br />
          <br />
          In 2024, the Bonanza will have 2 stages. The basement, or “dungeon”
          stage, is the heart of the Five/Nine and where all the most violent
          sets go down. Last year, the entire festival took place on the
          basement stage. This year we are introducing a state-of-the-art
          outdoor stage, because everything this year is going to be BIGGER!!!!!
          So big that we had to add an extra day!! We are also expanding our
          camping space to fit more tents, more porta potties, everything.
          Believe me when I say 2024 will be HUGE.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 4}
        className="py-8 px-4 mx-auto max-w-screen-lg"
      >
        <AccordionHeader onClick={() => handleOpen(4)} className="text-white">
          Rules and Guidelines
        </AccordionHeader>
        <AccordionBody className="text-white">
          While the Bonanza remains a haven for all sorts of death and
          debauchery, we must put certain rules in place to ensure everyone has
          a safe and fun time at the fest. Please read this section carefully so
          we don’t have to kick you out.
          <br />
          <br />
          <ol className="list-decimal list-inside mb-4">
            <li>
              Everyone attending the festival will be required to sign a waiver
              before entering the fest grounds.
            </li>
            <li>
              Fights will not be tolerated. You will be kicked out without
              warning.
            </li>
            <li>
              Underage drinking is prohibited. You will be kicked out without
              warning.
            </li>
            <li>
              If you’re caught giving alcohol to minors, worse things will
              happen to you.
            </li>
            <li>
              Pets are prohibited. If you bring your pet you will be denied
              entry. The homeowners have pets that they let roam the grounds.
              This does NOT mean you are allowed to bring your pet.
            </li>
            <li>
              The Bonanza is not a place for any sort of bigotry. Don’t be an
              asshole.
            </li>
            <li>Entering the house is ABSOLUTELY OFF LIMITS!</li>
          </ol>
          <h2 className="text-2xl underline">Prohibited Items</h2>
          <ol className="list-decimal list-inside">
            <li>Weapons (guns, knives, etc.)</li>
            <li>Pepper Spray</li>
            <li>Hard drugs</li>
            <li>Pets</li>
            <li>Burzum T-Shirts</li>
          </ol>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 5}
        className="py-8 px-4 mx-auto max-w-screen-lg"
      >
        <AccordionHeader onClick={() => handleOpen(5)} className="text-white">
          Safety Guidelines
        </AccordionHeader>
        <AccordionBody className="text-white">
          <ul className="list-disc list-inside mb-4">
            <li>Stay hydrated and PACE YOURSELF.</li>
            <li>
              While we do have a first aid staff at the ready, we encourage
              everyone to pack band aids when camping.
            </li>
            <li>
              This is an all ages event, please be mindful of that when moshing
            </li>
            <li>
              PIT INJURIES DO HAPPEN! You might get hit, pushed, jumped on, etc.
              If you get hurt we have staff at the ready to get you out and to
              safety.
            </li>
            <li>
              If you don’t like to mosh, stay out of the dungeon stage. This
              area is far more compact and there is no room to avoid the pit. We
              reserve this stage for our heaviest, most violent bands.
            </li>
          </ul>
          All forms of moshing are highly encouraged at the Bonanza. Obviously
          this comes with certain given risks. If you’ve never been to a metal
          show and this is your first time, I highly encourage you to know what
          you’re getting into before putting yourself into an uncomfortable
          situation.
          <br />
          <br />
          We will have a first aid tent near the festival entrance for any
          emergency situations.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 6}
        className="py-8 px-4 mx-auto max-w-screen-lg"
      >
        <AccordionHeader onClick={() => handleOpen(6)} className="text-white">
          Parking
        </AccordionHeader>
        <AccordionBody className="text-white">
          When you arrive at the Bonanza, you will be greeted by one of our
          parking operators who will direct you depending on what type of
          campsite you’ve selected. If you aren’t camping you will be directed
          to our general parking area which is located on the front lawn. Once
          this area is full, cars will be parked on the surrounding streets.
          <br />
          <br />
          If you are tent camping for the weekend, you will be allowed to drop
          off your items and then you will be directed to the next available
          general parking space.
          <br />
          <br />
          Vehicle camping will be located on the front lawn. You are free to set
          up a tent or whatever you please in your vehicle parking area. Please
          keep in mind that this is NOT an RV site.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 7}
        className="py-8 px-4 mx-auto max-w-screen-lg"
      >
        <AccordionHeader onClick={() => handleOpen(7)} className="text-white">
          Camping
        </AccordionHeader>
        <AccordionBody className="text-white">
          <p className="mb-4">
            Camping is highly encouraged to everyone attending the bonanza.
            Camping passes are purchased alongside your tickets. There are 3
            types of campsites: tent, vehicle, and RV.
          </p>

          <h2 className="text-2xl underline">Tent Camping</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Tent campsites are in the woods area located right behind the fest
              grounds. There are no blocked off areas for campsites, so please
              set up your tent respective of other campers.
            </li>
            <li>
              We also have VIP campsites available for bands, if these don’t
              fill up we will open them to campers at no extra cost.
            </li>
            <li>
              Porta potties and handwashing station are located in front of the
              house. We are looking into installing showers as well, more on
              that later.
            </li>
            <li>
              CAMPFIRES ARE ALLOWED! Please be safe and respectful. We also
              allow propane stoves or whatever else you might need. Please don’t
              set the woods on fire!
            </li>
            <li>
              The entire fest is BYOB so go nuts. Fill your cooler to the brim
              with whatever you want. There is also a Hannaford not too far from
              the grounds.
            </li>
          </ul>

          <h2 className="text-2xl underline">Vehicle Camping</h2>
          <p className="mb-4">
            Vehicle campsites are available for people who want to sleep in
            their car or put their tent near their vehicle. Vehicle camping is
            located in the front lawn of the property. Campfires are prohibited
            in the front of the house, but you can use a propane stove or grill.
            We ask that people in the vehicle camping area be quiet after 11PM
            out of respect for those who live in the house.
          </p>

          <h2 className="text-2xl underline">RV Camping</h2>
          <p>
            RV Campsites are EXTREMELY LIMITED. We have no power/water hookups.
            RV sites are located to the side of the property near the main entry
            gate. Campfires are prohibited in the RV camping area, but propane
            stoves are allowed. We ask that people in RV campsite be quiet after
            11PM out of respect for those who live in the house.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 8}
        className="py-8 px-4 mx-auto max-w-screen-lg"
      >
        <AccordionHeader onClick={() => handleOpen(8)} className="text-white">
          General FAQ
        </AccordionHeader>
        <AccordionBody className="text-white">
          <ul className="list-disc list-inside">
            <li>
              “I only want to buy a day pass, but I can’t tell which day my
              favorite band is playing.”
            </li>
            <li className="indent-8">
              The day schedule will not be announced until much closer to the
              festival. You will either have to wait or buy a weekend pass.
            </li>

            <li>“Can I leave and come back?”</li>
            <li className="indent-8">
              Absolutely, but you may lose your parking spot.
            </li>

            <li>“What happens if it rains?”</li>
            <li className="indent-8">
              The Bonanza continues no matter the weather, unless we deem it to
              be unsafe. Bands reserve the right to cancel their performances,
              but the Bonanza staff will continue the festival rain or shine.
            </li>

            <li>“Do you provide any camping equipment?”</li>
            <li className="indent-8">No</li>

            <li>“How early can I come to set up my campsite?”</li>
            <li className="indent-8">11AM on Friday, June 28</li>

            <li>“Can I camp overnight on Sunday and leave Monday morning?”</li>
            <li className="indent-8">
              Yes, but only if you help with clean up.
            </li>

            <li>“I have a disability, can you provide accommodations?”</li>
            <li className="indent-8">
              If you need ANY accommodations, do not hesitate to contact our
              instagram page. We will provide WHATEVER we possibly can to ensure
              everyone has an amazing weekend!
            </li>

            <li>
              “I’m like, with one of the bands taking photos, can I get like a
              staff pass?”
            </li>
            <li className="indent-8">
              Please suck my nuts. (If you aren’t a volunteer or haven’t
              communicated with me prior to the event, you have to pay)
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AccordionInfo;
