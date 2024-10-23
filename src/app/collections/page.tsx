import Image from "next/image";
import banner from "../images/13.png";

export default function Collections (){
    return (
        <div>
            <Image className="banner" src={banner} alt="banner"></Image>

        <h1 className="headings">For New Updates</h1>
        <div>  
             <button className="updateButton">Click Here</button>
        
        </div>
     

        </div>
    )
}