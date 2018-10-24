import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

import FraudFactorsFrequency from '../../components/FraudFactorsFrequency';
import AnomaliesLineChart from '../../components/AnomaliesLineChart';
import FraudulentUseCases from '../../components/FraudulentUseCases';
import { Alerts, ExportDashboard } from '../../components/ExportDashboard';
import { CheckboxTable } from '../../components/Table';
import Pagination from '../../components/Pagination';
import log from '../../logger';

import './styles.css';

const cases = [
  {
    caseId: '54473-251',
    ip: '201.100.24.10',
    transactionDate: '11/10/2018',
    status: 'Failed',
    statusColor: 'secondary'
  },
  {
    caseId: '54473-251',
    ip: '201.100.24.10',
    transactionDate: '11/10/2018',
    status: 'Done',
    statusColor: 'success'
  },
  {
    caseId: '54473-251',
    ip: '201.100.24.10',
    transactionDate: '11/10/2018',
    status: 'In progress',
    statusColor: 'primary'
  },
  {
    caseId: '54473-251',
    ip: '201.100.24.10',
    transactionDate: '11/10/2018',
    status: 'Medium',
    statusColor: 'warning'
  },
  {
    caseId: '54473-251',
    ip: '201.100.24.10',
    transactionDate: '11/10/2018',
    status: 'High',
    statusColor: 'danger'
  },
  {
    caseId: '54473-251',
    ip: '201.100.24.10',
    transactionDate: '11/10/2018',
    status: 'High',
    statusColor: 'danger'
  }
];

const anomaliesChartData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October'
  ],
  datasets: [
    {
      label: 'Fraud',
      fill: true,
      lineTension: 0,
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
      borderColor: 'rgba(255, 99, 132, 0.7)',
      pointRadius: 0,
      data: [10, 20, 33, 0, 15, 2, 5, 15, 10, 20]
    },
    {
      label: 'Pending',
      fill: true,
      lineTension: 0,
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
      borderColor: 'rgba(54, 162, 235, 0.7)',
      pointRadius: 0,
      data: [0, 12, 76, 35, 25, 30, 5, 10, 15, 0]
    },
    {
      label: 'Cleared',
      fill: true,
      lineTension: 0,
      backgroundColor: 'rgba(52, 191, 162, 0.7)',
      borderColor: 'rgba(52, 191, 162, 0.7)',
      pointRadius: 0,
      data: [190, 200, 196, 150, 175, 180, 160, 178, 176, 200]
    }
  ]
};

const anomaliesChartOptions = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const bar = {
  labels: [
    ['User', 'Data'],
    ['User', 'Behavior'],
    ['User', 'Biomarkers'],
    ['Device', 'attributes'],
    ['Virtual', 'device'],
    ['Fraudulent', 'transaction']
  ],
  datasets: [
    {
      label: 'last 90 days',
      scaleLabel: 40,
      backgroundColor: [
        '#00C4E4',
        '#01C5DD',
        '#F4516C',
        '#36A3F6',
        '#34BFA2',
        '#FFB722'
      ],
      borderColor: '#01C5DD',
      borderWidth: 1,
      data: [43, 65, 54, 80, 81, 52]
    }
  ]
};

const options = {
  legend: {
    display: false
  },
  elements: {},
  axisX: {
    labelFontColor: 'red'
  },
  scales: {
    xAxes: [
      {
        ticks: {
          fontSize: 8
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }
    ],
    yAxes: [
      {
        stacked: true
      }
    ]
  }
};

const alerts = [
  {
    text: '53 New registrations in last hour from IP ',
    link: '10.103.14.00',
    time: 'Just now',
    color: 'warning'
  },
  {
    text: 'High Risk for takeover account',
    link: '572857',
    time: '14 mins',
    color: 'danger'
  },
  {
    text: 'Extencive re-installations on device',
    link: '7bfa34d',
    time: '20 mins',
    color: 'warning'
  },
  {
    text: 'High volume of transactions from account',
    link: '234232',
    time: '1 hour',
    color: 'warning'
  },
  {
    text: 'Anomalies weekly rate decreased to ',
    link: '0.8%',
    time: 'Sunday',
    color: 'success'
  },
  {
    text: 'Paygilant engine was upgrated for new',
    link: 'capabilities',
    time: '20 mins',
    color: 'success'
  }
];

const casesTableHeaders = [
  'Case ID',
  'IP',
  'Transaction Date',
  'Status',
  'Actions'
];

const fraudulentUseCases = {
  labels: [
    'Fraudulent Accounts',
    'Account Takeover',
    'Fraudulent transactions'
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

const Cases = ({ cases }) => (
  <Card>
    <CardHeader>Cases</CardHeader>
    <CardBody>
      <CheckboxTable data={cases} headers={casesTableHeaders} />
      <Pagination />
    </CardBody>
  </Card>
);

Cases.propTypes = {
  cases: PropTypes.array
};

class Dashboard extends Component {
  render() {
    log.info('render', 'Dashboard');
    return (
      <div className="App">
        <Row className="min-height">
          <Col lg={4} md={4}>
            <AnomaliesLineChart
              data={anomaliesChartData}
              options={anomaliesChartOptions}
            />
          </Col>
          <Col lg={4} md={4}>
            <FraudulentUseCases data={fraudulentUseCases} />
          </Col>
          <Col lg={4} md={4}>
            <FraudFactorsFrequency data={bar} options={options} />
          </Col>
        </Row>
        <Row className="max-height">
          <Col lg={8} md={8}>
            <Cases cases={cases} />
          </Col>
          <Col lg={4} md={4}>
            <Alerts alerts={alerts} />
            {/* <ExportDashboard /> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
