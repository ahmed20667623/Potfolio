import  { useState } from "react";
import { motion } from "framer-motion";
import "./main.css"

const projects = [
  { title: "Brunch Royale", category: ["brunch"], description: "The perfect brunch for cheese lovers", imageSrc: "im2.jpeg" },
  { title: "American Coffee", category: ["coffee"], description: "American Classic Coffee | Fresh Roasted Specialty Coffee", imageSrc: "cof.jpg" },
  { title: "Ice Coffee", category: ["coffee"], description: "Caramelito Iced Coffee - Nespresso Recipes", imageSrc: "11.jpj.avif" },
  { title: "Cream Coffee", category: ["coffee"], description: "this is a creme coffe have a good time", imageSrc: "cr.jpeg" },
  { title: "Family Brunch ", category: ["family"], description: "Welcoming Back the Island's Most Popular Family Brunch ", imageSrc: "fam.jpeg" },
  { title: "Family Brunch ", category: ["family"], description: "Mamatte Franchise Bakery - Café - All-you-can-eat brunches", imageSrc: "br.jpg" }
]
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all")
  const [arr, setarr] = useState(projects)
  const handelClick = (buttonCategory) => {

    setcurrentActive(buttonCategory)

    const newArr = projects.filter((item) => {

      const aaa = item.category.find((myItem) => {

        return myItem === buttonCategory;
      })
      return aaa === buttonCategory;
    })

    setarr(newArr)

  }
  return (
    <main className="flex">
      <section className=" flex  left-section">


        <button onClick={() => {
          setcurrentActive("q")

          const newArr = projects.filter((item) => {

            const aaa = item.category.find((myItem) => {

              return myItem === "brunch", "family";
            })
            return aaa === "brunch", "family";
          })

          setarr(newArr)

        }} className={currentActive === "q" ? "active" : null}>all menu</button>

        <button onClick={() => {

          handelClick("brunch")

        }} className={currentActive === "brunch" ? "active" : null}>brunch royale</button>

        <button onClick={() => {

          handelClick("coffee")

        }} className={currentActive === "coffee" ? "active" : null}>coffees</button>



        <button onClick={() => {
          handelClick("family")
        }} className={currentActive === "family" ? "active" : null}>family brunch</button>


      </section>


      <section className="  flex right-section">

        {arr.map((item) => {
          return (
            <motion.article
            layout
            animate={{transform: "scale(1)" }}
            initial={{ transform: "scale(0)" }}
            transition={{type:"spring",damping:15, stiffness:200}}
            key={item.imageSrc}
             className="card">


              <img width={220} height={130} src={item.imageSrc} alt="" />
              <div style={{ width: "220px" }} className=" box">


                <h1 className="title">{item.title}</h1>

                <p className="sub-title">{item.description}</p>


                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">

                    <div className="icon-link"></div>

                    <div className="icon-github"></div>
                  </div>


                  <a className="link flex" href="">

                    more

                    <span style={{ alignSelf: "end", margin: "2pex" }} className="icon-arrow-right2"></span>
                  </a>

                </div>
              </div>
            </motion.article>

          )
        })}



      </section>


    </main>
  )
};

export default Main;