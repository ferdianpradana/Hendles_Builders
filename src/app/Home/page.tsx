import AboutMe from "../Home/aboutMe/AboutMe";
import Service from "../Home/service/services";
import Footer from "../Home/Footer/Footer";
import Testimoni from "../Home/testimoni/testimoni";
import Navbar from "../../components/navbar/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-PublicSans">
      {/* Navbar tetap di atas */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Konten di bawah, tidak menutupi Navbar */}
      <div className="relative z-0">
        <AboutMe />
        <Service />
        <Testimoni />
        <Footer />
      </div>
    </div>
  );
}
