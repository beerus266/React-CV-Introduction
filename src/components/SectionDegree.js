import React from "react";
import "../static/style-degree.css";

class SectionDegree extends React.Component {
    render () {
        return (
            <section>
                <div className="elementor-black-section-container">
                    <div className="elementor-row-wrapper">
                        <div className="elementor-title">
                            <h2>
                                Degree
                            </h2>
                            <p>
                                Project you have done
                                <strong> reality project</strong>
                            </p>
                        </div>
                        <div className="elementor-row">
                            <div  className="elementor-column-50">
                                <div className="elementor-column-wrapper">
                                    1
                                </div>
                            </div>
                            <div  className="elementor-column-50">
                                <div className="elementor-column-wrapper">
                                    1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionDegree;