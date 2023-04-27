// Методы массива
    // const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
    // console.table(friends);

    // friends[1] = 'madagaskar';
    // friends[3] = 'reneme';
    // console.table(friends);


// Передача по значению
    // let a = 10;
    // let b = a;
    // console.log(a,b);

    // a = 20;
    // console.log(a,b);


// Передача по ссылке
    // const a = [1, 2, 3];
    // const b = a;

    // console.log('a', a);
    // console.log('b', b);

    // a[0] = 500;
    // console.log('a', a);
    // console.log('b', b);

    // console.log(a === b); одна ссылка

    // console.log([1, 2, 3] === [1, 2, 3]);  разные ссылки


// Цикл For
    // const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
    // console.table(friends);

    // (если без length, то lastIndex = friends.length -1)
    // for (let i = 0; i < friends.length; i += 1) {
    //     friends[i] += '-1';
    // }
    // console.table(friends);


// For off
    // for(const friend of friends){
    //     console.log(friend);
    // }
    

// Алгоритмы
    // const card = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

        // сделать переменную total до цикла
    // let total = 0;

       // перебрать массив
    // for (let i = 0;  i < card.length; i += 1) {

      // каждый элемент приплюсовать к total
    //     total += card[i]; }

    // console.log('Total; ', total);

        // или
    // for (const value of card) {
    //     total += value; }
    // console.log('Total: ', total);

        // добавить такс
    // for (let i = 0; i < card.length; i += 1) {
    //     card[i] = Math.round(card[i] * 1.1);
    // }
    // console.log(card);

// Задача: Считаем сумму всех чётных  чисел в массиве.
    // const numbers = [1, 5, 8, 12, 9, 4, 15, 27, 30, 18, 11];
    // let total = 0;

    //     // перебрать массив 
    // for (let i = 0; i < numbers.length; i += 1) {
    //     const number = numbers[i];
    //     console.log(number);
    
    //     // на каждой итерации проверять элемент на чётность
    // if (number % 2 === 0) {
    //     console.log('Чётное!!');
    //     // если чётное плюсуем к total
    //     total += number;
    // }
    // }

    // console.log('Total: ', total);
        // или
    // for (const number of numbers) {
    //     console.log(number);

    //     if (number % 2 === 0) {
    //     console.log('Чётное!!');
    //     // если чётное плюсуем к total
    //     // total += number;
    // }
    // }

    
// поиск логина
    // const logins = ['jfgjfnvjfnv', 'dncjkn4jksnac', 'poly1scute', 'tratata12'];
    // const loginToFind = 'poly1scute';
    // let message = '';

    // for (let i = 0; i < logins.length; i += 1) {
    //     const login = logins[i];
    //     console.log('Login: ', login);
    //     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

    //     if (login === loginToFind) {
    //         console.log('Равны');
    //         message = `Пользователь ${loginToFind} найден`;
    //         break;
    //     }

    // }
     // console.log(message);

            // или декларативный вход(абстракция)
    // const message = logins.includes(loginToFind)
    // ? `Пользователь ${loginToFind} найден`
    // : `Пользователь ${loginToFind} не найден`;
    //  console.log(message);


// выбрать самое маленько число
    // const numbers = [10, 99, 17, 56, 23, 7, 13, 88, 3, 67];
    // let smallNumber = numbers[0];

    // for (const number of numbers) {
    //     if (number < smallNumber){
    //         smallNumber = number;
    //     }
    // }

    // console.log('smallNumber: ', smallNumber);


// slice and join
    // const friends = ["Mango", "Berry", "Blackberry", "Raspberry"];
    // let string = '';
    // for (const friend of friends) {
    //     string += friend + ', ';
    // }

    // string = string.slice(0, string.length -1);
        // или
    // const string = friends.join(', ');
    // console.log(string);


//изменение размера шрифта
    // const string = 'JavaScript';
    // const letters = string.split('');
    // let invertedString = '';
    // console.log(letters);

    // for (const letter of letters) {
    //     console.log(letters);
    
    // if (letter === letter.toLowerCase()) {
    //     console.log( 'Эта буква в нижнем регистре -', letter);

    //     invertedString += letter.toUpperCase();
    // } else {
    //     console.log('Эта буква в верхнем регистре -', letter);
    //     invertedString += letter.toLowerCase();
    // }

    // const isEqual = letter === letter.toLowerCase();
    // invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
    // }
    // console.log(invertedString);


// задача на slug и вызовы
    // const title = 'Top 10 benefits of React framework';
            // 1 var
    // const normalazedTitle = title.toLowerCase();
    // const words = normalazedTitle.split(' ');
    // const slug = words.join('-');
    // console.log(slug);
            //  2 var
    // const slug1 = title.toLowerCase().split(' ').join('-');
    // console.log(slug1);


// Concat and for of
    // const array1 = [5, 7, 10, 3];
    // const array2 = [9, 2, 8, 4];
    // let total = 0;

    // const numbers = array1.concat(array2);
    // for (const number of numbers) {
    //     total += number;
    // }

    // console.log(total);


// удаление по индексу indexOff
    // const cards = [
    //     "Карточка-1",
    //     "Карточка-2",
    //     "Карточка-3",
    //     "Карточка-4",
    //     "Карточка-5"
    // ]
    // const cardToRemove = 'Карточка-3';
    // const index = cards.indexOf(cardToRemove);
    // console.log(index);

    // cards.splice(index, 1);
    // console.table(cards);

        // добавление по индексу
    // const cardToInsert = "Карточка-6";
    // const index = 3;
    // cards.splice(index, 0, cardToInsert);
    // console.table(cards);

        // обновление по индексу
    // const cardToUpdate = "Карточка-4";
    // const index = cards.indexOf(cardToUpdate);
    // console.log(index);

    // cards.splice(index, 1, 'Обновленная карточка-4');
    // console.table(cards);