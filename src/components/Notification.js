// src/components/Notification.js
import { notification } from 'antd';

const Notification = (type, message, description) => {
    notification[type]({
        message: message,
        description: description,
        placement: 'topRight',  // Anda bisa mengatur posisi notifikasi
        duration: 4.5           // Durasi dalam detik sebelum notifikasi menghilang, set '0' untuk durasi tanpa batas
    });
};

export default Notification;
