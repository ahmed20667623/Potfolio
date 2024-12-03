import {useEffect, useRef} from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import donneAnimation from "../../../public/animation/donne.json";
import enveAnimation from "../../../public/animation/enve.json";

import "./contact.css"
const Contact = () => {
    const [state, handleSubmit] = useForm("xrbglvor");
    const emailRef = useRef()    
    const textRef = useRef()
    
    useEffect(()=>{
        if(state.succeeded){
            emailRef.current.value = ''
            textRef.current.value = ''
        }
    },[state])
    return (
        <section className="contact-us">
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact us
            </h1>
            <p className="sub-title">contact us for more information and get notfied when I publish something new</p>

            <div style={{justifyContent:'space-between'}}  className="flex">
                <form onSubmit={handleSubmit} className="">
                    
                    <div className="flex">
                        <label htmlFor="email">Email Address</label>
                        <input ref={emailRef}  type="email" name="email" id="email"   />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />

                    </div>
                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message</label>
                        <textarea ref={textRef}  loop={false} required name="message" id="message" ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className="submit">
                        {state.submitting ? "Submitting..." : "Submit"}
                    </button>
                    {state.succeeded && (<p className="flex suc " style={{ fontSize: "18px", marginTop: "1.7rem" }}>
                        <Lottie loop={false} style={{height:"70px", width:"70px",}} animationData={donneAnimation} />
                        Your message has been sent successfully👌
                    </p>)}
                </form>
                <div className=" animation">
                <Lottie className="contact-animation" style={{height:"300px", width:"300px"}} animationData={enveAnimation} />
                </div>
            </div>
        </section>
    )
};

export default Contact;
