import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function ImportDatePicker() {
  const [selectedDate, setSelectDate] = useState(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
        selected = {selectedDate}
        onChange={date => setSelectDate(date)}
        dateFormat='dd/MM/yyyy'
      />
    </LocalizationProvider>
  );
}