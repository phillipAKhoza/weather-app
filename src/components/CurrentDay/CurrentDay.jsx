import React from 'react';
import PropTypes from 'prop-types';
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';
//import styled from 'styled-components';

const CurrentDay = ({weekday,date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
        <div className={`${styles.cardInner} d-flex flex-md-column justify-content-between pt-md-3 pb-md-2 pl-md-0 pr-dm-0 pt-5 pr-5`}>
            <div className={styles.textInner}>
                <h2 className="d-flex align-items-baseline font-weight-lighter mb-1">
                    <img width="18" height="25" src={locationIcon} className="mr-1" alt="location pin icon" />
                    <span className="font-weight-bold"> {location}</span>
                </h2>
                <h4 className="font-weight-bold mb-1">{weekday}</h4>
                <p className="mb-0">{date}</p>
            </div>
            <div className={styles.textInner}>
                <img width="45" src={weatherIcon.replace("'", " ")} alt="icon" />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

CurrentDay.propTypes ={
    weekday: PropTypes.string.isRequired ,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    weatherDescription: PropTypes.string.isRequired,
};
export default CurrentDay;
