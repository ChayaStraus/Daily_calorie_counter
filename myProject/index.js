
const users = [];

const food = [
    { id: 1, img: "ביגל.jpg", name: "ביגל", numCaloryot: 150 },
    { id: 2, img: "וופל בלגי.jpg", name: "וופל בלגי", numCaloryot: 80 },
    { id: 3, img: "לחם.jpg", name: "לחם", numCaloryot: 110 },
    { id: 4, img: "עוגיות.jpg", name: "עוגיות", numCaloryot: 45 },
    { id: 5, img: "פיצה.jpg", name: "פיצה", numCaloryot: 200 },
    { id: 6, img: "פסטה.jpg", name: "פסטה", numCaloryot: 165 },
    { id: 7, img: "ציפס.jpg", name: "ציפס", numCaloryot: 130 },
    { id: 8, img: "פיתה.jpg", name: "פיתה", numCaloryot: 100 },
    { id: 9, img: "דג.jpg", name: "דג", numCaloryot: 50 },
    { id: 10, img: "חביתה.jpg", name: "חביתה", numCaloryot: 35 },
    { id: 11, img: "חומוס.jpg", name: "חומוס", numCaloryot: 42 },
    { id: 12, img: "חלב.jpg", name: "חלב", numCaloryot: 15 },
    { id: 13, img: "עוף.jpg", name: "עוף", numCaloryot: 65 },
    { id: 14, img: "פופקורן.jpg", name: "פופקורן", numCaloryot: 42 },
    { id: 15, img: "שניצלים.jpg", name: "שניצלים", numCaloryot: 80 },
    { id: 17, img: "שקדים.jpg", name: "שקדים", numCaloryot: 25 },
    { id: 18, img: "אבטיח.jpg", name: "אבטיח", numCaloryot: 30 },
    { id: 19, img: "אורז.jpg", name: "אורז", numCaloryot: 130 },
    { id: 20, img: "אננס.jpg", name: "אננס", numCaloryot: 50 },
    { id: 21, img: "בורקס.jpg", name: "בורקס", numCaloryot: 250 },
    { id: 22, img: "וופלה.jpg", name: "וופלה", numCaloryot: 50 },
    { id: 23, img: "מלפפון.jpg", name: "מלפפון", numCaloryot: 5 },
    { id: 24, img: "מרק.jpg", name: "מרק", numCaloryot: 35 },
    { id: 25, img: "סושי.jpg", name: "סושי", numCaloryot: 75 },
    { id: 26, img: "סלט.jpg", name: "סלט", numCaloryot: 12 },
    { id: 27, img: "פלפלים.jpg", name: "פלפלים", numCaloryot: 25 },
    { id: 28, img: "פרוזן.jpg", name: "פרוזן", numCaloryot: 32 },
    { id: 29, img: "קפה.jpg", name: "קפה", numCaloryot: 17 },
    { id: 30, img: "קרואסון.jpg", name: "קרואסון", numCaloryot: 60 },
];
const cart = [];
const userCart = [];

//רינדורים:
function onload() {
    renderwelcom();// רינדור מסך פתיחה
}

function renderwelcom() {
    const welcomdiv = document.getElementById("welcom");
    welcomdiv.innerHTML = "";

    const welcomCom = `<div></div> <div id="registration">

<form onsubmit="onformsubmitregister(event)">
    <h2>הרשמה</h2>

    <p>שם מלא</p>
    <input type="text" name="name">
    <p>טלפון</p>
    <input type="tel" name="phone">
    <p>תעודת זהות</p>
    <input type="text" name="id">
    <p>מייל</p>
    <input type="email"name="email">
    <p>כמה קלוריות אתה מעוניין לצרוך ביום?</p>
    <input type="number" name="calories">
    <div><button type="submit">הרשם</button></div>
    
</form>
</div>

<div id="connection">
<form onsubmit="onformsubmitconnection(event)" >
    <h2>התחברות</h2>
    <p>שם מלא</p>
    <input type="text" name="name">
    <p>תעודת זהות</p>
    <input type="text" name="iddd">
    <div><button  type="submit" >התחבר</button></div>
</form>
</div>`;

    welcomdiv.innerHTML += welcomCom;
}

function renderfood() {

    const fooddiv = document.getElementById("food");
    fooddiv.innerHTML = "";


    for (let i = 0; i < food.length; i++) {
        const element = `
        <div class="card">
    <img src="food/${food[i].img}" alt="">
    <p>${food[i].name}</p>
    <p>קלוריות: ${food[i].numCaloryot}</p>
    <button onclick="addfood(${food[i].id});">הוסף</button>
</div>`;

        fooddiv.innerHTML += element;
    }
}

