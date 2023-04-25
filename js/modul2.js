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
