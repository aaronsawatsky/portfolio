import React from "react";

export default function About() {
    return(
        <div className="container">
            <div className="row">
                <div className="intro column">
                    <h2>Hi, I'm Aaron.<br/>I'm a Front-End Developer</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dolorem officia blanditiis hic suscipit reiciendis modi quod nihil, aspernatur quo cum molestiae mollitia, eligendi ipsum assumenda adipisci quibusdam totam qui.</p>
                    <div className="buttons">
                        <button>
                            <a href="">Work with me</a>
                        </button>
                        <button>
                            <a href="">Projects</a>
                        </button>
                    </div>
                    
                </div>
                
                <div className="photo-div column">
                    <img className="photo" src="./FH000035.JPG" alt="" />
                </div>
            </div>
        </div>
    )
}