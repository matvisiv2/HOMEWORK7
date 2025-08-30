// 1. За допомогою методів об’єкта window створити:
// 	1) нове вікно розміром 300х300 пікселів.
// 	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
// 	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
// 	4) із затримкою 2 сек закрийте вікно.

function task01() {
    const newWindow = window.open('', 'Window300', 'width=300,height=300');

    setTimeout(() => {
        newWindow.resizeTo(500, 500);
        setTimeout(() => {
            newWindow.moveTo(200, 200);
            setTimeout(() => {
                newWindow.close();
            }, 2000);
        }, 2000);
    }, 2000);
}


// 2. Для заданої HTML-сторінки:

// <p id ='text'>I learning JavaScript events!</p>
// <div>
// 	<button . . . . . >Change style!</button>
// </div>

// напишіть функцію changeCSS(),
// яка спрацьовуватиме по кліку на кнопку
// і змінюватиме стиль вмісту тега <p>:
//      колір шрифту – оранжевий,
//      розмір шрифту 20 пс,
//      шрифт сімейства "Comic Sans MS".

function changeCSS() {
    const p = document.getElementById("text");
    p.style = "color: orange; font-size: 20px; font-family: Comic Sans MS;";
}


// 3. Задано сторінку з 3 кнопками і 1 лінкою.
// Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
// 	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
// 	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
// 	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
// 	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
// 	Приклад – курсор наведений на лінку.

function task03() {
    const elems = [
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("a")
    ];

    elems[0].textContent = "Click to make the page Blue";
    elems[0].addEventListener("click", () => document.body.style.backgroundColor = "blue");
    elems[1].textContent = "Double-click to make the page pink";
    elems[1].addEventListener("dblclick", () => document.body.style.backgroundColor = "orange");
    elems[2].textContent = "Click and hold to make the page brown";
    elems[2].addEventListener("mousedown", () => document.body.style.backgroundColor = "brown");
    elems[2].addEventListener("mouseup", () => document.body.style.backgroundColor = "white");
    elems[3].textContent = "Hover over to make the page yellow"
    elems[3].addEventListener("mouseenter", () => document.body.style.backgroundColor = "yellow");
    elems[3].addEventListener("mouseleave", () => document.body.style.backgroundColor = "white");

    const div = document.getElementById("task03");
    elems.forEach(el => div.appendChild(el));
}


// 4. Реалізуйте програму,
//  яка по натисканню на кнопку
//  видалятиме обраний елемент випадаючого списку.
// Можуть видалятися всі елементи в будь-якому порядку.

function task04() {
    const select = document.getElementById("task04");
    const selected = select.options[select.selectedIndex];
    selected.remove();
}


// 5. Реалізуйте програму,
// яка по натисканню на кнопку виводитиме повідомлення "I was pressed!",
// при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
// а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

function task05Pressed() {
    const p = document.createElement("p");
    p.textContent = "I was pressed!";
    const div = document.getElementById("task05");
    div.appendChild(p);
    console.log("I was pressed!");
}

function task05MouseOn() {
    const p = document.createElement("p");
    p.textContent = "Mouse on me!";
    const div = document.getElementById("task05");
    div.appendChild(p);
    console.log("Mouse on me!");
}

function task05MouseOut() {
    const p = document.createElement("p");
    p.textContent = "Mouse is not on me!";
    const div = document.getElementById("task05");
    div.appendChild(p);
    console.log("Mouse is not on me!");
}


// 6. Реалізуйте програму,
// яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
// і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
window.addEventListener("resize", () => {
    const task06 = document.getElementById("task06");
    task06.textContent = `Width: ${window.innerWidth}, height: ${window.innerHeight}`;
});


// 7*. На сторінці потрібно реалізувати 2 випадаючих списки.
// У першому містяться назви країн, у другому – назви міст.
// Реалізувати роботу таким чином,
//      щоб коли вибирається з лівого випадаючого списку певна країна
//      - в правому випадаючому  списку з'являлися міста цієї країни.
// Список міст формується динамічно, через JavaScript.
// Також потрібно нижче вивести назву обраної країни і місто.

// Код HTML-сторінки:
// <select name="country" id="country">
// 	<option value="ger">Germany</option>
// 	<option value="usa">USA</option>
// 	<option value="ukr">Ukraine</option>
// </select>

// <select name="cities" id="cities"></select>
// <p></p>


// Вхідні дані (країни та міста)
const arr_countries = ['Ukraine', 'Germany', 'France', 'Japan'];
const arr_cities = [
    ['Kyiv', 'Lviv', 'Odesa', 'Kharkiv', 'Dnipro', 'Vinnytsia', 'Poltava', 'Chernihiv', 'Zaporizhzhia', 'Cherkasy'],
    ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt', 'Stuttgart', 'Dresden', 'Bremen', 'Hanover', 'Nuremberg'],
    ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'],
    ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya', 'Sapporo', 'Hiroshima', 'Fukuoka', 'Yokohama', 'Sendai', 'Kobe']
];

// Створення вибору країн
const select_country = document.getElementById("country");
arr_countries.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select_country.appendChild(option);
});

// Опрацювання зміни країни
const task07Country = document.getElementById("task07Country");

function changeCountry() {
    task07Country.textContent = `Country: ${select_country.options[select_country.selectedIndex].value}`;
    changeCities();
    changeCity();
}

select_country.addEventListener("change", changeCountry);


// Створення вибору міст
const select_cities = document.getElementById("cities");
function changeCities() {
    select_cities.innerHTML = '';
    arr_cities[select_country.selectedIndex].forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        select_cities.appendChild(option);
    });
};

changeCities();

// Опрацювання зміни міста
const task07City = document.getElementById("task07City");

function changeCity() {
    task07City.textContent = `City: ${select_cities.options[select_cities.selectedIndex].value}`;
}

select_cities.addEventListener("change", changeCity);
