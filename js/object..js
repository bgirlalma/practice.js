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
   


// Задача корзина товара
    const cart = {
        items: [],
        getItems() {
            return this.items;
        },
        add (product) {
            console.table(this.items);

            for (const item of this.items) {
                
                if (item.name === product.name) {
                   item.quantity += 1;
                   return;
                }
            }

            const newProduct = {
                ...product,
                quantity: 1,
            };

            this.items.push(newProduct);
        },
        remove(productName) {
            const { items } = this;

            for (let i = 0; i < items.length; i += 1) {
                const { name } = items[i];

                if (productName === name) {
                    console.log('Нашли такой продукт', productName);
                    console.log(i);

                    items.splice(i, 1);
                }
            }
        },
        clear () {
            this.items = [];
        },
        countTotalPrice () {
            const { items } = this;
            let total = 0;

            for (let { price, quantity } of items) {
                total += price * quantity;
            }

            return total;
        },
        increaseQuantity (productName) {},
        decreaseQuantity (productName) {},
    };

    console.table(cart.getItems());

    cart.add({name: "apple", price: 50});
    cart.add({name: "lemon", price: 60});
    cart.add({name: "lemon", price: 60});
    cart.add({name: 'lime', price: 70});
    cart.add({name: 'strawberry', price: 110});
    cart.add({name: 'strawberry', price: 110});
    cart.add({name: 'strawberry', price: 110});

   
    console.table(cart.getItems());

    console.log('Total', cart.countTotalPrice());

    cart.remove("lemon");
    console.table(cart.getItems());

    
// Распыление spread

    // Поиск самого маленького числа
    // const temps = [12, 45, 99, 4, 2, 33, 18, 5];

    // console.log(Math.min(...temps));

     
    // Делаем копию, если элетенты массива примитивы
    // const a = [{x: 1}, {y: 4}, {z: 7}]
    // const b = [...a]

    // console.log('a', a);
    // console.log('b', b);

    // a[0].x = 1000;


    // Сшиваем несколько массивов в один через concat & spread
    // const lastWeekTemps = [1, 2, 3];
    // const currentTemps = [4, 5, 6];
    // const nextWeeckTemps = [7, 8, 9];

    //     // Concat var
    // const xx = lastWeekTemps.concat(currentTemps, nextWeeckTemps);
    // console.log(xx)

    // const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeeckTemps];
    // console.log(allTemps)


    // Распыление обьектов Object.prototyp.assign() и spread
    // const a = { x: 1, y: 2 };
    // const b = { x: 0, z: 3 };

    // const c = Object.assign({x: 5}, a, b);
    // первым выполняет, то что в фигурных скобках, потом то что в А, таким способом заменяя Х значение на 1, потом то что в В, заменяя значение Х на 0
    // console.log(c)

    // современная запись
    // const c = {
    //     ...a,
    //     x: 10,
    //     ...b,
    //     y: 20,
    // };
    // console.log(c)


        // пример изменения настроек
    // const defaultSetting = {
    //     theme: 'light',
    //     showNotification: true,
    //     hideSatebar: false,
    // };

    // const usserSetting = {
    //     showNotification: false,
    //     hideSatebar: true,
    // };

    // const finalSetting = {
    //     ...defaultSetting,
    //     ...usserSetting
    // };
    // console.log(finalSetting)


// Деструктуризация обьекта
    // const playlist ={
    //     name: 'мой плейлист',
    //     rating: 5,
    //     tracks: ['track-1, track-2, track-3'],
    //     trackCount: 3,
    // };

        // если пузатые скобки слева от равно, это деструктуризация
        // чтобы изменить название ключа в локальной переменной нужно "trackCount: newLocalTracks"
        // если нам нужно добавить новый ключь в переменной, то пишем "author = 'Mango'"
    // const { rating, name, tracks, trackCount: newLocalTracks, author = 'Mango'} = playlist;
    // console.log( rating, name,  tracks, trackCount, author);

    // console.log(
    //     rating,
    //     name,
    //     tracks,
    //     trackCount,
    // );


// Глубокая деструктуризация
    // const profile = {
    //     name: 'Топ',
    //     tag: 'JBT',
    //     location: 'Rio de janero',
    //     avatar: 'ссылка',
    //     stats: {
    //         folowers: 5555,
    //         views: 1000,
    //         likes: 2000000,
    //     },
    // };

    // const { name, tag, location, stats: {folowers, views, likes}, avatar } = profile;
    // console.log( name, tag, location, folowers, views, likes, avatar);


// Декструктуризация массивов
    // const rgb = [255, 33, 999, 5, 18];
    // const [green, blue, red] = rgb;


    // const authors = {
    //     kiwi: 5,
    //     poly: 3,
    //     ajax: 7,
    //     mango: 5,
    // };

    // const entries = Object.entries(authors);

    // for (const [name, rating] of entries) {
    //     console.log(name, rating)
    // }



// Операция Rest
    //  const profile = {
    //     name: 'Топ',
    //     tag: 'JBT',
    //     location: 'Rio de janero',
    //     avatar: 'ссылка',
    //     stats: {
    //         folowers: 5555,
    //         views: 1000,
    //         likes: 2000000,
    //     },
    // };

    // const {name, tag, location, ...restProps} = profile;

    // console.log( name, tag, location);
    // console.log(restProps);


// Паттерн Обьект настроек
    // const showProfileIntro = function ({name, tag, location, avatar, stats: {folowers, views, likes}}) {
    //     console.log(name, tag, location, avatar, folowers, views, likes);
    // };
    

    //  const profile = {
    //     name: 'Топ',
    //     tag: 'JBT',
    //     location: 'Rio de janero',
    //     avatar: 'ссылка',
    //     stats: {
    //         folowers: 5555,
    //         views: 1000,
    //         likes: 2000000,
    //     },
    // };

    // showProfileIntro(profile);