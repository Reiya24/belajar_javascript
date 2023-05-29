console.log('===membuat fungsi');

console.log('===tanpa return');
function sayHello(name, language = 'indonesia') {
    if (language === 'indonesia') {
        console.log(`halo ${name}`);
    } else if (language === 'french') {
        console.log(`bonjour ${name}`);
    } else {
        console.log(`hello ${name}`);
    }

}

sayHello('reiya', 'indonesia');
sayHello('reiya','3', '2');

console.log('===menggunakakn return');

function sayHelloReturn(name, language) {
    if (language === 'indonesia') {
        return `halo ${name}`;
    } else if (language === 'french') {
        return `bonjour ${name}`;
    } else {
        return `hello ${name}`;
    }
}

console.log(sayHelloReturn('tomkun', 'unknown'));

console.log('===memanfaatkan destructuring object untuk mendapatkan nilainya');

const user = {
    id: 24,
    firstName: 'reiya',
    lastName: 'tenggara',
};

function introduce({firstname, lastName}) {
    console.log(`hello, my name is ${firstname} ${lastName}`);
}

introduce(user);

