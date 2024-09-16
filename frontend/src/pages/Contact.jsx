import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {

    return (
        <>
        <div className="text-center text-3xl pt-10 border-t">
            <Title text1={`CONTACT`} text2={`US`} />
        </div>

        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
            <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
            <div className="flex flex-col justify-center items-start gap-6">
                <p className="font-semibold text-xl text-gray-600">Our Store</p>
                <p className="text-gray-500">002932 Some Station <br /> Some 556, SomeWhere, SomePlace</p>
                <p className="text-gray-500">Tel: (415) 555-01233 <br /> Email: admin@forever.com</p>
                <p className="font-semibold text-xl text-gray-600">Carrers at Forever</p>
                <p className="text-gray-500">Learn more about our teams and job openings.</p>
                <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all ease-in duration-500">Explore Jobs</button>
            </div>
        </div>
        <NewsletterBox />
        </>
    )
}

export default Contact;
