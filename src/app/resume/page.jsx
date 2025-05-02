import { Anton, DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
const sans = DM_Sans({
  weight: ["300"],
  subsets: ["latin"],
});
export default function Resume() {
  return (
    <div className="bg-black h-[100vh] py-16 px-20">
      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${anton.className} text-5xl md:text-7xl lg:text-7xl mb-5  text-white`}>Resume</h1>
        <p className={`${sans.className} text-lg  text-white `}>
          Interested in working with me? Feel free to reach out
        </p>
        <div className="mt-3">
            <Link href={"https://drive.google.com/file/d/1Myl4naGu7m5mO9kA2xIKk--V9f7zumE1/view"}  target="_blank" className="  bg-gray-800 transition-all delay-100 duration-300 hover:bg-white p-3 rounded hover:text-black  text-white">
            View/Download Resume
            </Link>
        </div>
        <h1 className={`${anton.className} text-2xl mt-20  text-white`}>Get in touch</h1>
        <h1 className="mt-1  text-white">Email : <Link href={"mailto:abhayhipparkar97@gmail.com"} className="hover:text-slate-500 transition-all duration-300 underline hover:no-underline" >abhayhipparkar97@gmail.com</Link></h1>
        <div className="flex gap-4">

        <Link href={"https://x.com/97abhay"} target="_blank" className="hover:scale-110 transition-all duration-300">
            <FaXTwitter size={30} className=" text-white"/>
          </Link>
          <Link href={"https://github.com/Abhaay93"} target="_blank" className="hover:scale-110 transition-all duration-300">
            <FaGithub size={30} className=" text-white" />
          </Link>
          <Link href={"https://www.linkedin.com/in/abhay-hipparkar/"} target="_blank" className="hover:scale-110 transition-all duration-300">
            <FaLinkedin size={30} className=" text-white"/>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-10">
    <p className={`${sans.className} text-white text-lg`}>
      Built with <span className="text-red-500">❤️</span> by Abhay
    </p>
  </div>
    </div>
  );
}
