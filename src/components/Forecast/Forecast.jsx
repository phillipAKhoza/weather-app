import React from 'react';
import PropTypes from 'prop-types';

import styles from './Forecast.module.css';
import CurrentDay from '../CurrentDay';
import CurrentDayDesc from '../CurrentDay/CurrentDayDesc';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

const Forecast = ({forecast}) => (
    <div className={`${styles.box} container`}>
        <div className="row">
            <div className="col-md-4 p-0">
                <div className={styles.card}>
                    <CurrentDay {...forecast.currDate}/>
                </div>
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-betwee">
                <CurrentDayDesc forecast={forecast.currDateDetails} />
                <UpcomingDaysForecast days={forecast.upcomingForecast} />
            </div>
        </div>
    </div>
);

Forecast.propTypes ={
    forecast: PropTypes.shape(
    {
        currDate: PropTypes.object, 
        currDateDetails: PropTypes.array, 
        upcomingForecast: PropTypes.array,
    }
    ),
}

export default Forecast;
