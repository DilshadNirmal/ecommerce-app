import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={`ABOUT`} text2={`US`} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem dolorem quaerat voluptates nobis corrupti hic
            consequuntur, aliquid aspernatur, odio accusamus eaque molestias
            ipsa quod consectetur soluta! Modi dolores pariatur unde!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dicta
            beatae explicabo earum necessitatibus? Velit voluptate blanditiis
            qui, reiciendis officiis voluptatem minus, praesentium ullam
            voluptas sed expedita nemo consequuntur distinctio.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nam
            perferendis, possimus minima et minus sunt odit libero
            exercitationem. Reprehenderit commodi nobis earum? Ipsa ex cum
            assumenda corporis consectetur quibusdam.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={`WHY`} text2={`CHOOSE US`} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent. Rem nesciunt laudantium quasi debitis.
            </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt laudantium quasi debitis. Facere quod po
            </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt laudantium quasi debitis. Facere quod
            </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
