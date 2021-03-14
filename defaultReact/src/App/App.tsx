import React from 'react';
import './style.scss';
import {
  NotificationInterface,
  useNotification,
  constsNotification,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from 'notification-panfilov';

const App = (): JSX.Element => {
  const { addNotification } = useNotification();
  const handleClick = () => {
    const message: NotificationInterface = {
      message: 'test message',
      id: Math.random().toString(36).substring(7),
      type: constsNotification.message.danger,
      delete: false,
    };
    addNotification(message);
  };
  return (
    <button type="button" onClick={handleClick}>
      show notification
    </button>
  );
};

export default App;
