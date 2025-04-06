const Contact = () => {
  return (
    <div className=" flex flex-col items-center">
      <h1 className="font-bold text-3xl p-4 m-4 ">Contact page</h1>
      <form>
        <div className="flex flex-col items-center">
          <input
            className="border border-black p-2 m-2 rounded-lg"
            placeholder="Name"
          />
          <input
            className="border border-black p-2 m-2 rounded-lg"
            placeholder="Message"
          />
          <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
