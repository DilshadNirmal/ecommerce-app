import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {

    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sx sm:text-sm md:text-base text-gray-700">

        <div>
            <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Secure Payment</p>
            <p className="text-gray-400">We ensure safe and encrypted checkout for worry-free shopping.</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">3 Days Return Policy</p>
            <p className="text-gray-400">we provide 3 days free return policy</p>
        </div>
        <div>
            <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Best Customer Support</p>
            <p className="text-gray-400">we provide 24/7 customer support</p>
        </div>

        </div>
    )
}

export default OurPolicy;
