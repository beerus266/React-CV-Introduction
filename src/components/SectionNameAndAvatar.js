import React from "react";
import portrail from "../static/portrait.jpg"
import "../static/style.css"
import MoreButton from "./MoreButton";

class SectionNameAndAvatar extends React.Component {
    render(){
        return (
            <section>
                <div className="elementor-section-container">
                    <div className="dark-section">
                        <section className="elementor-section">
                            <div className="elementor-widget-wrap">
                                <div className="elementor-row">
                                    <div className="elementor-column-50">
                                        <div className="elementor-column-50-wrapper">
                                            <h1>
                                                Hello <br></br>
                                                I'm Hai
                                            </h1>
                                            <p>
                                                A full stack allaround
                                                <em>
                                                    <strong>
                                                        "developer"
                                                    </strong>
                                                </em>
                                            </p>
                                            <MoreButton colorClass="coco-button-white" labelButton="DOWNLOAD CV"/>
                                        </div>
                                    </div>
                                    <div className="elementor-column-50">
                                        <div className="elementor-column-50-wrapper">
                                            <div className="elementor-image-wrapper">
                                                <img src={portrail} style={{width: 420, height:618}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionNameAndAvatar;