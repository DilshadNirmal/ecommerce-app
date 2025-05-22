const Title = ({text1, text2}) => {

    return (
        <div className="inline-flex gap-2 items-center mb-3">
            <h1 className="text-[#cf9ab2]">{text1} <span className="text-gray-700 font-medium">{text2}</span></h1>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
    )
}

export default Title;
