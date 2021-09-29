import React from "react";
import { useEffect, useState } from "react";
import "../static/style.css";
import CompanyRow from "./CompanyRow";

class SectionExperience extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            thePosition: 0,
            company: [
                {
                    companyName: "DHBK",
                    position: "Student",
                    time: "2017-2022"
                },
                {
                    companyName: "NguyenDinh",
                    position: "Cooker",
                    time: "2019-2020"
                },
                {
                    companyName: "STI",
                    position: "PHP Developer",
                    time: "3/2020 - 10/2020"
                },
                {
                    companyName: "DLS",
                    position: "AI Internship",
                    time: "6/2021 - now"
                },
            ]
        };
    }

    render () {
        return (
            <section>
                <div className="section-container">
                    <div className="content-wrapper">
                        <h3>Experience</h3>
                        <p>
                            Brief your experience dfasdfasdfasdfas
                            <strong> something speical</strong>
                        </p>
                        <div className="table-container">
                            <div className="header-table work-row">
                                <div>COMPANY</div>
                                <div>POSITION</div>
                                <div>MONTH</div>
                            </div>
                            <div className="body-table">
                                {this.state.company.map(element => {
                                    return (<CompanyRow company={element} key={element.companyName}/>);
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionExperience