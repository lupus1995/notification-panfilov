## Description

React component that processes a form, its events and elements.

## Installation

```bash
npm i --save form-panfilov
```

## Testing

For testing, a bunch of jest and the testing library is used. To run the tests, type the following command

```bash
npm test
```

or command to restart the tests after they are changed

```bash
npm test:watch
```

## Example and development

In the rollup folder in the terminal, enter the following command to create a link to the local npm package.

```bash
npm link
```

In the same folder, you need to create a link to react and react-dom.

Link to react

```bash
npm link ..\defaultReact\node_modules\react
```

Link to react-dom

```bash
npm link ..\defaultReact\node_modules\react-dom
```

After that, go to the defaultReact folder and run the project with the command

```bash
npm link start
```

## Using

Key component of the notification. Wrappers for notification message.

```bash
<NotificationList><App/></NotificationList>
```

Hooks for create message.

```bash
const {addNotification, deleteNotification, notifications} = useNotification
```

addNotification - function for create notification. 
deleteNotification - function for delete notification.
notifications - list notifications.

NotificationInterface - interface notification.

constsNotification - consts for set type notification.
