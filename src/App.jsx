
import Header from "./components/1-header/header"
import Hero from "./components/2-hero/hero";
import Main from "./components/3-main/main";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";
import { useEffect, useState } from "react"



function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setscroll2Top(true)

      } else {
        setscroll2Top(false)
      }

    });
  }, []);

  const [scroll2Top, setscroll2Top] = useState(false);
  return (
    <div id="up" className="container">
      < Header />

      < Hero />
      <div className="devider" />
      < Main />
      <div className="devider" />
      < Contact />
      <div className="devider" />
      <Footer />
      {scroll2Top && (
        <a style={{ opacity: scroll2Top? 1 : 0, transition: "3s" }} href="#up">
          <button className="icon-chevron-up scroll2Top"></button>
        </a>

      )}
    </div>
  )


}

export default App;
