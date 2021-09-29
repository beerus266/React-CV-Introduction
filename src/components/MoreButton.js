import React from "react";
import "../static/style.css";

class MoreButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="elementor-button-container">
                <a className={this.props.colorClass} href="#">
                    <span>{this.props.labelButton}</span>
                </a>
            </div>
        )
    }
}

export default MoreButton