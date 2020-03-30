import React from "react";
import Popup from "reactjs-popup";
import OogoPopup from "../../components/oogo-popup/OogoPopup";
import "./BookingPage.css";

const BookingPage = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='container'>
            <h1 className='booking-title'>My booking</h1>
            <form className='booking-form' onSubmit={handleSubmit}>
                <div className='input-title'>
                    <label>Title</label>
                    <br />
                    <input type='text' />
                </div>
                <div className='input-firstname'>
                    <label>First name</label>
                    <br />
                    <input type='text' />
                </div>
                <div className='input-lastname'>
                    <label>Last name</label>
                    <br />
                    <input type='text' />
                </div>
                <div className='input-phone'>
                    <label>Phone number</label>
                    <br />
                    <input type='text' />
                </div>
                <div className='input-email'>
                    <label>Email address</label>
                    <br />
                    <input type='text' />
                </div>
                <div className='input-address'>
                    <label>Address</label>
                    <br />
                    <input type='text' />
                </div>
                <div className='input-submit'>
                    <Popup
                        trigger={<button>Book a Minder</button>}
                        modal
                        closeOnDocumentClick
                    >
                        <OogoPopup />
                    </Popup>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default BookingPage;
