import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      location: window.location.href.substr(23),
      pub_filters: "",
      pub_category: "",
      url: window.location.href
    }
    this.handleChange = this.handleChange.bind(this)
  }
   
    handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }
    

  render() {
    return (
      <form>
          <h1>Please fill out then submit, then press go</h1>
          <br/>
          <h2>Filters</h2>
          <label>
              <input 
                  type = "radio"
                  name = "pub_filters"
                  value = "new_borns"
                  checked = {this.state.pub_filters === "new_borns"}
                  onChange = {this.handleChange}
              /> New borns
          </label>

          <br/>
          <label>
              <input 
                  type = "radio"
                  name = "pub_filters"
                  value = "non_smoker"
                  checked = {this.state.pub_filters === "non_smoker"}
                  onChange = {this.handleChange}
              /> Non smoker
          </label>

          <br/>
          <label>
              <input 
                  type = "radio"
                  name = "pub_filters"
                  value = "first_aid"
                  checked = {this.state.pub_filters === "first_aid"}
                  onChange = {this.handleChange}
              /> First aid
          </label>

          <br/>
          <label>
              <input 
                  type = "radio"
                  name = "pub_filters"
                  value = "own_transport"
                  checked = {this.state.pub_filters === "own_transport"}
                  onChange = {this.handleChange}
              /> Own Transport
          </label>

          <br/>
          <label>
              <input 
                  type = "radio"
                  name = "pub_filters"
                  value = "qualifications"
                  checked = {this.state.pub_filters === "qualifications"}
                  onChange = {this.handleChange}
              /> Qualifications
          </label>

          <br/>
          <label>
              <input 
                  type = "radio"
                  name = "pub_filters"
                  value = "overnights"
                  checked = {this.state.pub_filters === "overnights"}
                  onChange = {this.handleChange}
              /> Overnights
          </label>

          <br/>
          <label>
              <input 
                  type = "radio"
                  name = "pub_filters"
                  value = "evenings"
                  checked = {this.state.pub_filters === "evenings"}
                  onChange = {this.handleChange}
              /> Evenings
          </label>

          <br/>
          <label>
              <input 
                  type = "radio"
                  name = "pub_filters"
                  value = "mornings"
                  checked = {this.state.pub_filters === "mornings"}
                  onChange = {this.handleChange}
              /> Mornings
          </label>

          <br/>
          <label>
              <input 
                  type = "radio"
                  name = "pub_filters"
                  value = "all_day"
                  checked = {this.state.pub_filters === "all_day"}
                  onChange = {this.handleChange}
              /> All day
          </label>

          <br/>
          <label>Category:  </label>
          <select 
          value = {this.state.pub_category}
          defaultValue={{ label: "Select Dept", value: 0 }}
          onChange = {this.handleChange}
          name = "pub_category"
          >
            <option value = ""> none</option>
            <option value = "babysitter"> babysitter</option>
            <option value = "babysitter_overnight">babysitter_overnight</option>
            <option value = "nanny">nanny</option>
            <option value = "childminder">childminder</option>
            <option value = "day_care">day_care</option>
            <option value = "maternity_nurse">maternity_nurse</option>
          </select>

       
       
       
       
       
        <h2> Your current location is {this.state.url}</h2>
        <h2>Your current category is {this.state.pub_category}</h2>
        <h2>Your current filter is {this.state.pub_filters}</h2>
        <h2>Your current link is {this.state.location}</h2>
        <button>Submit</button>
        <br/>
        <a href={"https://oogo.herokuapp.com/s?" + this.state.location} target="_blank" rel="noopener noreferrer">go</a> 
      </form>

    )
  }
}

export default App;
