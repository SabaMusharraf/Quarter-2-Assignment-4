import Link from "next/link";
import Image from "next/image";
import logo from "../images/saba1.png";

export default function Header (){
    return(
        <div className= "header">
            <Image className="logo" src={logo} alt="logo"></Image>
          
            <div className="navBar">
            <ul className="head-button">
               <Link href= "/"> <li>Home</li></Link>
                <Link href = "/about"> <li>About Us</li></Link>
                <Link href = "/collections"><li>My Collections</li></Link>
              



                
            </ul>
            </div>
            <div/>
        </div>
    )
}
