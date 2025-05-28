import Image from 'next/image';

const nav = ["00 Home ", " 01 Destination ", " 02 Crew", " 03 Technology"];

function Nav() {
  return (
    <div className="flex pt-5">
        <Image src="/logo.svg" alt="" width={30} height={30} className="ml-8 mr-auto mb-10"/>
        <ul className="flex mr-10">
            {nav.map((item,index)=> (
                <li key={index} className="pl-10">{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Nav