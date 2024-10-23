import Link from "next/link";
import Image from "next/image";
import webIcon from "../images/web_3178162.png";
import mailIcon from "../images/mail_9344663.png";
import phoneIcon from "../images/telephone-call_3059561.png";
import locationIcon from "../images/location.png";
export default function Footer (){
    return(
        <div className= "footer">
            <ul className="footer-button">
               <Link href= "/"> <li>Home</li></Link>
              <Link href= "/about-us"> <li>About us</li></Link>
             

              <ul>
                <li>Contact Us</li>
               

               <li> <Image className="icon" src={webIcon} alt="webIcon"></Image></li> 
              <li><Image className="icon" src={mailIcon} alt="mailIcon"></Image> </li> 
              <li><Image className="icon" src={phoneIcon} alt="phoneIcon"></Image></li>  
             <li><Image className="icon" src={locationIcon} alt="locationIcon"></Image> </li>  
                </ul>
                <ul className="contacts">
                    <li>www.xyz.com</li>
                    <li>xyz@gmil.com</li>
                    <li>021-11-222-333</li>
                    <li>House#111, Shaheed e Millat road, Karachi</li>
                </ul>
              
            </ul>
        </div>
    )
}