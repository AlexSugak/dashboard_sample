import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { Card, Col, Row, CardBody, CardHeader } from 'reactstrap';

import './styles.css';

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const FraudulentUseCases = ({ data, totalValue = 1237650 }) => (
  <Card>
    <CardHeader>Fraud by Use Cases</CardHeader>
    <Row style={{ verticalAlign: 'baseline' }}>
      <Col lg={6} md={6} sm={12}>
        <div className="period">Last 90 days</div>
      </Col>
      <Col lg={6} md={6} sm={12}>
        <div className="total-number">${numberWithCommas(totalValue)}</div>
      </Col>
    </Row>
    <CardBody>
      <div className="chart-wrapper">
        <Doughnut
          data={data}
          options={{
            cutoutPercentage: 78,
            legend: {
              position: 'right',
              align: 'center',
              labels: {
                padding: 15
              }
            }
          }}
        />
      </div>
      <div />
    </CardBody>
  </Card>
);

FraudulentUseCases.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  totalValue: PropTypes.number
};

export default FraudulentUseCases;
