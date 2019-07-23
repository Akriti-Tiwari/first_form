import React, { Component } from 'react';
import './Form.css';

class Form extends Component{

	constructor(props){
		super(props);

		this.state = { fullname: "Kriti",
						email: "akriti@gmail.com",
						contact: "7356847595",
						Message: "This is my first site."}
	}

/*handlename= (event)	=> {

	this.setState({ fullname: event.target.value })
}

handleemail= (event)	=> {

	this.setState({ email: event.target.value })
}

handlecontact= (event)	=> {

	this.setState({ contact: event.target.value })
}

handleMessage= (event)	=> {

	this.setState({ Message: event.target.value })
}*/

handlechangeall= (event) => {
	this.setState ( { [event.target.name] :event.target.value })
}
handlesubmit = (event) => {
	/*alert (`my name is ${this.state.fullname}
			My email id is ${this.state.email},
			My contact is ${this.state.contact}
			My Message to ur company is ${this.state.Message}
			`);*/
	alert(JSON.stringify(this.state))
	console.log(JSON.stringify(this.state))
	event.preventDefault();
}
	
	render (){
		return (
			<div><br/>
				<br/>
				<form onSubmit ={this.handlesubmit} >
					<br/>
					<lable> Fullname </lable><br/>
					<input type="text" name="fullname" value={this.state.fullname}
						onChange={this.handlechangeall}/> <br/>

					<lable> Email </lable><br/>
					<input type="email" name="email" value={this.state.email}
						onChange={this.handlechangeall}/> <br/>
 

					<lable> contact </lable><br/>
					<input type="number" name="contact" value={this.state.contact}
						onChange={this.handlechangeall}/> <br/>

					<lable> Message </lable><br/>
					<textarea value={this.state.Message} name="Message"
						onChange={this.handlechangeall}/> <br/>


					<input type="submit"  value="Send" /> <br/>

				</form>
			</div>



		)
	}
}

export default Form;