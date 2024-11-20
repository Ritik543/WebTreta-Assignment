import Navbar from "../app/components/Navbar";
import Header from  "../app/components/Header";
import Features from "./components/Features";
import Herosection from "./components/Herosection";
import Application from "./components/Application";
import Workingautoclick from "./components/Workingautoclick";
import Differentnformation from "./components/Differentnformation";
import Frequentyqustion from "./components/Frequentyqustion";
import InfoBox from "./components/informationbox";
import Footer from "./components/Footer";
// import Frequentyqustion from "./components/Frequentyqustion";

export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Navbar />
      <Header />
      <Herosection/>
      <Features />
      <div className="p-10 mt-10">
      <Application/> 
      </div>
      <Workingautoclick/>
      <Differentnformation/>
      <Frequentyqustion/> 
      <InfoBox/>
      <Footer/>
      
      

    </div>
  );
}
