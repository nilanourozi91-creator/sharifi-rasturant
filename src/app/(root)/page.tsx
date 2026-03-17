import Image from "next/image";
import Time from "../componnent/time";
import Banner from "../componnent/banner";
import Menu from "../componnent/menu";
import Allfood from "../componnent/allfood";
import About from "../componnent/about";
import Index from "@/components/shared";
// import Footer from "./componnent/footer";
import Contacts from "../componnent/contacts";
export default function Home() {
  return (
     <div className="p-0 m-0 box-border absolute">
       <Banner/>
       <Time/>
       <Menu/>
      <Allfood/>
      <About/>
      <Index/>
      {/* <Footer/> */}
      <Contacts/>
     </div>
  );
}
