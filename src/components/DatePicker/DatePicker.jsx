import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css"
import { BsCalendarDate } from "react-icons/bs";

export default function CustomDatePicker({ selectedDate, onChange, placeholder }) {
   const [startDate, setStartDate] = useState(selectedDate || new Date());

   const handleChange = (date) => {
     setStartDate(date);
     if (onChange) {
       onChange(date);
     }
   };

   return (
       <DatePicker
           className="date"
       selected={startDate}
       onChange={handleChange}
       placeholderText={placeholder}
           dateFormat="MMMM d, yyyy"
     />
   );
}
