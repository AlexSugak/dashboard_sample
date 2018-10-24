import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

const FraudFactorsFrequency = ({ data, options }) => (
  <div>
    <Card>
      <CardHeader>
        Fraud Factors Frequency
      </CardHeader>
      <div className="period">
        Last 90 days
      </div>
      <CardBody>
        <Bar data={data} options={options} height={150} />
      </CardBody>
    </Card>
  </div>
);

FraudFactorsFrequency.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object
};

export default FraudFactorsFrequency;
