    // const playlist = {
    //     name: 'мой супер плейлист',
    //     rating: 5,
    //     tracks: ['трек-1', 'трек-2', 'трек-3'],
    //     trackCount: 3,
    // };

        // добавление ключа
    // playlist.drop = 7;

    // console.log(playlist);

// Литералы (пишутся справа от равно)

        // 1
    // const x = {};

        // 2
    // const fn = function (myObject) {
    //     console.log(myObject);
    // };

    // fn({a: 1, b: 2,})

        // 3
    // const rtfn = function() {
    //     return {a: 2};
    // }
    // console.log(rtfn());


// ...
    // const propertyName = 'tracks';

    // console.log(playlist.propertyName);
    // console.log(playlist[propertyName]);


// вычисление свойства
    // const inputName = 'color';
    // const inputValue = 'tomato';

    // const colorPickerData = {
    //     [inputName]: inputValue,
    // }

    // console.log(colorPickerData);


// Ссылочный тип {} === {}
    // const a = {x: 1, x: 2};
    // const b = a;

        // false
    // console.log({a: 1} === {a: 1});

        // true
    // console.log( b === a);

    // a.c = 100;
    // console.log(a);


// Массивы и функции это обьекты
    // const a = [1, 2, 3];
    // a.hello = '=)';

    // console.log(a);


    // const fn = function() {
    //     console.log('hello');
    // };

    // fn.hello = '=)';
    // console.log(fn.hello);


// метод training
    // const playlist = {
    //     name: 'мой супер плейлист',
    //     rating: 5,
    //     tracks: ['трек-1', 'трек-2', 'трек-3'],
    //     trackCount: 3,
    //     getName() {
    //         console.log('yes getName');
    //     }
    // };

    // console.log(playlist);

    // playlist.getName(5);


        // two
    // const playlist = {
    //     name: 'мой супер плейлист',
    //     rating: 5,
    //     tracks: ['трек-1', 'трек-2', 'трек-3'],
    //     trackCount: 3,
           
    //     changeName(newName) {
    //         console.log('this внутри change', this);
    //         this.name = newName;
    //     },

    //     addTrack(track) {
    //         this.tracks.push(track);
    //     },

    //     updateRating(newRating) {
    //         this.rating = newRating;
    //     },

    //     getTrackCount() {
    //         return this.tracks.length;
    //     },
    // };

    // console.log(playlist.getTrackCount());

    // playlist.changeName('newName');

    // playlist.addTrack('newTrack-5');
    // console.log(playlist.getTrackCount());

    // playlist.addTrack('newTrack-6');
    // console.log(playlist.getTrackCount());

    // playlist.updateRating(4);
    // console.log(playlist);


// перебираем массив 
    // const feedback = {
    //     good: 5,
    //     neutral: 10,
    //     bad: 3,
    // };

    // let totalFeedback = 0;
                // (только массив ключей)
    // const keys = Object.keys(feedback); 
    // console.log(keys);

    // for (const key of keys) {
    //     console.log(key);
    //     console.log(feedback[key]);
    //     totalFeedback += feedback[key];
    // }

    // console.log(totalFeedback)

                // (только массив значений)
    // const values = Object.values(feedback); 
    // console.log(values);

    // for(const value of values) {
    //     console.log(value);
    //     totalFeedback += value;
    // }
    // console.log(totalFeedback);


// массив обьектов
    // const friends = [
    //     {name: 'Mango', online: false},
    //     {name: 'Kiwi', online: true},
    //     {name: 'Poly', online: true},
    //     {name: 'Ajax', online: false},
    // ];
    // console.table(friends);

            // ищем друга по именни
    // const findFriendsByName = function (allFriends, friendsName) {
    //     for (const friends of allFriends) {
    //         console.log(friends);
    //         console.log(friends.name);

    //         if (friends.name === friendsName) {
    //             return "НАШЛИ !!!"
    //         }
    //     }
    // }
    // console.log(findFriendsByName(friends, 'Poly'));

                // получаем именна всех друзей
    // const getAllNames = function (allFriends) {
    //     const names = [];

    //     for (const friends of allFriends) {
    //         console.log(friends.name);

    //         names.push(friends.name);
    //     }

    //     return names;
    // }

    // console.log(getAllNames(friends));

                // получаем друзей которые онлайн
    // const getOnlineFriends = function (allFriends) {
    //     const onlineFriends = [];

    //     for (const friends of allFriends) {
    //         console.log(friends);
    //        console.log(friends.online);
           
    //        if (friends.online) {
    //         onlineFriends.push(friends);
    //        }
    //     }

    //     return onlineFriends;
    // }

    // console.log(getOnlineFriends(friends));


// ищем друга оффлайн
    // const getOfflineFriends = function (allFriends) {
    //     const offlineFriends = [];

    //     for (const friends of allFriends) {
    //         console.log(friends);
    //        console.log(friends.online);
           
    //        if (!friends.online) {
    //         offlineFriends.push(friends);
    //        }
    //     }

    //     return offlineFriends;
    // }

    // console.log(getOfflineFriends(friends));


// пишем функцию в которой ищем и онлайн друга и оффлайн
    // const getOnlineByStatus = function (allFriends) {
    //     const friendsByStatus = {
    //         online: [],
    //         offline: [],
    //     };

    //     for (const friend of allFriends) {
    //         if (friend.online) {
    //             friendsByStatus.online.push(friend);
    //         } else {
    //             friendsByStatus.offline.push(friend)
    //         }
    //     }

    //     return friendsByStatus;
    // }

    // console.log(getOnlineByStatus(friends));


// 
    // const cart = {
    //     items: [],
    //     getItems() {},
    //     add (product) {},
    //     remove (productName) {},
    //     clear () {},
    //     countTotalPrice () {},
    //     increaseQuantity (productName) {},
    //     decreaseQuantity (productName) {},
    // };

    // cart.add({name: 'apple', price: 50});
    // cart.add({name: 'lemon', price: 60});
    // cart.add({name: 'lime', price: 60});
    // cart.add({name: 'strawberry', price: 110});