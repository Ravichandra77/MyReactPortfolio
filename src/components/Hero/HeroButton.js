import React from 'react';
import './hero.css';
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class HeroButton extends React.Component{
    state = {
        buttonValue: this.props.btnValue
    }
    render() {

    return (
   
        <Link to={this.props.url}>
            <Button variant={this.props.variant} className={this.props.section + " button--nina"}
                data-text={this.state.buttonValue} >
                    {/* {this.state.buttonValue.split("").map((a, i) => <span key={i}> {a} </span>)}	 */}
                    {this.state.buttonValue.split("").map((a, i) => 
                    {
                        if (a === " ")
                           a = " &nbsp; ";
                            return <span key={i}> {a} </span>
                        
                    }
                    )}
            </Button> 
        </Link>
            
    );
    }
}
               
               
               