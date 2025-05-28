import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
    <div className="bg-[url(/background-home-desktop.jpg)] bg-repeat bg-cover bg-center h-screen ">
    <Nav />
   <div>SO, YOU WANT TO TRAVEL TO </div>
   <h1>SPACE</h1>
   <div>Let’s face it; if you want to go to space,
     you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back,
     and relax because we’ll give you a truly out of this world experience!</div>
   <button>Explore!</button> 
   </div> 
   </>
  );
}
