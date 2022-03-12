import React from 'react';
import PropTypes from 'prop-types';

import CurrentDayDescItem from '../CurrentDayDescItem';

const CurrentDayDesc = ({forecast}) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {forecast.map(item => (
                <CurrentDayDescItem {...item} key={item.name} />
            ))}
        </div>
    </div>
);

CurrentDayDesc.propTypes ={
    forecast: PropTypes.array,
}
export default CurrentDayDesc;
