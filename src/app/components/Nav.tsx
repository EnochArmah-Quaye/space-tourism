const nav = ["00 Home", "01 Destination", "02 Crew", "03 Technology"];

function Nav() {
  return (
    <div>
        <ul className="flex">
            {nav.map((item,index)=> (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Nav