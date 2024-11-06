import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-600 p-4 sm:p-10 text-3xl">
      <Navbar />
      <div className="p-4 sm:p-10">
        <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-100">Contact</h2>
        <ul className="text-white mt-4 ml-5 text-lg sm:text-xl list-disc">
          <li>Email: moiduddin990@gmail.com</li>
          <li>Phone: 03002977077</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
