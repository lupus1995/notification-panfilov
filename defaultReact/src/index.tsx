import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { NotificationList } from 'notification-panfilov';
import App from './App/App';

render(
  <NotificationList>
    <App />
  </NotificationList>,
  document.getElementById('root'),
);
