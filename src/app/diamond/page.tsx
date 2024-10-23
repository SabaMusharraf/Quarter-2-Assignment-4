import Image from "next/image";
import db1 from "../images/diamonds/bracelet4.png";
import db2 from "../images/diamonds/bracelet5.png";
import db3 from "../images/diamonds/bracelet1.png";
import db4 from "../images/diamonds/bracelet2.png";
import db5 from "../images/diamonds/bracelet3.png";
import db6 from "../images/diamonds/bracelet6.png";
import dr1 from "../images/diamonds/ring1.png";
import dr2 from "../images/diamonds/ring2.png";
import dr3 from "../images/diamonds/ring3.png";
import dr4 from "../images/diamonds/ring4.png";
import dr5 from "../images/diamonds/ring5.png";
import dr6 from "../images/diamonds/ring6.png";
import de1 from "../images/diamonds/earring0.png";
import de2 from "../images/diamonds/earring10.png";
import de3 from "../images/diamonds/earring2.png";
import de4 from "../images/diamonds/earring3.png";
import de5 from "../images/diamonds/earring4.png";
import de6 from "../images/diamonds/earring7.png";
import dc1 from "../images/diamonds/chain1.png";
import dc2 from "../images/diamonds/chain2.png";
import dc3 from "../images/diamonds/chain3.png";
import dc4 from "../images/diamonds/chain4.png";
import dc5 from "../images/diamonds/necklace3.png";
import dc6 from "../images/diamonds/chain6.png";
import ds1 from "../images/diamonds/set11.png";
import ds2 from "../images/diamonds/set19.png";
import ds3 from "../images/diamonds/set18.png";
import ds4 from "../images/diamonds/set16.png";
import ds5 from "../images/diamonds/set17.png";
import ds6 from "../images/diamonds/set15.png";


export default function Diamond (){
    return(
        <div>
            <h1 className="collectHeading"><b><u>Diamond Collection</u></b></h1>
            <h1 className="headings">Diamond Bracelets</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={db1} alt="braceletImage"></Image>
            <Image className="collectionImage" src={db2} alt="braceletImage"></Image>
            <Image className="collectionImage" src={db3} alt="braceletImage"></Image>
           
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={db4} alt="braceletImage"></Image>
            <Image className="collectionImage" src={db5} alt="braceletImage"></Image>
            <Image className="collectionImage" src={db6} alt="braceletImage"></Image>
            </div>
            <h1 className="headings">Diamond Rings</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={dr1} alt="ringImage"></Image>
            <Image className="collectionImage" src={dr2} alt="ringImage"></Image>
            <Image className="collectionImage" src={dr3} alt="ringImage"></Image>
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={dr4} alt="ringImage"></Image>
            <Image className="collectionImage" src={dr5} alt="ringImage"></Image>
            <Image className="collectionImage" src={dr6} alt="ringImage"></Image>
            </div>
            <h1 className="headings">Diamond Ear Rings</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={de1} alt="earRingImage"></Image>
            <Image className="collectionImage" src={de2} alt="earRingImage"></Image>
            <Image className="collectionImage" src={de3} alt="earRingImage"></Image>
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={de4} alt="earRingImage"></Image>
            <Image className="collectionImage" src={de5} alt="earRingImage"></Image>
            <Image className="collectionImage" src={de6} alt="earRingImage"></Image>
            </div>

            <h1 className="headings">Diamond Chain & Necklace</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={dc1} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={dc2} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={dc3} alt="necklaceImage"></Image>
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={dc4} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={dc5} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={dc6} alt="necklaceImage"></Image>
            </div>
            <h1 className="headings">Diamond Chain & Necklace</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={ds1} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={ds2} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={ds3} alt="necklaceImage"></Image>
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={ds4} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={ds5} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={ds6} alt="necklaceImage"></Image>
            </div>
        </div>
    )
}