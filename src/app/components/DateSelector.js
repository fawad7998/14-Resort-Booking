import React, { Component } from 'react';

import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 

const  DateSelector = (props) => {
        let {
            checkinDate,
            checkoutDate,
            totalDays,
            onCheckinChange,
            onCheckoutChange,
            invalidRange
        } = props;
        return (
            <div>
                <h2>Date Range</h2>

                <DatePicker
                    selected={checkinDate}
                    onChange={onCheckinChange}
                />

                <DatePicker
                    selected={checkoutDate}
                    onChange={onCheckoutChange}
                />

                <span> {totalDays} nights </span>

                { invalidRange && <p>Invalid Date Range</p> }
            </div>
        );
    }


DateSelector.propTypes = {
    checkinDate: PropTypes.instanceOf(Date).isRequired,
    checkoutDate: PropTypes.instanceOf(Date).isRequired,
    onCheckinChange: PropTypes.func.isRequired,
    onCheckoutChange:PropTypes.func.isRequired,
    totalDays: PropTypes.number.isRequired
}

export default DateSelector;