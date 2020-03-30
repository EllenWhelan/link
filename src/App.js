import React from "react";
import TopNav from "./components/topnav/TopNav";
import Footer from "./components/footer/Footer";
import BookingPage from "./containers/booking/BookingPage";

import "./App.css";

const App = () => {
    return (
        <div>
            <TopNav />
            <BookingPage />
            <Footer />
        </div>
    );
};

export default App;
