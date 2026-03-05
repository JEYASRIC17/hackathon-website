import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/About";
import Events from "./pages/team";
import Mentor from "./pages/mentor";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />

      {/* Sections */}
      <Home />
      <About />
      <Events />
      <Mentor />
      <Contact />

      <Footer />
    </>
  );
}

export default App;