import Navbar from "@/components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-600 p-4 sm:p-10 text-center">
      <Navbar />
      <div className="flex flex-col gap-4 text-center p-4 sm:p-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text text-white">MOID UDDIN</h1>
        <p className="text-white text-lg sm:text-xl mt-4">Date of Birth: 30 August 1999</p>
        <p className="text-white text-lg sm:text-xl">Email: moiduddin990@gmail.com</p>
        <p className="text-white text-lg sm:text-xl">Gender: Male</p>
        <p className="text-white text-lg sm:text-xl">Phone: 03002977077</p>
      </div>
      <Image
        src={"/images/profile.jpg"}
        alt="Profile Picture"
        className="rounded-full w-40 h-40 sm:w-64 sm:h-64 mt-6 mx-auto border-4 border-gradient-to-r from-sky-900 to-sky-900"
        width={256}
        height={256}
      />
    </div>
  );
};

export default Home;
