// src/components/Notification.js
import { message } from 'antd';

const Notification = (type, response, defaultContent) => {
    const content = response?.data?.message || defaultContent;
    message[type](content);
};

export default Notification;
