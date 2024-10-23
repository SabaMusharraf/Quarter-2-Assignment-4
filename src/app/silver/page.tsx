import Image from "next/image";
import sb1 from "../images/silver/bangles2.png";
import sb2 from "../images/silver/bangles3.png"
import sb3 from "../images/silver/bangles4.png"
import sb4 from "../images/silver/bangles6.png"
import sb5 from "../images/silver/bangles7.png"
import sb6 from "../images/silver/bangles8.png"
import se1 from "../images/silver/earring1.png";
import se2 from "../images/silver/earring2.png";
import se3 from "../images/silver/earring3.png";
import se4 from "../images/silver/earring4.png";
import se5 from "../images/silver/earTops.png";
import se6 from "../images/silver/earTops2.png";
import sn1 from "../images/silver/chain1.png";
import sn2 from "../images/silver/chain2.png";
import sn3 from "../images/silver/chain3.png";
import sn4 from "../images/silver/chain4.png";
import sn5 from "../images/silver/set8.png";
import sn6 from "../images/silver/necklace1.png";
import sn7 from "../images/silver/necklace3.png";
import sn8 from "../images/silver/necklace4.png";
import sn9 from "../images/silver/set1.png";
import sr1 from "../images/silver/ring1.png";
import sr2 from "../images/silver/ring2.png"
import sr3 from "../images/silver/ring3.png"
import sr4 from "../images/silver/ring4.png"
import sr5 from "../images/silver/ring5.png"
import sr6 from "../images/silver/ring6.png"


export default function Silver (){
    return (
        <div>
             <h1 className="collectHeading"><b><u>Silver Collection</u></b></h1>
            <h1 className="headings">Silver Bangles & Bracelets</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={sb1} alt="bangleImage"></Image>
            <Image className="collectionImage" src={sb2} alt="bangleImage"></Image>
            <Image className="collectionImage" src={sb3} alt="bangleImage"></Image>
           
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={sb4} alt="bangleImage"></Image>
            <Image className="collectionImage" src={sb5} alt="bangleImage"></Image>
            <Image className="collectionImage" src={sb6} alt="bangleImage"></Image>
           
            </div>
        
            <h1 className="headings">Silver Earings</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={se1} alt="earringImage"></Image>
            <Image className="collectionImage" src={se2} alt="earringImage"></Image>
            <Image className="collectionImage" src={se3} alt="earringImage"></Image>
           
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={se4} alt="earringImage"></Image>
            <Image className="collectionImage" src={se5} alt="earringImage"></Image>
            <Image className="collectionImage" src={se6} alt="earringImage"></Image>
           
            </div>
            
            <h1 className="headings">Silver Necklace</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={sn1} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={sn2} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={sn3} alt="necklaceImage"></Image>
           
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={sn4} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={sn5} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={sn6} alt="necklaceImage"></Image>
           
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={sn7} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={sn8} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={sn9} alt="necklaceImage"></Image>
           
            </div>
            <h1 className="headings">Silver Rings</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={sr1} alt="ringImage"></Image>
            <Image className="collectionImage" src={sr2} alt="ringImage"></Image>
            <Image className="collectionImage" src={sr3} alt="ringImage"></Image>
           
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={sr4} alt="ringImage"></Image>
            <Image className="collectionImage" src={sr5} alt="ringImage"></Image>
            <Image className="collectionImage" src={sr6} alt="ringImage"></Image>
           
            </div>
            

        </div>
    )
}