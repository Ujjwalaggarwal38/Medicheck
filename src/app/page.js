'use client'
import IntroBanner from "@/component/homepage/IntroBanner";
import Findbanner from "@/component/homepage/Findbanner";
import CareBanner from "@/component/homepage/CareBanner";
import ServiceInfo from "@/component/homepage/ServiceInfo";
import OurHospitalsBanner from "@/component/homepage/OurHospitalsBanner";
import SpecialitiesBanner from "@/component/homepage/SpecialitiesBanner";
import AdvancedTechBanner from "@/component/homepage/AdvancedTechBanner";
import DoctorBanner from "@/component/homepage/DoctorBanner";
import DoctorTeamBanner from "@/component/homepage/DoctorTeamBanner";
import ContactForm from "@/component/ContactInfo/ContactInfo";
import HomePage from "@/component/homepage/HomePage";


export default function Home() {
  return (
    <div >
      <HomePage />

      {/* <Findbanner /> */}
      {/* <ServiceInfo /> */}
      {/* <SpecialitiesBanner /> */}
      <div id="hospital">
        <OurHospitalsBanner />
      </div>
      {/* <CareBanner/>
        <AdvancedTechBanner />
        <div id="doctorInfo">
            <DoctorTeamBanner />
        </div> */}
      {/* <DoctorBanner /> */}
{/* 
      <ContactForm /> */}

      

    </div>

  );
}