import React, { Component } from 'react';
import Twitter from 'react-icons/lib/fa/twitter';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import Instagram from 'react-icons/lib/fa/instagram';
import axios from 'axios';


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
          email: this.state.email,
          message:this.state.message
        };
    
        axios.post(`https://script.google.com/macros/s/AKfycbwsn-ciO2G-dxTrpbbD72zMMMNH0DQ4x_5DMjJltgszWPj0KE8/exec`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
  render() {
    return (
    <section id="contact" className="content-section text-center">
        <div className="contact-section">
            <div className="container">
              <h2>Contact Us</h2>
              <p>Feel free to shout us by feeling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>
              <div className="row">
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
            </div>
        </div>
      </section>

    );
  }
}

export default ContactUs;




