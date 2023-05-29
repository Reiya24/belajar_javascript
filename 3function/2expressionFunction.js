const sayHello = function (name, language) {
    if (language === 'indonesia') {
        return `halo ${name}`;
    } else if (language === 'french') {
        return `bonjour ${name}`;
    } else {
        return `hello ${name}`;
    }
}

console.log(sayHello('tomkun', 'french'));