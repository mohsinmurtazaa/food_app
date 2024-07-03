const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4 ">Contact Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="message"
        ></input>
        <button className="border border-black p-2 m-2 rounded-lg bg-gray-50">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
