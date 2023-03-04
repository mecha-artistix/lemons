import React, { useState } from "react";

function Booking() {
  const [bookingData, setBookingData] = useState({
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
    console.log(bookingData);
  };

  return (
    <div>
      <h4>Booking form</h4>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="resDate"
          value={bookingData.resDate}
          onChange={handleChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="resTime"
          value={bookingData.resTime}
          onChange={handleChange}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={bookingData.guests}
          onChange={handleChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={bookingData.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default Booking;
