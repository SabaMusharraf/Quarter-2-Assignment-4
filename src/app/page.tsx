import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import image from "./images/diamonds/ring500ss.jpg";
import image2 from "./images/gold/bangles400.jpg"; 
import image3 from "./images/silver/necklace200.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <div className="parentContainer">
    <Link href={"/diamond"} ><div className="childContainer">
      <div className="imageContainer"><Image className="hImage" src={image} alt="ringImage" ></Image></div>
      <h1 className="title"><b>Diamond Collection</b></h1>
      <p className="description">
       Here all kinds of Diamond jewellery and designs to make your occasions reminder {" "}
      </p>
      <button className="clickMe">Click Me</button>
    </div></Link>
   
    <Link href={"/gold"} >
    <div className="childContainer">
      <div className="imageContainer"><Image className="hImage" src={image2} alt="banglesImage" ></Image></div>
      <h1 className="title"><b>Gold Collection</b></h1>
      <p className="description">
      Here all kinds of Gold jewellery and designs to make your occasions reminder{" "}
      </p>
      <button className="clickMe">Click Me</button>
    </div>
    </Link>
    <Link href={"/silver"} >
    <div className="childContainer">
    <div className="imageContainer"><Image className="hImage" src={image3} alt="banglesImage" ></Image></div>
      <h1 className="title"><b>Silver Collection</b></h1>
      <p className="description">
      Here all kinds of Silver jewellery and designs to make your occasions reminder{" "}
      </p>
      <button className="clickMe">Click Me</button>
    </div>
    </Link>
  </div>
  )
}
