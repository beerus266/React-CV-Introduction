import React from "react";

class CompanyRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            classNameRow: "work-row invisible",
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.listenToScroll);
    }
      
    componentWillUnmount() {
        document.removeEventListener('scroll', this.listenToScroll);

    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    listenToScroll = () => {
        const wrappedElement = document.getElementById(this.props.company.companyName);
        if (this.isBottom(wrappedElement)) {
            this.setState({
                classNameRow: "work-row fadeIn"
            });
            document.removeEventListener('scroll', this.listenToScroll);
        }
        
    }

    render (){
        return (
            <div className={this.state.classNameRow} id={this.props.company.companyName}>
                <div>{this.props.company.companyName}</div>
                <div>{this.props.company.position}</div>
                <div>{this.props.company.time}</div>
            </div>
        )
    }
}

export default CompanyRow