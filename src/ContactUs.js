import React, { Component } from 'react';
import Twitter from 'react-icons/lib/fa/twitter';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import Instagram from 'react-icons/lib/fa/instagram';
import axios from 'axios';
import qs from 'qs';


class ContactUs extends Component {
    state={
        name:"",
        email:"",
        message:"",
        
    }
    handleChangeName = event => {
        this.setState({ name: event.target.value });
      }
    
      handleChangeEmail = event => {
        this.setState({ email: event.target.value });
      }
      handleChangeMessage = event => {
        this.setState({ message: event.target.value });
      }

    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name,
          message:this.state.message,
          email: this.state.email,
          color:"green",

          formDataNameOrder:["name","message","email","color"],
          formGoogleSheetName:"responses",
          formGoogleSendEmail:""
        };
        const url = `https://script.google.com/macros/s/AKfycbwsn-ciO2G-dxTrpbbD72zMMMNH0DQ4x_5DMjJltgszWPj0KE8/exec`
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: `${qs.stringify({name:user.name})}&message=${user.message}&${qs.stringify({email:user.email})}&formDataNameOrder=%5B%22name%22%2C%22message%22%2C%22email%22%5D&formGoogleSheetName=responses&${qs.stringify({formGoogleSendEmail:user.formGoogleSendEmail})}`,
          url,
        };
        console.log(options.data)
        axios(options)
      }
  render() {
    return (
        <div className="cover-container-photo d-flex flex-column p-3 mx-auto align-items-center"  id="with-hash-fragment" >
              <h2>Contact Us</h2>
              <p>Feel free to shout us by feeling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>
                <div className="col-md-8 col-md-offset-2">
                  <form id = "gform" className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputName2">Name</label>
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" onChange={this.handleChangeName}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail2">Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"onChange={this.handleChangeEmail}/>
                    </div>
                    <div className="form-group ">
                      <label htmlFor="exampleInputText">Your Message</label>
                     <textarea  className="form-control" placeholder="Description" onChange={this.handleChangeMessage}></textarea> 
                    </div>
                    <button type="submit" className="btn btn-default">Send Message</button>
                  </form>

                  <hr/>
                    <h3>Our Social Sites</h3>
                  <ul className="list-inline banner-social-buttons">
                    <li><a href="#" className="btn btn-default btn-lg"><Twitter/> <span className="network-name">Twitter</span></a></li>
                    <li><a href="#" className="btn btn-default btn-lg"><FaFacebookOfficial/> <span className="network-name">Facebook</span></a></li>
                    <li><a href="#" className="btn btn-default btn-lg"> <Instagram/><span className="network-name">Instagram</span></a></li>
                  </ul>
                </div>
            </div>

    );
  }
}

export default ContactUs;




