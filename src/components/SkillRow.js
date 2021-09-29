import React from "react";

class SkillRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fillWidth: "10%",
            fillMaskWidth: "12%"
        }
    }

    componentDidMount () {
        document.addEventListener("scroll", this.listenToScroll);
    }

    componentWillUnmount () {
        document.removeEventListener("scroll", this.listenToScroll);
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <=window.innerHeight;
    }

    listenToScroll = () => {
        const wrappedElement = document.getElementById(this.props.skill.nameSkill);
        if (this.isBottom(wrappedElement)) {
            this.setState({
                fillWidth: this.props.skill.percent + "%",
                fillMaskWidth: this.props.skill.percent + 2 + "%",
            });
            document.removeEventListener("scroll", this.listenToScroll);
        }
    }

    render (){
        return (
            <div className="skill-hoder" id={this.props.skill.nameSkill}>
                <div className="skill">
                    <div className="skill-text">{this.props.skill.nameSkill} : {this.props.skill.score}</div>
                    <div className="skill-fill" style={{width: this.state.fillWidth}}></div>
                    <div className="skill-fill-mask" style={{width: this.state.fillMaskWidth}}></div>
                </div>
                <div className="skill-num">{this.props.skill.score}</div>
            </div>
        )
    }
}

export default SkillRow