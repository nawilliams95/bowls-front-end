import React from "react";


export default function ContactUsForm(props) {
      return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-bold" style={{fontSize: '20px', marginBottom: '30'}}>
                <div class="container is-fluid" style={{width: '50%'}}>
                    <div class="notification" style={{fontSize: '25px', marginBottom: '30px'}}>
                        <h1> 
                            <strong>Contact Form</strong>
                        </h1>
                        <h1 style={{fontSize: '20px', marginTop: '20px'}}>
                            To contact us by email, please complete and submit the form below. We do our best to respond within 24 business hours, but it may take longer if our volume is unusually high. For urgent matters, please call 555-555-5555 during business hours for immediate assistance.
                        </h1>
                    </div>
                </div>
            </div>
            <form>
                <div class='field' style={{width: '400px', display: 'block', margin: '0 auto'}}>
                    <label htmlFor="firstName" class='label' htmlFor="firstName">
                        First Name
                    </label>
                    <input class='input' type="text" name="firstName" placeholder='Type Your First Name Here' required onChange={props.handleInput} />
                </div>
                <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
                    <label htmlFor="lastName" class='label' htmlFor="lastName">
                        Last Name
                    </label>
                    <input class='input' type="text" name="lastName" placeholder='Type Your Last Name Here' required onChange={props.handleInput} />
                </div>
                <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
                    <label htmlFor="orderNumber" class='label' htmlFor="orderNumber">
                        Order Number
                    </label>
                    <input class='input' type="text" name="orderNumber" placeholder='Type Your Order Number Here' required onChange={props.handleInput} />
                </div>
                <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
                    <label htmlFor="email" class='label' htmlFor="email">
                        Email
                    </label>
                    <input class='input' type="text" name="email" placeholder='Type Your Email Here' required onChange={props.handleInput} />
                </div>
                <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
                    <label htmlFor="message" class='label' htmlFor="message">
                        Message
                    </label>
                    <textarea class='input' id="subject" name="subject" placeholder="Type Your Message Here" required onChange={props.handleInput}style={{width: '400px', height: '200px'}}>
                    </textarea>
                </div>
                <div class='control' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '30px', marginBottom: '70px'}}>
                    <input class='button is-info' value="Submit" type="submit" onClick={props.handleInput} />
                </div>
            </form>
        </div>
               
        );
    }