import React, {Component} from "react";
import emailjs from 'emailjs-com';
import "./App.css";
export default function App() {
  
    function sendEmail(e){
        e.preventDefault();
        console.log(process.env.REACT_APP_SERVICE_ID);
        console.log(process.env.REACT_APP_TEMPLATE_ID);
        console.log(process.env.REACT_APP_USER_ID);
        var event = e.target;
        //console.log(document.getElementById('filters'));
       emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,e.target,process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
    
            console.log(error.text);
        });
      }
      return (
        <form id="my-form" className="contact-form" onSubmit={sendEmail}>
          <h1 > 
            <img className = "logo" 
                 alt = "logo" 
                 src={"logo192.png"}  
                 width = "220" 
                 height = "80"/>
            
          </h1>
          <text id='title'>Book a Minder<br/></text>
          <div id='fields'>
            <h2 className = "press"></h2>
            <h2>Filters</h2>
            <div id='filters'>
                  <label>
                  <input id='new_borns'
                  type="checkbox"
                  name="pub_filters"
                  value="new_borns"
                  //onChange={this.handleChange}
                  />{" "}
                  New borns
                </label>

                <br />
                <label>
                  <input id='non_smoker'
                  type="checkbox"
                  name="pub_filters"
                  value="non_smoker"
                  //onChange={this.handleChange}
                  />{" "}
                  Non smoker
                </label>

                <br />
                <label>
                  <input id='first_aid'
                  type="checkbox"
                  name="pub_filters"
                  value="first_aid"
                  //onChange={this.handleChange}
                  />{" "}
                  First aid
                </label>

                <br />
                <label>
                  <input id='own_transport'
                  type="checkbox"
                  name="pub_filters"
                  value="own_transport"
                  //onChange={this.handleChange}
                  />{" "}
                  Own Transport
                </label>

                <br />
                <label>
                  <input id='qualifications'
                  type="checkbox"
                  name="pub_filters"
                  value="qualifications"
                  //onChange={this.handleChange}
                  />{" "}
                  Qualifications
                </label>

                <br />
                <label>
                  <input id='overnights'
                  type="checkbox"
                  name="pub_filters"
                  value="overnights"
                  //onChange={this.handleChange}
                  />{" "}
                  Overnights
                </label>

                <br />
                <label>
                  <input id='evenings'
                  type="checkbox"
                  name="pub_filters"
                  value="evenings"
                  //onChange={this.handleChange}
                  />{" "}
                  Evenings
                </label>

                <br />
                <label>
                  <input id='mornings'
                  type="checkbox"
                  name="pub_filters"
                  value="mornings"
                  //onChange={this.handleChange}
                  />{" "}
                  Mornings
                </label>

                <br />
                <label>
                  <input id='all_day'
                  type="checkbox"
                  name="pub_filters"
                  value="all_day"
                  //onChange={this.handleChange}
                  />{" "}
                  All day
                </label>

            </div>
            <div id='categories'>
                <label>Category: </label>
                <br />
                <select id='categories'
                //value={this.state.pub_category}
                defaultValue={{ label: "Select Dept", value: 0 }}
                //onChange={this.handleChange}
                name="pub_category"
                >
                  <option value="">none</option>
                  <option value="babysitter"> babysitter</option>
                  <option value="babysitter_overnight">babysitter_overnight</option>
                  <option value="nanny">nanny</option>
                  <option value="childminder">childminder</option>
                  <option value="day_care">day_care</option>
                  <option value="maternity_nurse">maternity_nurse</option>
                </select>
            </div>
            <div >
                 <label> Please enter your booking number:</label>
                <br />
                <input id='booking_number'
                type="text"
                name="bookingId"
                //value={this.state.value}
                //onChange={this.handleChange}
                />
                <br/>
                <br/>
            </div>
            <div id='time_and_date'>
                <label>Date: </label>
                
                <input id='date'
                type="date"
                name="date"
                //value={this.state.value}
                //onChange={this.handleChange}
                />
                
                <label>Time: </label>
              
                <input id='time'
                type="time"
                name="time"
                //value={this.state.value}
                //onChange={this.handleChange}
                />
            </div>
            <input class='submitButton' type="submit" value="Submit" />
          </div>
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js"></script>
          <script type="text/javascript">(function(){emailjs.init(process.env.REACT_APP_USER_ID)})();</script>
        </form>
      );
    }