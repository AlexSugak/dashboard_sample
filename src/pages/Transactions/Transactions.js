import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  Col,
  Row,
  Table,
  InputGroup,
  InputGroupAddon,
  Input,
  Badge
} from 'reactstrap';
import Pagination from '../../components/Pagination';
import './styles.css';
import log from '../../logger';

import moment from 'moment';

const randomDate = () =>
  moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000)));

const randomRiskLevel = () =>
  Math.random() > 0.4 ? 'High' : Math.random() > 0.6 ? 'Medium' : 'Low';

const randomType = () => (Math.random() > 0.5 ? 'Login' : 'Payment');

const randomTransaction = () => ({
  id: Math.round(Math.random() * 100000000),
  deviceId: Math.round(Math.random() * 100000),
  date: randomDate(),
  riskLevel: randomRiskLevel(),
  type: randomType()
});

const generateRandomTransactions = n => {
  const result = [];
  for (let i = 0; i < n; i++) result.push(randomTransaction());
  return result;
};

const stubTransactionData = generateRandomTransactions(15);

const filterById = searchQuery => transaction => {
  return (
    searchQuery === '' || transaction.id.toString().indexOf(searchQuery) > -1
  );
};

const TransactionRow = ({ id, deviceId, date, type, riskLevel }) => (
  <tr>
    <td>{id}</td>
    <td>{deviceId}</td>
    <td>{date.format('hh:mm MMM DD, YYYY')}</td>
    <td>{type}</td>
    <td>
      <Badge
        color={
          riskLevel === 'High'
            ? 'danger'
            : riskLevel === 'Low'
              ? 'success'
              : 'warning'
        }
      >
        {riskLevel}
      </Badge>
    </td>
  </tr>
);

TransactionRow.propTypes = {
  id: PropTypes.any.isRequired,
  deviceId: PropTypes.any,
  date: PropTypes.any.isRequired,
  type: PropTypes.any,
  riskLevel: PropTypes.any
};

class Transactions extends Component {
  state = {
    idSearchQuery: ''
  };

  render() {
    log.info('render', 'Transactions')
    const data = stubTransactionData;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col style={{ marginBottom: 12 }} md="12">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <div className="btn btn-primary">
                  <i className="fa fa-search" /> Search
                </div>
              </InputGroupAddon>
              <Input
                value={this.state.idSearchQuery}
                onChange={e => this.setState({ idSearchQuery: e.target.value })}
                type="text"
                placeholder="Transaction ID"
              />
            </InputGroup>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Device ID</th>
                      <th>Transaction date</th>
                      <th>Type</th>
                      <th>Risk level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      .filter(filterById(this.state.idSearchQuery))
                      .map(tr => (
                        <TransactionRow
                          key={tr.id}
                          id={tr.id}
                          deviceId={tr.deviceId}
                          date={tr.date}
                          riskLevel={tr.riskLevel}
                          type={tr.type}
                        />
                      ))}
                  </tbody>
                </Table>
                <Pagination />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Transactions;
