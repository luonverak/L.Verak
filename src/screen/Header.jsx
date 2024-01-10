import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const pageHeader=(props)=>{
    const home=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            });
    }
    const skill=()=>{
        console.log('click');
        window.scrollTo({
            top : 1080,behavior:"smooth"
        });
    }
    return(
        <div>
            <header>
                <div className="page-header">

                <div className="page-logo">
                    <h1>Luon Verak</h1>
                </div>
                <div className="page-menu" >
                    <ul>
                        <li><Link onClick={home} to="/">HOME</Link></li>
                        <li><Link onClick={skill} to="/">SKILL</Link></li>
                        <li><Link to="/study">STUDY</Link></li>
                        <li><Link to="/work">WORK</Link></li>
                        <li><Link to="/experiance">Experiance</Link></li>
                        {props.children}
                    </ul>
                </div>
                <div className="rl-user">
                    <button className="btn btn-light" >Contact Me</button>
                </div>
            </div>
            </header>

        </div>
    )
}
export default pageHeader;