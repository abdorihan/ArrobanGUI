import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
        <section className="u-align-center u-clearfix u-image u-shading u-section-5" id="carousel_39ed">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-form u-form-1">
            <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: 10}}>
              
              
              <div className="u-form-group u-form-name u-form-partition-factor-3">
                <label htmlFor="name-6547" className="u-label">Width in centimeter</label>
                <input type="text" placeholder="Enter a valid width" id="name-6547" name="width" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
              </div>
              <div className="u-form-email u-form-group u-form-partition-factor-3">
                <label htmlFor="email-6547" className="u-label">Length in centimeter</label>
                <input type="email" placeholder="Enter a valid length" id="email-6547" name="length" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
              </div>
              <div className="u-form-group u-form-partition-factor-3 u-form-group-3">
                <label htmlFor="text-b612" className="u-label">Height in centimeter</label>
                <input type="text" id="text-b612" name="height" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" placeholder="Enter a valid height" required="required"/>
              </div>
              <div className="u-form-group u-form-partition-factor-3 u-form-group-4">
                <label htmlFor="text-ead8" className="u-label">Weight in kilograms</label>
                <input type="text" id="text-ead8" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" placeholder="Enter a valid weight"/>
              </div>
              <div className="u-form-email u-form-group u-form-partition-factor-3 u-form-group-5">
                <label htmlFor="email-1463" className="u-label">Email</label>
                <input type="email" placeholder="Enter a valid email address" id="email-1463" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
              </div>
              <div className="u-form-group u-form-partition-factor-3 u-form-phone u-form-group-6">
                <label htmlFor="phone-1bd9" className="u-label">Phone</label>
                <input type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" placeholder="Enter your phone (e.g. +218910000000)" id="phone-1bd9" name="phone" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
              </div>
              <div className="u-form-group u-form-message">
                <label htmlFor="message-6547" className="u-label">Message</label>
                <textarea placeholder="Enter your message" rows="4" cols="50" id="message-6547" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""></textarea>
              </div>
              <div className="u-align-left u-form-group u-form-submit">
                <a href="#" className="u-btn u-btn-submit u-button-style">Submit</a>
                <input type="submit" value="submit" className="u-form-control-hidden"/>
              </div>
              <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
              <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
              <input type="hidden" value="" name="recaptchaResponse"/>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
  
export default Calculator;


