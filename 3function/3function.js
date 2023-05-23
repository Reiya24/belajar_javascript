function sayHello(){
    const name = "reiya";

    function goodMorning() {
        console.log(`good morning ${name}`)
    }
    goodMorning();

}

sayHello();

const add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */