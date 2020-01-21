
import Image from "./chip.JPG";
import React, { Component } from "react";

class Card extends Component{
constructor(props) {
  super(props);

  this.state = {
  CardNumber: '1234567891234568',
  ValidThru : '1709',
  CardHolder:'faten fayala',
  };}
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})

  }

  
render() {
  return (
    <div className="component">
      <div className="card">
        <h1 className="company-name">Company name</h1>
        <img src={Image} className="chip-phone" />
        <h1 className="card-number"> {this.state.CardNumber.padEnd(16, '*').replace(/(.{4})/g, '$1 ').trim()}</h1>
        
          <div>
            <h1 className="valid-thru"> {this.state.ValidThru ? this.state.ValidThru.slice(0,2)+'/'+this.state.ValidThru.slice(2,4):'MM/YY'}</h1>
            <h1 className="card-holder"> {this.state.CardHolder.toUpperCase()}</h1>
          </div>
          <div>
            <img
              className="mastercard"
              src="https://seeklogo.net/wp-content/uploads/2016/07/mastercard-vector-logo.png"
            />
          </div>
        </div>
      
      <div className="input">
          <div className="data"> 
      <input className="output" name="CardNumber" onChange={this.handleChange}  placeholder="Enter Card Number" type='text' maxLength='16' />
      </div> 
      <div className="data"> 
      <input className="output" name="ValidThru" onChange={this.handleChange} placeholder="Enter Valid Thru" type='text' maxLength='5'/>
      </div> 
      <div className="data"> 
      <input className="output" name="CardHolder" onChange={this.handleChange} placeholder="Enter Card Holder" type='text' maxLength='20' />
      </div> 
      </div>
    </div>
  );
};
}
export default Card;
