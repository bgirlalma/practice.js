// Отложенный вызов: Геопозиция
    // const onGetPositionSuccess = function (position) {
    //     console.log(`Это вызов oneGetPositionSuccess`);
    //     console.log(position);
    // };

    // const oneGetPositionError = function (error) {
    //     console.log(error);
    // };

    // window.navigator.geolocation.getCurrentPosition(
    //     onGetPositionSuccess,
    //     oneGetPositionError,
    // );

    
// Отложенный вызов: Регистрация события
    // const buttonRef = document.querySelector('.js.button');

    // const handleBtnClick = function () {
    //     console.log('Клик по кнопке' + Date.now());
    // };

    // buttonRef.addEventListener('click', handleBtnClick);


// Функция DoMath(a, b, c, callback)
    // const doMath = function (a, b, callback) {
    //     const result = callback(a, b);
    //     console.log(result);
    // };

    // const add = function (x, y) {
    //     return x + y;
    // };

    // const sub = function (x, y) {
    //     return x - y;
    // };

    // doMath(2, 3, add);
    // doMath(10, 8 ,sub);


// Отложенный вызов: Интервалы
    // const callback = function () {
    //     console.log('Через 2 секунды внутри колбэка в таймауте');
    // };

    // console.log('В коде перед таймаутом');

    // setTimeout(callback, 2000);

    // console.log('В коде после таймаута');


// Отложенный вызов: //https-запрос
    // const onRequestSuccess = function (respons) {
    //     console.log('Вызов функции после успешного завершения бекэнда')
    //     console.log(respons);
    // };

    // fetch('https://pokeapi.co/api/v2/pokemon')
    // .then(res => res.json())
    // .then(onRequestSuccess);



// Фильтр
    // const filter = function (array, test) {
    //     const filterArray = [];

    //     for (const el of array) {
    //         console.log(el);

    //         const passed = test(el);

    //         if(passed) {
    //             filterArray.push(el);
    //         }
    //     }

    //     return filterArray;
    // };

        // Надо передать функцию;
        // Функция получает элемент массива ;
        // Если эелемент массива удовлитворяет условия то функция вернёт true;
        // Если эелемент массива Не удовлитворяет условия то функция вернёт false;

    // const callback1 = function (value) {
    //     return value >=3;
    // };

    // const r1 = filter([1, 2, 3, 4, 5], callback1);
    // console.log(r1);

    // const callback2 = function (value) {
    //     return value <= 4;
    // };

    // const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
    // console.log(r2);


        // fruits
    // const fruits = [
    //     {name: 'apples', quantity: 200, isFresh: true},
    //     {name: 'grapes', quantity: 300, isFresh: false},
    //     {name: 'bananas', quantity: 150, isFresh: true},
    //     {name: 'ananas', quantity: 100, isFresh: false},
    // ];

    // const getFruitsWithQuantity = function (fruit) {
    //     return fruit.quantity >= 120;
    // };

    // const r3 = filter(fruits, getFruitsWithQuantity);
    // console.log(r3);


// Функция может возвращать результаттом работы другую функцию
    // const fnA = function (parameter) {
    //     const innerVariable = 'значение внутреней переменной FnA';

    //     const innerFunction = function () {
    //         console.log(parameter);
    //         console.log(innerVariable);
    //         console.log('это вызов innerFunction');
    //     };

    //     return innerFunction;
    // };

    // const fnB = fnA(555);
    // fnB();
    // console.log(fnB);


// Имя шефа и блюдо
    const makeDish = function (sheffname, dish) {
        console.log(`${sheffname} готовит ${dish}`);
    };

    // makeDish('Манго', 'пирожок');
    // makeDish('Манго', 'десерт');
    // makeDish('Манго', 'чай');

    // makeDish('Poly', 'борщ');
    // makeDish('Poly', 'кашу');
    // makeDish('Poly', 'кофе');

    // const makeSheff = function (name) {
    //     const makeDish = function (dish) {
    //         console.log(`${name} готовит ${dish}`);
    //     };

    //     return makeDish;
    // };

    // const Mango = makeSheff('Mango');
    // const Poly = makeSheff('Poly');

    // Mango('борщ');
    // Mango('тост с сыром');
    // Poly('чай');


// Округлятор
    // const rounder = function (places) {
    //     return function(number) {
    //         return Number(number.toFixed(places));
    //     };
    // };

    // const rounder2 = rounder(2);
    // const rounder3 = rounder(3);

    // console.log(rounder2(3.5895));
    // console.log(rounder3(5.95474));
    // console.log(rounder2(8.9463));
    // console.log(rounder3(1.387474));
    // console.log(rounder2(2.03836));
    // console.log(rounder3(7.276373));


// Приватные данные и функции
    // const salaryManadgerFactory = function(employeeName, baseSalary){
    //     let salary = baseSalary;

    //     const changeBye = function (amount) {
    //         salary += amount;
    //     };

    //     return {
    //         raise(amount) {
    //             changeBye(amount);
    //         },
    //         lower(amount) {
    //             changeBye(amount);
    //         },
    //         current() {
    //             return `Текущая зарплата ${employeeName} - ${salary}`;
    //         },
    //     };
    // };


    // 
    // const myLibFactory = function () {
    //     let value = 0;

    //     const add = function (num) {
    //         value += num;
    //     };

    //     return {add: add,

    //     getValue () {
    //         return value;
    //     },
    // };

    // };

    // const myLib = myLibFactory ();
    // console.dir(myLib.getValue);
    // console.log(myLib);
    // console.log(myLib.getValue());
    // myLib.add(10);
    //  console.log(myLib.getValue());


// Стрелочные функции
    // const add = function (a, b, c) {
    //     console.log(arguments)
    //     return a + b + c;
    // };

    // const addArrow = (a, b, c) => {
    //     return a + b + c;
    // };

    // console.log(add(5, 10, 15));
    // console.log(addArrow(7, 33, 12));


    // 

    // const fnA  = function() {
    // return {
    //     a: 5,
    // };
    // };
    // console.log(fnA());

    // const arrowFnA = () => ({ arrowA: 5});
    // console.log(arrowFnA());
