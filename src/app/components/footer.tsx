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
                <li><p className="para"><Image className="icon" src={webIcon} alt="webImage"></Image> 1234 sample street</p></li>
                <li><p  className="para"><Image className="icon" src={mailIcon} alt="mailIcon"></Image> xyz@gamil.com</p></li>
                <li><p  className="para"><Image className="icon" src={phoneIcon} alt="phoneIcon"></Image> 021-11-11-222</p></li>
                <li><p  className="para"><Image className="icon" src={locationIcon} alt="locationIcon"></Image> House#111, Shaheed e Millat road, Karach</p></li>
{/*                

               <p> <Image  src={webIcon} alt="webIcon"></Image> www.xyz.com</p>
              <p><Image  src={mailIcon} alt="mailIcon"></Image> xyz@gmil.com </p>
              <p><Image  src={phoneIcon} alt="phoneIcon"></Image> 021-11-222-333</p>  
             <p><Image src={locationIcon} alt="locationIcon"> </Image> House#111, Shaheed e Millat road, Karachi</p>   */}
                </ul>
            
              
            </ul>
        </div>
    )
}