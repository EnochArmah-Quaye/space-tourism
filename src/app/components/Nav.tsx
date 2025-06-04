import Image from 'next/image';

const nav = ["00 Home ", " 01 Destination ", " 02 Crew", " 03 Technology"];

function Nav() {
  return (
    <div className="flex pt-[40px]">
        <Image src="/logo.svg" alt="" width={30} height={30} className="ml-8 mr-auto mb-10 mt-3"/>
        <div className="h-[1.5px] w-[600px] bg-gray-600 mr-[-60px] mt-[30px] z-10"></div>
        <ul className="flex backdrop-blur-md bg-white/5 pt-5 pl-[70px] w-[670px]">
            {nav.map((item,index)=> (
                <li key={index} className="pl-10">{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Nav