import React, { Component } from "react";
import "./OogoPopup.css";

class OogoPopup extends Component {
    constructor() {
        super();
        this.state = {
            location: window.location.href.substr(23),
            filters: [],
            pub_filters: "",
            pub_category: "",
            queryString: "",
            url: window.location.href
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        const { name, value, type } = event.target;
        if (type === "checkbox") {
            if (this.state.filters.includes(value)) {
                this.state.filters = this.state.filters.filter(
                    f => f !== value
                );
            } else {
                this.state.filters.push(value);
            }
            this.setState(
                {
                    pub_filters: this.state.filters.join("%2C")
                },
                () => this.updateQueryString()
            );
        } else {
            this.setState({ [name]: value }, () => this.updateQueryString());
        }
    }

    updateQueryString() {
        let queryString = "";
        if (this.state.pub_category.length !== 0)
            queryString += `pub_category=${this.state.pub_category}&`;
        if (this.state.pub_filters.length !== 0)
            queryString += `pub_filters=${this.state.pub_filters}`;
        this.setState({
            queryString: queryString
        });
    }

    render() {
        return (
            <div className='container'>
                <h1 className='popup-title'>Book a Minder</h1>
                <h2 className='popup-subtitle'>Filters</h2>
                <div className='oogo-form'>
                    <div>
                        <input
                            type='checkbox'
                            id='nb'
                            name='pub_filters'
                            value='new_borns'
                            onChange={this.handleChange}
                        />
                        <label htmlFor='nb'>New Borns</label>
                    </div>

                    <div>
                        <input
                            type='checkbox'
                            id='ns'
                            name='pub_filters'
                            value='non_smoker'
                            onChange={this.handleChange}
                        />
                        <label htmlFor='ns'>None Smoker</label>
                    </div>

                    <div>
                        <input
                            type='checkbox'
                            id='fa'
                            name='pub_filters'
                            value='first_aid'
                            onChange={this.handleChange}
                        />
                        <label htmlFor='fa'>First Aid</label>
                    </div>

                    <div>
                        <input
                            type='checkbox'
                            id='ot'
                            name='pub_filters'
                            value='own_transport'
                            onChange={this.handleChange}
                        />
                        <label htmlFor='ot'>Own Transport</label>
                    </div>

                    <div>
                        <input
                            type='checkbox'
                            id='q'
                            name='pub_filters'
                            value='qualifications'
                            onChange={this.handleChange}
                        />
                        <label htmlFor='q'>Qualifications</label>
                    </div>

                    <div>
                        <input
                            type='checkbox'
                            id='ov'
                            name='pub_filters'
                            value='overnights'
                            onChange={this.handleChange}
                        />
                        <label htmlFor='ov'>Overnights</label>
                    </div>

                    <div>
                        <input
                            type='checkbox'
                            id='ev'
                            name='pub_filters'
                            value='evenings'
                            onChange={this.handleChange}
                        />
                        <label htmlFor='ev'>Evenings</label>
                    </div>

                    <div>
                        <input
                            type='checkbox'
                            id='mr'
                            name='pub_filters'
                            value='mornings'
                            onChange={this.handleChange}
                        />
                        <label htmlFor='mr'>Mornings</label>
                    </div>

                    <div>
                        <input
                            type='checkbox'
                            id='ad'
                            name='pub_filters'
                            value='all_day'
                            onChange={this.handleChange}
                        />
                        <label htmlFor='ad'>All Day</label>
                    </div>

                    <div className='select-container'>
                        <select
                            name='pub_category'
                            value={this.state.pub_category}
                            onChange={this.handleChange}
                        >
                            <option value=''>None</option>
                            <option value='babysitter'>Babysitter</option>
                            <option value='babysitter_overnight'>
                                Overnight Babysitter
                            </option>
                            <option value='nanny'>Nanny</option>
                            <option value='childminder'>Childminder</option>
                            <option value='day_care'>Daycare</option>
                            <option value='maternity_nurse'>
                                Maternity Nurse
                            </option>
                        </select>
                    </div>

                    <div className='button-container'>
                        <a
                            className='submit-button'
                            href={`https://oogo.herokuapp.com/s?${this.state.queryString}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Submit
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default OogoPopup;