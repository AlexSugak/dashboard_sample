import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Table,
  Input,
  Button,
} from 'reactstrap';

import './styles.css';

export class CheckboxTable extends Component {
  state = {
    checkedItems: []
  }
  toggleCheckItem = index => {
    if (this.state.checkedItems.some(i => i === index)) {
      this.setState({ checkedItems: this.state.checkedItems.filter(i => i !== index) });
    } else {
      this.setState({ checkedItems: [...this.state.checkedItems, index] });
    }
  }
  checkAll = () => {
    if (this.state.checkedItems.length === this.props.data.length) {
      this.setState({ checkedItems: [] });
    } else {
      this.setState({ checkedItems: Array.from(new Array(this.props.data.length), (_, index) => index) });
    }
  }
  render() {
    const { headers, data } = this.props;
    const { checkedItems } = this.state;

    return (
      <Table responsive striped hover >
        <thead>
          <tr>
            <th>
              <Input
                type="checkbox"
                onChange={() => this.checkAll()} />
            </th>
            {headers.map((t, i) => <th key={i}>{t}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (<tr key={i}>
            <td>
              <Input
                type="checkbox"
                checked={checkedItems.some(it => it === i)}
                onChange={() => this.toggleCheckItem(i)} />
            </td>
            <td>{d.caseId}</td>
            <td>{d.ip}</td>
            <td>{d.transactionDate}</td>
            <td><Badge color={d.statusColor}>{d.status}</Badge></td>
            <td>
              <div className="action-buttons">
                <Button color="ghost-dark" size="sm">
                  <i className="fa fa-ellipsis-h fa-lg mt-4"></i>
                </Button>
                <Button color="ghost-dark" size="sm">
                  <i className="fa fa-edit fa-lg mt-4"></i>
                </Button>
              </div>
            </td>
          </tr>))}
        </tbody>
      </Table>
    );
  }
}

CheckboxTable.propTypes = {
  data: PropTypes.array,
  headers: PropTypes.array,
}
