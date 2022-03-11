import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';
import CurrentDay from '../CurrentDay';
import CurrentDayDesc from '../CurrentDay/CurrentDayDesc';
import CurrentDayDescItem from '../CurrentDay/CurrentDayDescItem';

const Forecast = (forecast) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currDate}/>
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between"></Col>
        </Row>
    </Container>
);

Forecast.propTypes ={
    forecast: PropTypes.shape(
    {
        currDate: PropTypes.array, 
        currDateDetails: PropTypes.array, 
        upcomingForecast: PropTypes.array,
    }
    ),
}

export default Forecast;
