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