function renderCart() {

    let tempCart = localStorage.getItem("cart");
    if (tempCart === null) {
        tempCart = [];
    }
    else
        tempCart = JSON.parse(tempCart);

    for (let i = 0; i < tempCart.length; i++) {
        if (tempCart[i].id === localStorage.getItem("userId")) {
            userCart.push(tempCart[i]);

            const userCartstr = JSON.stringify(userCart);
            localStorage.setItem("userCart", userCartstr);
        }
    }

    let mycart = localStorage.getItem("userCart");
    mycart = JSON.parse(mycart);

    const cartdiv = document.getElementById("plate");

    cartdiv.innerHTML = "";

    for (let i = 0; i < mycart.length; i++) {
        const cartelement = `<div class="item">${mycart[i].name} | ${mycart[i].numCaloryot}</div>`

        cartdiv.innerHTML += cartelement;
        // cartdiv.innerHTML+="<button>כמה אכלתי היום?</button>"
    }
}

function login(fullname, id) {

    let tempusers = localStorage.getItem("users");
    if (tempusers === null) {
        tempusers = [];
    }
    else
        tempusers = JSON.parse(tempusers);


    const user = tempusers.find(u => u.fullname === fullname && u.id === id);

    if (user === undefined)
        alert("משתמש חדש? הרשם !");
    else {
        alert("שלום ל-" + user.fullname);
        localStorage.setItem("userId", user.id);
        renderfood();
        const f = document.getElementById("f");
        f.style.display = "block";
        const w = document.getElementById("welcom");
        w.style.display = "none";
    }

}

function onformsubmitconnection(event) {
    event.preventDefault();

    const form = event.target;
    const fullnamevalue = form.name.value;
    const idvalue = form.iddd.value;
    login(fullnamevalue, idvalue);
}

function register(fullname, phone, id, email, calories) {

    let tempusers = localStorage.getItem("users");
    if (tempusers === null) {
        tempusers = [];
    }
    else
        tempusers = JSON.parse(tempusers);

    const user = tempusers.find(u => u.fullname === fullname && u.id === id);
    const newUser = { fullname, phone, id, email, calories };
    if (user === undefined) {
        tempusers.push(newUser);
        alert("נרשמת בהצלחה!!");
        tempusers = JSON.stringify(tempusers);
        localStorage.setItem("users", tempusers);
        localStorage.setItem("userId", id);
        renderfood();
        const f = document.getElementById("f");
        f.style.display = "block";
        const w = document.getElementById("welcom");
        w.style.display = "none";
    }
    else
        alert("הינך רשום כבר במערכת, התחבר!");


}

function onformsubmitregister(event) {
    event.preventDefault();

    const form = event.target;
    const fullnamevalue = form.name.value;
    const phonevalue = form.phone.value;
    const idvalue = form.id.value;
    const emailvalue = form.email.value;
    const caloriesvalue = form.calories.value;

    register(fullnamevalue, phonevalue, idvalue, emailvalue, caloriesvalue);

    // window.open("home.html");
}

function addfood(id) {

    let tempCart = localStorage.getItem("cart");
    if (tempCart === null) {
        tempCart = [];
    }
    else
        tempCart = JSON.parse(tempCart);

    const usid = localStorage.getItem("userId");

    const product = food.find(p => p.id === id);
    const cartItem = { id: usid, name: product.name, numCaloryot: product.numCaloryot };
    tempCart.push(cartItem);
    alert("המוצר נוסף בהצלחה!!")
    tempCart = JSON.stringify(tempCart);
    localStorage.setItem("cart", tempCart);
    // renderCart();
}

function endOfDay() {
    renderCart();
    const c = document.getElementById("cart");
    c.style.display = "block";
    const f = document.getElementById("f");
    f.style.display = "none";
}

function sum() {
    let c = localStorage.getItem("cart");
    c = JSON.parse(c);

    let sum = 0;

    for (let i = 0; i < c.length; i++) {
        if (c[i].id === localStorage.getItem("userId")) {
            sum += c[i].numCaloryot;
        }
    }

    let uarr = localStorage.getItem("users");
    uarr = JSON.parse(uarr);
    let numCaloryotU = 0;
    let nameU = 0;
    for (let i = 0; i < uarr.length; i++) {
        if (uarr[i].id === localStorage.getItem("userId")) {
            numCaloryotU = uarr[i].calories;
            nameU = uarr[i].fullname;
        }
    }

    const s = document.getElementById("sum");
    s.style.display = "block";
    const ss = document.getElementById("ss");
    ss.style.display = "block";

    if (sum > numCaloryotU) {
        ss.innerHTML += `<div class="p">${nameU} אופסס חרגת קצת מהיעד</div>`
        ss.innerHTML += `<p></p>`;
        ss.innerHTML += `<div class="p">אכלת היום ${sum} קלוריות</div>`;
        ss.innerHTML += `<p></p>`;
        ss.innerHTML += `<div class="p">חרגת ב-${sum - numCaloryotU} קלוריות</div>`;
    }
    else {
        ss.innerHTML += `<div class="p">${nameU} כל הכבוד עמדת ביעד!!!!</div>`;
        ss.innerHTML += `<p></p>`;
        ss.innerHTML += `<div class="p">אכלת היום ${sum} קלוריות</div>`;
        ss.innerHTML += `<p></p>`;
        ss.innerHTML += `<div class="p">נשארו לך עוד-${numCaloryotU - sum} קלוריות</div>`

    }



    const cc = document.getElementById("cart");
    cc.style.display = "none";
}



