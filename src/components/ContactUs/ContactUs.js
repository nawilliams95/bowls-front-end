import React from "react";

export default function ContactUs(props) {
      return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-bold" style={{fontSize: '20px', marginBottom: '30px', marginTop: '30px'}}>
            
                  <div class="container is-fluid" style={{width: '50%'}}>
                  <div class="notification">
                  <strong>Hours of Operation</strong>
                  </div>
                    <h1><strong>M-F: </strong>9am-9pm EST</h1>
                    <h1><strong>Sat: </strong>9am-12am EST</h1>
                    <h1><strong>Sun: </strong>9am-9pm EST</h1>
                  </div>
                  <br />
                <div>
                <br />
                <div class="container is-fluid" style={{width: '50%'}}>
                  <div class="notification">
                  <strong>Contact Us</strong>
                  <br />
                  </div>
                    <h1><strong>By Mail</strong></h1>
                    <h1>123 Anywhere St.</h1>
                    <h1>Anytown, ST 12345</h1>
                  </div>
                <br />
                <div>
                <h1><strong>By Phone</strong></h1>
                <h1>555-555-5555</h1>
                </div>
                <br />
                <h1 style={{marginBottom: '100px'}}>
                  <strong>Email</strong>
                  <br />
                  To contact us via email, please fill out a <a href="/contactusform" style={{margin:'auto'}}>
                contact form</a>.</h1>
                <br />
                </div>
            </div>
        </div>  
        );
    }
