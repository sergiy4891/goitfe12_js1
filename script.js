'use strict';

const adminLogin = prompt('Please enter your login');

if (adminLogin === null) {
    alert('Отменено пользователем!');
} else if (adminLogin !== 'admin') {
    alert('Доступ запрещен, неверный логин!');
} else if (adminLogin === 'admin') {
    
    const adminPassword = prompt('Please enter your password');
    if (adminPassword === null) {
        alert('Отменено пользователем!');
    } else if (adminPassword !== 'm4ngo1zh4ackz0r') {
        alert('Доступ запрещен, неверный пароль!');
    } else if (adminPassword === 'm4ngo1zh4ackz0r') {
        alert('Добро пожаловать!');
    }
}






