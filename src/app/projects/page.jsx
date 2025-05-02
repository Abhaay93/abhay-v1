import { Anton, DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
const sans = DM_Sans({
  weight: ["300"],
  subsets: ["latin"],
});
export default function Projects() {
  return (
    <div className="bg-black h-fit  py-6 px-10 sm:px-32 md:px-32">
      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${anton.className} text-7xl  text-white `}>Projects</h1>
        <p className={`${sans.className} text-lg  text-white`}>Check out my work!</p>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>Pokedex</h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Next.js</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">React</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">PokeApi</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Typescript</p>
        </div>
        <p className={`${sans.className}  text-white`}>
        Developed a responsive Pokémon Search app using React, allowing users to search by name or type and view detailed stats, abilities, and evolutions.
        Integrated PokeAPI for real-time data and used Material UI with Tailwind CSS for a clean, mobile-friendly UI
        </p>
        <div className="flex justify-end gap-4 mt-3">
        <Link
            href={""}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
          </Link>
          
        </div>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>Omegal Clone</h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">WebRtc</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Socket.io</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">React</p>
        </div>
        <p className={`${sans.className}  text-white`}>
        Developed a real-time video chat platform with WebRTC and Socket.io, featuring random user pairing, live messaging, and full audio/video controls..


        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link
            href={""}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
          </Link>
          
        </div>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>The Chat Haven</h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Websocket</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Next.js</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">React</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Node.js</p>
        </div>
        <p className={`${sans.className}  text-white`}>
        Built a real-time chat app with WebSocket support, room-based messaging via unique codes, and a secure, responsive UI using Next.js, Node.js, and Tailwind CSS


        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link
            href={""}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
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
