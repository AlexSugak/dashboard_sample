import React from 'react';
import { Line } from 'react-chartjs-2';
import LineProgressBar from '../LineProgressBar';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

import './styles.css';

const AnomaliesLineChart = ({ data, options }) => (
  <div>
    <Card>
      <CardHeader>
        Anomalies
      </CardHeader>
      <div className="period">
        Last 90 days
      </div>
      <CardBody className="line-chart">
        <div className="line-progress-bars">
          <LineProgressBar percentage="75" name="Cleared" color="rgba(52, 191, 162, 0.7)" />
          <LineProgressBar percentage="17" name="Pending" color="rgba(54, 162, 235, 0.7)" />
          <LineProgressBar percentage="8" name="Fraud" color="rgba(255, 99, 132, 0.7)" />
          <div className="hr"></div>
        </div>
        <div className="chart-wrapper line-chart">
          <Line data={data} options={options} height={97} />
        </div>
      </CardBody>
    </Card>
  </div>
);

AnomaliesLineChart.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object
};

export default AnomaliesLineChart;
