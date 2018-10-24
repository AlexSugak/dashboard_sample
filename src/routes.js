import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Customers from './pages/Customers';
import Devices from './pages/Devices';
import DefaultLayout from './pages/DefaultLayout';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: DefaultLayout
  },
  {
    path: '/dashboard_sample',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/devices',
    name: 'Devices',
    component: Devices
  }
];

export default routes;
