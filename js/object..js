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
    const playlist = {
        name: 'мой супер плейлист',
        rating: 5,
        tracks: ['трек-1', 'трек-2', 'трек-3'],
        trackCount: 3,
           
        changeName(newName) {
            console.log('this внутри change', this);
            this.name = newName;
        },

        addTrack(track) {
            this.tracks.push(track);
        },

        updateRating(newRating) {
            this.rating = newRating;
        },

        getTrackCount() {
            return this.tracks.length;
        },
    };

    console.log(playlist.getTrackCount());

    playlist.changeName('newName');

    playlist.addTrack('newTrack-5');
    console.log(playlist.getTrackCount());

    playlist.addTrack('newTrack-6');
    console.log(playlist.getTrackCount());

    playlist.updateRating(4);
    console.log(playlist);