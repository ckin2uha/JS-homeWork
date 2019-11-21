let thermometer = document.getElementById('thermometer');
let workVar = document.getElementById('workVar');
let variables = document.getElementById('variables');
let jsExpression = document.getElementById('jsExpression');
let attrib  = document.getElementById('attrib');


thermometer.onclick = function (){
    let Tc = +prompt('Введите тепературу по цельсию', 32);
    let Tf = (9 / 5) * Tc + 32;
    alert('Температура по фарегейту = '  + Tf);
    
}

workVar.onclick = function (){
    let admin;
    let name = 'Василий';
    admin = name;
    alert(admin)
}

variables.onclick = function(){
    let a = 20
    let b = 30

    a = a + b;
    b = a - b;
    a = a - b;

alert (a, b);
}

jsExpression.onclick = function (){
    alert('Мы получим 1000108 из-за конкатенации, склеивание двух строк')
    alert(1000 + "108");
}

attrib.onclick = function show(){
    document.querySelector("body > h1").innerText = ('Разница между async и defer: атрибут defer сохраняет относительную последовательность скриптов, а async – нет. Кроме того, defer всегда ждёт, пока весь HTML-документ будет готов, а async – нет.')
}
