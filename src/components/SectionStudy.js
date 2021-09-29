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
                                    <h3 className="">Design</h3>
                                    <div className="elementor-spacer-container">
                                        <div className="elementor-spacer">
                                            <div className="elementor-spacer-inner"></div>
                                        </div>
                                    </div>
                                    {/* <div className="elementor-number-container">
                                        <p className="coco-gradient-text">1</p>
                                    </div> */}
                                    <h5>Something about my school</h5>
                                    <p> Name school, project</p>
                                    <MoreButton colorClass="coco-button-black" labelButton="MORE DETAIL"/>
                                </div>
                            </div>
                            <div className="elementor-column-50">
                                <div className="elementor-column-50-wrapper">
                                    <h3 className="">Code</h3>
                                    <div className="elementor-spacer-container">
                                        <div className="elementor-spacer">
                                            <div className="elementor-spacer-inner"></div>
                                        </div>
                                    </div>
                                    <h5>Graduation </h5>
                                    <p>Degree, CPA, English Skill</p>
                                    <MoreButton colorClass="coco-button-black" labelButton="MORE DETAIL"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionStudy