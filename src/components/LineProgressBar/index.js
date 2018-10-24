import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Filler = (props) => {
  return (<div className="filler" style={{width: `${props.percentage}%`, background: `${props.color}` }}/>  );
}

Filler.propTypes = {
  percentage: PropTypes.string,
  color: PropTypes.string
};

const LineProgressBar = (props) => {
  return (
      <div className="line-progress-bar-box">
        <div className="line-progress-bar-text">
          <div className="bold-text">{props.percentage}%</div><div>{props.name}</div>
        </div>
        <div className="line-progress-bar">
          <Filler percentage={props.percentage} color={props.color} />
        </div>
      </div>
  )
}

LineProgressBar.propTypes = {
  percentage: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
};

export default LineProgressBar;
