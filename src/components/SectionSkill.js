import React from "react";
import SkillRow from "./SkillRow";

class SectionSkill extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            skills : [
                {
                    nameSkill: "Toeic",
                    score: "620",
                    percent: Math.round(620/990 * 100)
                },
                {
                    nameSkill: "IELTS",
                    score: "5.",
                    percent: Math.round(5/9 * 100)
                }
            ]
        }
    }

    render (){
        return (
            <section>
                <div className="elementor-black-section-container">
                    <div className="elementor-row-wrapper">
                        <div className="elementor-title">
                            <h2>Skill</h2>
                            <p>
                                Your skills about language community, language develop,
                                For example, 
                                <strong> English, Toeic, ielts </strong>
                                or
                                <strong> Java, PHP, JS, HTML/CSS, Python </strong>
                                or 
                                <strong> Microsoft Office </strong>
                            </p>
                        </div>
                        <div className="skills-hoder">
                            {
                                this.state.skills.map(skill => 
                                    <SkillRow skill={skill} key={skill.nameSkill}/>  
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionSkill