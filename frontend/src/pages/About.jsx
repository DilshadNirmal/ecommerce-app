import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={`Welcome to`} text2={`DaVinci`} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">
            Where innovation meets artistry. At Davinci, we believe everyday products should feel anything but ordinary. From sleek designs to smart functionality, each piece is curated with purpose and passion — because style and substance belong together.
          </p>
          <p className="">
            Explore a world where creativity is limitless. Whether it's fashion, lifestyle, or daily essentials, Davinci blends classic inspiration with modern edge to bring you pieces that stand out — and stand the test of time.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="">
            To empower self-expression through curated collections that reflect originality, elegance, and purpose. At Davinci, we’re not just selling products — we’re building a lifestyle inspired by vision, quality, and timeless design.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={`WHY`} text2={`CHOOSE US`} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">At Davinci, every product is handpicked and rigorously tested to meet our highest standards of craftsmanship and reliability. We believe in delivering excellence — because you deserve nothing less than the best.
            </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">At Davinci, shopping is effortless. From intuitive browsing to smooth checkout and swift delivery, we've designed every step to save you time and keep things simple — so you can focus on what matters most.
            </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">At Davinci, you're not just a customer — you're part of our story. Our support team is always here to assist you with care, speed, and a personal touch to ensure your experience is nothing short of exceptional.
            </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
