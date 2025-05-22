const NewsletterBox = () => {
    const onSubmitHandler =(event) => {
        event.preventDefault()
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% Off
      </p>
      <p className="text-gray-400 mt-3">
        Join the DaVinci Circle and unlock exclusive deals, fresh arrivals, and timeless designs - straight to your inbox.
      </p>

      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email"
          className="w-full sm:flex-1 outline-none"
          pattern="[a-z0-9]+@[a-z]{4, 6}+\.[a-z]{2, 4}"
        />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default NewsletterBox;
