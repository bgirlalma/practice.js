
// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelcy';
// const message = 'Добро пожаловать';
// const isOpen = true;
// const shouldConfirm = false;

// console.log(totalPrice);

// const type = typeof isOpen;
// console.log(type);

// alert('jdfidjiod');


// Ввод пользователя
// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);


// Ввод колличества товара
// let quantity = prompt('Ведите колличество товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);


// Числа  Number ParseInt() and parseFloat()
// let elementWidth = '50.25px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight)


// toFixed
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log(salary);
// console.log(Number(salary.toFixed(2)));


// NaN
// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу'
// console.log(Number(quantity));
// console.log(Number(value));


// Math
// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
// console.log(base ** power);


// Степень, данные и т.п
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);


// Генерация чисел Math.round Math.random
// const max = 80;
// const min = 20;
    // const result = Math.round(Math.random() * (max - min) + min);
    // console.log(result);
// (Math.random() * (max - min) + min);

// length длина строки
    // const message = 'В этой строке 26 символов';
    // console.log(message.length);


// Конкатенация строк
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
    // const fullName = firstName + ' ' + lastName;
    // console.log(fullName);


// Гость  х у поселяется  в z номер q 
    // const room = 716;
    // const type = 'VIP';
    // const welcomeMsg = 'Гость ' + firstName + ' поселяется в ' + type + ' номер ' + room;

// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);


// строки template strings
    // const quantity = 5;
    // const orderMsg = `Вы заказываете ${quantity} холодильников`;
    // console.log(orderMsg);


// нормализация с методом toLowerCase()
    //    let brand = 'SamsUng';
    //    brand = brand.toLowerCase();
    //    console.log(brand);


//Поиск в строке includes()
    // const blacklistedWord1 = 'спам';
    // const blacklistedWord2 = 'распродажа';

    // const string1 = 'Привет, я принц Абдул, єто не спам, предлагаю тебе миллион';
    // const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите';
    // const string3 = ' Рекламная компания #fatlivesmatter';

    // console.log(string1.includes(blacklistedWord1));
    // console.log(string1.includes(blacklistedWord2));

    // console.log(string2.includes(blacklistedWord1));

    // const normalizedString2 = string2.toLowerCase();
    // console.log(normalizedString2.includes(blacklistedWord2));

    // console.log(string3.includes(blacklistedWord1));
    // console.log(string3.includes(blacklistedWord2));


// сравнение
    // console.log(15 < 3);

// преобразование
    // console.log(10 > 5);

// операторы равенства (== и ===) и неравенства (!= и !==). Всегда используем строгое равенство (===) и неравенство (!==)
    // const isEqual = 1 === true;
    // console.log(isEqual);

// && логический оператор 
    // console.log(5 && 6 && 7 );

// логическое или
    // console.log( false || 7 || 10 );

// логическое не
    // console.log(!5);


// множественное && ||
    // const x1 = 10;
    // const x2 = 30;
    // const number = 50;
    // console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);
    // console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x2);
    // const res1 = number > x1 && number < x2;
    // console.log(`Число ${number} попадает в отрезок от ${x1} lj ${x2}? `, res1);

    // const res2 = number < x1 || number > x2;
    // console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, res2);


//пишем чат
    // const isOnline = true;
    // const isFriend = true;
    // const isDnd = true;
    // const canOpenChat = isOnline && isFriend && !isDnd;
    // console.log('Можно открить чат? ', canOpenChat);


// подписка
    // const subscription = 'pro';
    // const canAccessContent = subscription === 'pro' || subscription ==='vip';
    // console.log('Есть доступ к контенту? ', canAccessContent);


// ветвление else 
    // const salary = 1500;
    // if (salary < 500) {
    //     console.log('Уровень 1');
    // } else if(salary > 500 & salary <= 1500) {
    //     console.log('Уровень 2');
    // } else if (salary > 1500 && salary < 3000) {
    //     console.log('Уровень 3');
    // } else {
    //     console.log('Уровень 4');
    // }


// тренарный оператор
    // const balance = 1000;

    // let message
    // if (balance >= 0) {
    //     message = 'Позитивный баланс';
    // } else {
    //     message = 'Негативный баланс';
    // }

    // const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
    // console.log(message);


// блочная область
    // То что вписано внутри, не видно снаружи. То что вписано снаружи, отображается в консоле


// кострукция Switch
    // const stars = 1;
    // let price;

    // if ( stars === 1) {
    //     price = 20;
    // } else if (stars === 2) {
    //     price = 30;
    // } else if ( stars === 3) {
    //     price = 50;
    // } else {
    //     console.log('Такого нет');
    // }


    // switch (stars) {
    // case 1:
    // price = 20;
    // break;

    // case 2:
    // price = 40;
    // break;

    // default:
    // console.log('Такого нет');
    // }


    // if ( stars === 1 || stars === 2) {
    //     price = 20;
    // } else if (stars === 3 || stars === 4) {
    //     price = 30;
    // } else if ( stars === 5) {
    //     price = 50;
    // } else {
    //     console.log("Такого нет");
    // }
    // console.log(stars);


    //  switch (stars) {
    // case 1:
    // case 2:
    // price = 20;
    // break;

    // case 3:
    // case 4:
    // price = 40;
    // break;

    // default:
    // console.log('Такого нет');
    // }


//  цыкл For
    // for (let i = 0; i < 5; i += 1) {
    //     console.log(i);
    // }


// Считаем зарплату
    // const minSalary = 500;
    // const maxSalary = 5000;
    // const employees = 4;
    // const totalSalary = 0;

    // for (let i = 1; i <= employees; i += 1) {
    //     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    //     console.log(`Зп работника номер ${i} - ${salary}`);

    //     totalSalary += salary;
    // }
    
    // console.log('totalSalary: ', totalSalary);

// Перебераем счетчик
    // const min = 6;
    // const max = 13;
    // let total = 0

    // for (let i = min; i <= max; i += 1) {
    //     console.log(i);

    //     if (i % 2 !== 0) {
    //         console.log(' Не чётное: ', i);
    //         continue;
    //     }
    //     console.log('чётное: ', i);
    //     total += i;
    // }

    // console.log('total: ',  total);


    // let balance = 10000;
    // const payment = 2000;

    // console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);

    // if ( payment <= balance) {
    //     console.log('ok');
    //     balance -= payment;
    //     console.log('На счету осталось ${balance}');
    // } else {
    //     console.log('На счету недостаточно средсв');
    // }

    // console.log('Операция завершена');