import React, { Component } from 'react';
    


class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            counter: 0
        };
    }
    ageUp =()=>{ 
        this.setState({counter : this.state.counter + 1});
        console.log(this.state.counter);
        }
    render() {
        return(
        <div>
        <h1> {this.props.lastName}, {this.props.firstName}</h1>
        <p> Age: {this.props.age+this.state.counter}</p>
        <p> Hair Color: {this.props.hairColor}</p>
        <button onClick={this.ageUp} count={this.state.counter}> Birthday Button for {this.props.firstName} {this.props.lastName}</button>
        </div>
        )
    }
}
export default PersonCard;