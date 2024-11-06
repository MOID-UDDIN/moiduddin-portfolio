import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-600 p-4 sm:p-10 text-3xl">
      <Navbar />
      <div className="p-4 sm:p-10">
        <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-100">About Me</h2>

        <h3 className="text-3xl sm:text-4xl font-semibold text-white mt-6">My Education</h3>
        <ul className="list-disc text-white mt-4 ml-5 text-lg sm:text-xl">
          <li>O-Levels in Science</li>
          <li>A-Levels in Pre-Engineering</li>
        </ul>

        <h3 className="text-3xl sm:text-4xl font-semibold text-white mt-6">My Career Objective</h3>
        <ul>
          <li className="list-disc text-white mt-4 ml-5 text-lg sm:text-xl">
            To work in a challenging environment where I can apply my skills and grow professionally.
          </li>
        </ul>

        <h3 className="text-3xl sm:text-4xl font-semibold text-white mt-6">My Working Experience</h3>
        <ul className="list-disc text-white mt-4 ml-5 text-lg sm:text-xl">
          <li>Graphic Designer at CDX (2 years)</li>
          <li>Currently working as a Graphic Designer at Viral Verse</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
