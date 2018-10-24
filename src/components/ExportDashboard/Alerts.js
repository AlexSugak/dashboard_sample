import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Badge
} from 'reactstrap';

import PropTypes from 'prop-types';

import './styles.css';

class Alerts extends Component {
  state = {
    alerts: this.props.alerts,
    active: ['warning', 'danger', 'success']
  };

  toggle = flag => {
    const allAlerts = this.props.alerts;
    const hasFlag = this.state.active.includes(flag);
    let active = [...this.state.active];

    if (hasFlag) {
      active = active.filter(a => a !== flag);
    } else {
      active.push(flag);
    }

    const alerts = allAlerts.filter(a => active.includes(a.color));
    this.setState({ alerts, active });
  };

  renderHeaderBtns = () => {
    const { active } = this.state;

    return (
      <div className="header_btns">
        <Badge
          color={`warning ${
            !active.includes('warning') ? 'transparent' : null
          }`}
          className="float-right"
          onClick={() => this.toggle('warning')}
        >
          <i className="fa fa-check fa-lg" />
        </Badge>
        <Badge
          color={`danger ${!active.includes('danger') ? 'transparent' : null}`}
          className="float-right"
          onClick={() => this.toggle('danger')}
        >
          <i className="fa fa-check fa-lg" />
        </Badge>
        <Badge
          color={`success ${
            !active.includes('success') ? 'transparent' : null
          }`}
          className="float-right"
          onClick={() => this.toggle('success')}
        >
          <i className="fa fa-check fa-lg" />
        </Badge>
      </div>
    );
  };

  render() {
    return (
      <Card>
        <CardHeader className="header">
          <span className="header_title">Intelligence and Alerts</span>
          {this.renderHeaderBtns()}
        </CardHeader>
        <CardBody className="alerts">
          <ListGroup>
            {this.state.alerts.map(a => (
              <ListGroupItem key={a.text}>
                <Badge className="float-left" pill color={a.color}>
                  &nbsp;
                </Badge>
                <div className="text">
                  <span className="text-inner">{a.text}</span>
                  <a href="#" className="link">
                    {a.link}
                  </a>
                </div>

                <p className="time">{a.time}</p>
              </ListGroupItem>
            ))}
          </ListGroup>
          <div className="more_items_wrap">
            <a href="#" className="more_items">
              View earlier items
            </a>
          </div>
        </CardBody>
      </Card>
    );
  }
}

Alerts.propTypes = {
  alerts: PropTypes.array
};

export default Alerts;
