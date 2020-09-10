import React, { Component, Profiler } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
state={
  name:"",
  address:"",
  phone:"",
  gender:"",
  submission:false
}
handleChange(event){
 let{name}= event.target
 let{value}= event.target
 if(name==="name"){
   this.setState({
     name:value
   })
 }else if(name==="address"){
   this.setState({
     address:value
   })
 }else if(name==="phone"){
   this.setState({
     phone:value
   })
 }else if(name==="gender")
 {
   this.setState({
     gender:value
   })
 }
  
}
onSubmit(){
  this.setState({
  submission:true
  })
}
  render(){
    return(
      <div className="App">
     <h1>This is the input fields </h1>
     <div id="your_name">
     <label>Name</label>
       <input type="text" value={this.state.name} name="name" onChange={(e)=>{this.handleChange(e)}}/>
     </div>
       <div id="Your_address">
       <label>Adderss:</label>
       <input type="text" name="address" onChange={ (e)=>{this.handleChange(e)}} value={this.state.address}></input>

       </div>
        <div id="gopal">
          <label>Phone</label>
          <input type="number" name="phone" onChange={(e)=>{this.handleChange(e)}} value={this.state.phone}></input>
        </div>
         <div id="cars">
      <label> Gender
         <select value={this.state.gender} onChange={(e)=>{this.handleChange(e)}}>
         <option value="volvo">Male</option>
         <option value="saab">Female</option>
         </select>
     </label>
        
         </div>
       <button onClick={ ()=>{this.onSubmit()}}>Submit</button>
       <h2>Submission</h2>
       {this.state.submission==true &&
       <div>
       <p>{this.state.name}</p>  
       <p>{this.state.address}</p>
       <p>{this.state.phone}</p>
       <p>{this.state.gender}</p>
       </div>
       }
       
      </div>
    );
  }
}

export default App;
