
import { useEffect, useState } from "react";

import "./header.css"



const Header = () => {
    const [showModal, setchowModal] = useState(false)
    const [theme, settheme] = useState(localStorage.getItem("currentMode") ?? "dark")

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    return (
        <header className=" flex">
            <button onClick={() => {

                setchowModal(true)

            }}
                className="menu icon-menu flex"
            >
                { }
            </button>
            <div />

            <nav>


                <ul className="flex">
                    <li><a href="">about</a></li>
                    <li><a href="">articles</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">speaking</a></li>
                    <li><a href="">contact</a></li>
                </ul>



            </nav>
            <button onClick={() => {
                // send value to ls
                localStorage.setItem("currentMode", theme === "light" ? "dark" : "light")

                // get value from ls
                settheme(localStorage.getItem("currentMode"))
            }}
                className="mode flex">
                {theme === "dark" ? (<span className="icon-moon-o"> </span> ) : (<span className="icon-sun"> </span>)}

               


            </button>

            {showModal && (
                <div className=" fixed">

                    <ul className="modal ">
                        <li className="border">
                            <button className="icon-cross" onClick={() => {
                                setchowModal(false)
                            }} />
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Article</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Speaking</a>
                        </li>
                        <li>
                            <a href="">Uses</a>
                        </li>
                    </ul>

                </div>
            )

            }
        </header>
    )
};

export default Header;