import React, { FC, memo, MutableRefObject, useEffect, useRef } from 'react';
import './style.scss';
import classNames from 'classnames';
import consts from './consts';
import NotificationInterface from './NotificationInterface';
import useNotification from './useNotification';
import icons from './icons';

const Notification: FC<{ message: NotificationInterface }> = memo(
  ({ message }) => {
    const ref: MutableRefObject<HTMLButtonElement | null> = useRef(null);
    const { deleteNotification } = useNotification();
    const handleClick = () => deleteNotification(message.id);

    useEffect(() => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.click();
        }
      }, 5000);
    }, []);

    return (
      <div
        className={classNames('wrapperNotification', {
          wrapperNotificationDanger: message.type === consts.message.danger,
          wrapperNotificationSuccess: message.type === consts.message.success,
        })}
      >
        <span>{message.message}</span>
        <button
          data-testid="notification-close"
          ref={ref}
          onClick={handleClick}
          className="closeNotification"
          type="button"
        >
          {icons.closeIcon}
        </button>
      </div>
    );
  },
);

export default Notification;
