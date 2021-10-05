import React from "react";
import "../static/style-degree.css";

class SectionExperience extends React.Component {
    render () {
        return (
            <section>
                <div className="elementor-black-section-container">
                    <div className="elementor-row-wrapper">
                        <div className="elementor-title">
                            <h2>
                                Experience
                            </h2>
                            <p>
                                Project you have done
                                <strong>or take part in</strong>
                            </p>
                        </div>
                        <div className="elementor-row">
                            <div  className="elementor-column-50">
                                <div className="elementor-column-wrapper">
                                    <div className="experience-content">
                                        <h5>Web Developer</h5>
                                        <p>Develope website managing for interprise sdfasdf</p>
                                    </div>
                                    <div className="experience-spacer"></div>
                                    <div className="experience-content">
                                        <h5>Deep Learning</h5>
                                        <p>Detect and recognise the road signs. Segmentation hair style</p>
                                    </div>
                                </div>
                            </div>
                            <div  className="elementor-column-50">
                                <div className="elementor-column-wrapper">
                                <div className="experience-content">
                                    <h5>IOT Projects</h5>
                                        <p>Attendance at school. Smart irrigation.</p>
                                    </div>
                                    <div className="experience-spacer"></div>
                                    <div className="experience-content">
                                        <h5>DevOps</h5>
                                        <p>Docker. Kubernetes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionExperience;