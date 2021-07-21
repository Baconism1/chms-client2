import React from 'react';
import Navbar from './navbar.js';
import emailjs from 'emailjs-com';

export default function Feedback(props) {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_4do0xl3', e.target, 'user_HSPHMTyWL5JnHNtE2sw1x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return(
        <div>
              <div className="mb-3"><Navbar props={props}/></div>
              <div className="pb-3"><h2>Contact Us</h2></div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <a href="/" >Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}