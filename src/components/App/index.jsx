import NavBar from "../NavBar";
import s from '../../style.css'
import Services from "../Services";
import AboutUs from "../AboutUs";
import Contacts from "../Contacts";
import Footer from "../Footer";
import MainSection from "../MainSection";
import Feedbacks from "../Feedbacks";


function App() {
  return (
    <div >
      <NavBar/>
      <MainSection/>
      <Services />
      <AboutUs />
      <Feedbacks/>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
