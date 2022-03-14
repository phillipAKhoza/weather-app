import React from 'react';
import PropTypes from 'prop-types';

import styles from './Error.module.css';

const Error = ({ message }) => (
    <div className={`${styles.error} alert position-absolute`} role="alert">
        {message}
        <br/>
        <a href="https://www.metaweather.com/map/" target="_blank" rel="noreferrer"> MAP</a>
    </div>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;
