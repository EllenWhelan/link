import React from "react";
import emailjs from 'emailjs-com';
import "./App.css";
export default function App() {
    function sendEmail(e){
        e.preventDefault();
        console.log(process.env.REACT_APP_SERVICE_ID);
        console.log(process.env.REACT_APP_TEMPLATE_ID);
        console.log(process.env.REACT_APP_USER_ID);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,e.target,process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
    
            console.log(error.text);
        });
      }
      return (
        <form id="my-form" className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
          <script type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js">
            </script>
            <script type="text/javascript">
              (function(){
                  emailjs.init(process.env.REACT_APP_USER_ID)
              })();
            </script>
        </form>
      );
    }