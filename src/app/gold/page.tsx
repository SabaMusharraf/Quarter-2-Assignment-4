import Image from "next/image";
import gb1 from "../images/gold/bangle1.png";
import gb2 from "../images/gold/bangle2.png";
import gb3 from "../images/gold/bangle3.png";
import gb4 from "../images/gold/bangle4.png";
import gb5 from "../images/gold/bangle5.png";
import gb6 from "../images/gold/bangle7.png";
import gr1 from "../images/gold/ring3.png";
import gr2 from "../images/gold/ring4.png";
import gr3 from "../images/gold/ring5.png";
import gr4 from "../images/gold/ring7.png";
import gr5 from "../images/gold/ring9.png";
import gr6 from "../images/gold/ring1.png";
import gc1 from "../images/gold/chain1.png";
import gc2 from "../images/gold/chain2.png";
import gc3 from "../images/gold/chain3.png";
import gc4 from "../images/gold/chain4.png";
import gc5 from "../images/gold/chain5.png";
import gc6 from "../images/gold/necklace1.png";
import gc7 from "../images/gold/necklace2.png";
import gc8 from "../images/gold/set1.png";
import gc9 from "../images/gold/set2.png";
import gc10 from "../images/gold/set3.png";
import gc11 from "../images/gold/set4.png";
import gc12 from "../images/gold/set5.png";
import gc13 from "../images/gold/set21.png";
import gc14 from "../images/gold/set6.png";
import ge1 from "../images/gold/earring1.png"
import ge2 from "../images/gold/earTops.png"
import ge3 from "../images/gold/earring3.png"
import ge4 from "../images/gold/earring4.png"
import ge5 from "../images/gold/earring5.png"
import ge6 from "../images/gold/earring6.png"
import ge7 from "../images/gold/earTops1.png"






export default function Gold (){
    return (
        <div>
              <h1 className="collectHeading"><b><u>Gold Collection</u></b></h1>
              <h1 className="headings">Gold Bangles</h1>

              <div className="collectionImage">
            <Image className="collectionImage" src={gb1} alt="bangleImage"></Image>
            <Image className="collectionImage" src={gb2} alt="bangleImage"></Image>
            <Image className="collectionImage" src={gb3} alt="bangleImage"></Image>
        
           </div>
           <div className="collectionImage">
            <Image className="collectionImage" src={gb4} alt="bangleImage"></Image>
            <Image className="collectionImage" src={gb5} alt="bangleImage"></Image>
            <Image className="collectionImage" src={gb6} alt="bangleImage"></Image>
           </div>
           <h1 className="headings">Gold Rings</h1>
            <div className="collectionImage">
            <Image className="collectionImage" src={gr1} alt="ringImage"></Image>
            <Image className="collectionImage" src={gr2} alt="ringImage"></Image>
            <Image className="collectionImage" src={gr3} alt="ringImage"></Image>
           
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={gr4} alt="ringImage"></Image>
            <Image className="collectionImage" src={gr5} alt="ringImage"></Image>
            <Image className="collectionImage" src={gr6} alt="ringImage"></Image>
            </div>
            <h1 className="headings">Gold Necklace & Chains</h1>

            <div className="collectionImage">
            <Image className="collectionImage" src={gc1} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={gc2} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={gc3} alt="necklaceImage"></Image>

            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={gc4} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={gc5} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={gc6} alt="necklaceImage"></Image>
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={gc7} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={gc8} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={gc9} alt="necklaceImage"></Image>
            </div>
            <div className="collectionImage">
            <Image className="collectionImage" src={gc10} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={gc11} alt="necklaceImage"></Image>
            <Image className="collectionImage" src={gc12} alt="necklaceImage"></Image>
            </div>
            <h1 className="headings">Gold Ear-Rings and Tops</h1>

<div className="collectionImage">
<Image className="collectionImage" src={ge1} alt="ear-ringImage"></Image>
<Image className="collectionImage" src={ge2} alt="ear-ringImage"></Image>
<Image className="collectionImage" src={ge3} alt="ear-ringImage"></Image>

</div>
<div className="collectionImage">
<Image className="collectionImage" src={ge4} alt="ear-ringImage"></Image>
<Image className="collectionImage" src={ge5} alt="ear-ringImage"></Image>
<Image className="collectionImage" src={ge6} alt="ear-ringImage"></Image>
</div>


<div className="collectionImage">
<Image className="collectionImage" src={ge7} alt="ear-ringImage"></Image>
<Image className="collectionImage" src={ge2} alt="ear-ringImage"></Image>
<Image className="collectionImage" src={ge3} alt="ear-ringImage"></Image>

</div>

           
          
        </div>
    )
}