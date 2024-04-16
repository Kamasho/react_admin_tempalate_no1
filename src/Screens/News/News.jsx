import React from 'react'
import CustomDatePicker from "../../components/DatePicker/DatePicker";

export default function News() {
  const handleDateChange = (date) => {
    console.log("Selected date:", date);
  };
  return (
    <div>
      <h1>Choose Date</h1>
      <CustomDatePicker
        selectedDate={new Date()}
        onChange={handleDateChange}
        placeholder="Select a date"
      />
    </div>
  );
}
