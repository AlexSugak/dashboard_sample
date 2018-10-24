import React from 'react';
import {
  Card,
  CardHeader,
  Button
} from 'reactstrap';

import './styles.css';

const ExportDashboard = () => (
  <Card className="export-dashboard">
    <CardHeader>
      <Button color="ghost-dark" size="sm" block>
        <i className="fa fa-clipboard fa-lg mt-1"></i>
          <span className="bold-text"> EXPORT DASHBOARD</span>
      </Button>
    </CardHeader>
  </Card>
);

export default ExportDashboard;
