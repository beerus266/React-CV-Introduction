import React from "react";
import portrail from "../static/portrait.jpg";
import onFarm from "../static/on-the-farm.jpg";
import "../static/style.css";
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
                                                Nguyễn Văn Hải
                                            </h1>
                                            <p>
                                                A full-stack
                                                <em>
                                                    <strong>
                                                        "developer"
                                                    </strong>
                                                </em>
                                            </p>
                                            <div className="profile">
                                                <div>
                                                    <i className="fa fa-birthday-cake"></i>
                                                    <span> 26/06/1999</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-phone"></i>
                                                    <span> 0393-755-766</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-envelope"></i>
                                                    <span> hainv266@gmail.com</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-facebook-f"></i>
                                                    <span> facebook.com/nguyenvanhai.zozin</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-map-marker-alt"></i>
                                                    <span> Tay Tuu - Bac Tu Liem - Ha Noi</span>
                                                </div>
                                            </div>
                                        </div>
                                        <MoreButton colorClass="coco-button-white" labelButton="DOWNLOAD CV"/>
                                    </div>
                                    <div className="elementor-column-50">
                                        <div className="elementor-column-50-wrapper">
                                            <div className="elementor-image-wrapper">
                                                <img src={onFarm} style={{width: 420, height:618}}/>
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