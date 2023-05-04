// Функциональные выражения; Аргументы и параметры; Возвращение значения 
    // const add = function (x, y) {
    // console.log('Выполняеться функция add');
    // return x + y;
    // }

    // const r1 = add(5, 3);
    // console.log('r1: ', r1);

    // const r2 = add (10, 15);
    // console.log('r2: ', r2);

    //     // 
    // const fn = function (){
    //     console.log(1);
    //     console.log(2);
    //     console.log(3); 
    //     // "Где ты поставишь Return там и заканчивается  исполненение функции"
    //     return;
    // }
    // console.log(fn());

        // 
    // const fn = function (value){

    //     if (value < 50){
    //         return "Меньше чем 50";
    //     }

    //     return "Больше чем 50";
    // }
    // console.log('Результат функции: ', fn(10));
    // console.log('Результат функции: ', fn(10000));


// Стек вызовов; Stack trace и поиск ошибок

    // const fnA = function () {
    //     console.log('Выполняется функция А')

    //     fnB()
    // };

    // const fnB = function () {
    //     console.log('Выполняется функция B')

    //     fnC()
    // };

    // const fnC = function () {
    //     console.log('Выполняется функция С')
    // };

    // fnA();


// задача калькулятор цены
    // const calculeTotalPrice = function (items) {
    //     console.log('item внутри функции: ', items);
    //     let total = 0;

    //     for (const item of items) {
    //         total += item;
    //     }
    //     return total;
    // }

    // console.log(calculeTotalPrice([2, 5, 18]));
    // console.log(calculeTotalPrice([12, 9, 22]));
    // console.log(calculeTotalPrice([24, 35, 1]));
    // console.log(calculeTotalPrice([33, 13, 56]));


// Задача без возвращения
    // const logItems = function (items) {
    //     for (const item of items){
    //         console.log(item);
    //     }
    // };

    // logItems (['Mango', 'Kiwi', 'Avocado']);
    // logItems ([1, 2, 3, 4, 5]);
    // logItems (['клавиатура', 'наушники', 'часы']);


// поиск пароля
    // const logins = ['djnjsdd', 'jcnjkdsn', 'sjlcnsfj', 'kiwidap3'];

    // const findLogin = function (allLogins, loginToFind) {

    //     for (const login of allLogins) {
    //         if (login === loginToFind) {
    //            return =  `Пользователь ${loginToFind} не найден`;
    //         }
    //     }
    //     return `Пользователь ${loginToFind} найден`;
    // }

    // console.log(findLogin(logins, 'jjfnvjfv'));
    // console.log(findLogin(logins, 'kiwidap3'));
    // console.log(findLogin(logins, 'jjfnvjfv333'));
    // console.log(findLogin(logins, 'djnjsdd'));

                    // или
    // const findLogin = function (allLogins, loginToFind) {
    //     return allLogins.includes(loginToFind) 
    //     ? `Пользователь ${loginToFind} не найден`
    //     : `Пользователь ${loginToFind} найден`;
    // }

    // console.log(findLogin(logins, 'jjfnvjfv'));
    // console.log(findLogin(logins, 'kiwidap3'));
    // console.log(findLogin(logins, 'jjfnvjfv333'));
    // console.log(findLogin(logins, 'djnjsdd'));


//Самое маленькое число
    // const findSmallNumber = function(numbers) {
    //     let smallNumber = numbers[0];

    //     for (const number of numbers) {
    //         if (number < smallNumber) {
    //             smallNumber = number; 
    //         }
    //     }
    //     return smallNumber;
    // }

    // console.log(findSmallNumber([3, 9, 12, 22, 99, -2]));
    // console.log(findSmallNumber([31, 19, 13, 17, 5, 7]));
    // console.log(findSmallNumber([7, 90, 1, 4, 55, 43]));
    // console.log(findSmallNumber([6, 33, 14, 23, 77, 49]));



// изменение размера букв
    // const changeCase = function(string) {
    // const letters = string.split('');
    // let invertedString = ' ';

    // for (const letter of letters) {
    // const isInLowerCase = letter === letter.toLowerCase();

    //     invertedString += isInLowerCase
    //      ? letter.toUpperCase() 
    //      : letter.toLowerCase();
    // }

    // return invertedString;
    // }

    // console.log(changeCase('qwerTY'));
    // console.log(changeCase('ManGo'));
    // console.log(changeCase('aJakS'));


// Arguments
    // const fn = function() {
    //     console.log(arguments);

    //     const args = Array.from(arguments);
    //     console.log(args);
    // };

    // fn (1, 4, 6);
    // fn (12, 5, 44, 22, 13);
    // fn (3, 11, 9, 45, 77, 99, 34);
                // или
    // const fn = function(a, b, c,...args) {
    //     console.log(`${a} ${b} ${c}`);
    //     console.log(args);
    // };

    // fn ('Hello', 1, 4, 6);
    // fn ('What', 12, 5, 44, 22, 13);
    // fn ('All', 3, 11, 9, 45, 77, 99, 34);


    // const filterNumbers = function(array, ...args) {
    //     console.log('array: ', array);
    //     console.log('args: ', args);
    //     const uniqueElement = [];

    //     for (const elements of array) {
    //         if (args.includes(elements)) {
    //             uniqueElement.push(elements);

    //             console.log(`${elements} есть везде!`);
    //         }
    //     }

    //     return uniqueElement
    // }

    // console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 30, 5));
    // console.log(filterNumbers([10, 7, 18, 4, 9], 10, 15, 18, 30));
    // console.log(filterNumbers([11, 21, 34, 14, 25], 1, 25, 22, 3, 51));


   
     