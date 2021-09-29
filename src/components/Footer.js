import React from "react";
import 'font-awesome/css/font-awesome.min.css';

class Footer extends React.Component {
    render () {
        return (
            <footer className="center-relative">
                <section className="elementor-section">
                    <div className="content-footer-wrapper">
                        <div className="footer-wrapper">
                            <div className="content-wrapper">
                                <div className="widget-wrap">
                                    <div className="copyright-wrap">
                                        © 2021 Copy Right HaiNV266
                                    </div>
                                    <div className="icon-wrap">
                                        <div className="icon-container">
                                            <div className="icon-row">
                                                <div className="icon-widget-wrap widget-wrap">
                                                    <a className="icon" href="#">
                                                        <i className="fa fa-twitter" style={{fontSize:30}}></i>  
                                                    </a>
                                                    <a className="icon" href="https://www.facebook.com/nguyenvanhai.zozin">
                                                        <i className="fa fa-facebook-square" style={{fontSize:30}}></i>
                                                    </a>
                                                    <a className="icon" href="https://github.com/beerus266">
                                                        <i className="fa fa-github" style={{fontSize:30}}></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer