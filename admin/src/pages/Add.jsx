import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

import {backendUrl} from "../App"
import { assets } from "../assets/assets";

const Add = ({token}) => {
    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Men")
    const [subCategory, setSubCategory] = useState("Topwear")
    const [bestseller, setBestseller] = useState(false)
    const [sizes, setSizes] = useState([])

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('description', description)
            formData.append('price', price)
            formData.append('category', category)
            formData.append('subCategory', subCategory)
            formData.append('bestSeller', bestseller)
            formData.append('sizes', JSON.stringify(sizes))

            image1 && formData.append('image1', image1)
            image2 && formData.append('image2', image2)
            image3 && formData.append('image3', image3)
            image4 && formData.append('image4', image4)

            const response = await axios.post(`${backendUrl}/api/products/add`, formData, {headers: {token}})

            if (response.data.success) {
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setPrice('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
            } else {
                toast.error(response.data.message)
            }

        } catch(error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
            <div className="">
                <p className="mb-2">Upload Image</p>

                <div className="flex gap-2">
                    <label htmlFor="image1">
                        <img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" className="w-20" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
                    </label>
                    <label htmlFor="image2">
                        <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" className="w-20" />
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
                    </label>
                    <label htmlFor="image3">
                        <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" className="w-20" />
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
                    </label>
                    <label htmlFor="image4">
                        <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" className="w-20" />
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
                    </label>
                    </div>
            </div>

            <div className="w-full">
                <p className="mb-2">Product Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="type here" className="w-full max-w-[500px] px-3 py-2" required />
            </div>
            <div className="w-full">
                <p className="mb-2">Product Description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="write content here" className="w-full max-w-[500px] px-3 py-2" required />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                <div className="">
                    <p className="mb-2">Product Category</p>
                    <select onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2">
                        <option value="Men" >Men</option>
                        <option value="Women" >Women</option>
                        <option value="Kids" >Kids</option>
                    </select>
                </div>
                <div className="">
                    <p className="mb-2">Sub Category</p>
                    <select onChange={(e) => setSubCategory(e.target.value)} className="w-full px-3 py-2">
                        <option value="Topwear" >Topwear</option>
                        <option value="Bottomwear" >Bottomwear</option>
                        <option value="Winterwear" >Winterwear</option>
                    </select>
                </div>

                <div className="">
                    <p className="mb-2">Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder="25" className="w-full px-3 py-2 sm:w-[120px]" />
                </div>
            </div>

            <div className="">
                <p className="mb-2">Product Sizes</p>
                <div className=" flex gap-3">
                    <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter((item) => item !== "S") : [...prev, "S"])} className="">
                        <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter((item) => item !== "M") : [...prev, "M"])} className="">
                        <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter((item) => item !== "L") : [...prev, "L"])} className="">
                        <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter((item) => item !== "XL") : [...prev, "XL"])} className="">
                        <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter((item) => item !== "XXL") : [...prev, "XXL"])} className="">
                        <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 mt-2">
                <input onChange={() => setBestseller(prev =>!prev)} checked={bestseller} type="checkbox" id="bestseller" />
                <label htmlFor="bestseller" className="cursor-pointer" >Add To Bestseller</label>
            </div>

            <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">Add</button>
        </form>
    )
}

export default Add;