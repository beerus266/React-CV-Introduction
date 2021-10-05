import React from "react";
import MoreButton from "./MoreButton";
import "../static/style.css";

class SectionStudy extends React.Component {
    render(){
        return(
            <section>
                <div className="elementor-section-container">
                    <div className="elementor-container">
                        <h2>
                            Education
                        </h2>
                        <p>
                            A full stacj allaround designer that tristique est placerat in massa 
                            <strong>
                                consectetur quisque
                            </strong>
                            lobortis vitae faucibus diam
                        </p>
                        <div className="elementor-row">
                            <div className="elementor-column-50">
                                <div className="elementor-column-50-wrapper">
                                    <h3 className="">School</h3>
                                    <div className="elementor-spacer-container">
                                        <div className="elementor-spacer">
                                            <div className="elementor-spacer-inner"></div>
                                        </div>
                                    </div>
                                    <h5>Hanoi University of Science and Technology</h5>
                                    <ul>
                                        <li>Major: Information Technology</li>
                                        <li>CPA: 2.85</li>
                                    </ul>
                                </div>
                                <MoreButton colorClass="coco-button-black" labelButton="MORE DETAIL"/>
                            </div>
                            <div className="elementor-column-50">
                                <div className="elementor-column-50-wrapper">
                                    <h3 className="">Online cources</h3>
                                    <div className="elementor-spacer-container">
                                        <div className="elementor-spacer">
                                            <div className="elementor-spacer-inner"></div>
                                        </div>
                                    </div>
                                    <h5>Many cources on Ucademy, Courcesa ...</h5>
                                    <ul>
                                        <li>Deep Learning</li>
                                        <li>Website Developer</li>
                                    </ul>
                                </div>
                                <MoreButton colorClass="coco-button-black" labelButton="MORE DETAIL"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionStudy