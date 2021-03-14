import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NotificationList from '../src/Notification/NotificationList';
import useNotification from '../src/Notification/useNotification';
import NotificationInterface from '../src/Notification/NotificationInterface';
import consts from '../src/Notification/consts';

const Messages = () => {
  const { addNotification } = useNotification();
  const handleClick = () => {
    const message: NotificationInterface = {
      id: Math.random().toString(36).substring(7),
      message: 'test message',
      type: consts.message.danger,
      delete: false,
    };
    addNotification(message);
  };
  return (
    <button type="button" onClick={handleClick}>
      show message
    </button>
  );
};

const App = () => {
  return (
    <NotificationList>
      <Messages />
    </NotificationList>
  );
};

describe('check notification', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('check show notification', async () => {
    const { getByText, findByText } = render(<App />);
    const button = getByText(/show message/i);
    fireEvent.click(button);
    const notification = await findByText(/test message/i);
    expect(notification).toBeInTheDocument();
  });

  it('check delete notification by click button', async () => {
    const { getByText, findByTestId } = render(<App />);
    const button = getByText(/show message/i);
    fireEvent.click(button);
    const notificationCloseButton = await findByTestId('notification-close');
    fireEvent.click(notificationCloseButton);
    expect(notificationCloseButton).not.toBeInTheDocument();
  });

  it('check delete message after five seconds', async () => {
    const { getByText, findByText } = render(<App />);
    const button = getByText(/show message/i);
    fireEvent.click(button);
    const notification = await findByText(/test message/i);
    setTimeout(() => {
      expect(notification).not.toBeInTheDocument();
    }, 5000);
  }, 5000);
});
