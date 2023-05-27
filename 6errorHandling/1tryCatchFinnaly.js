try {
    errorCode;
}catch (error) {
    console.log(`terdapat error : ${error}`);
    console.log("======");
    console.log(error.name);
    console.log("======");
    console.log(error.message);
    console.log("======");
    console.log(error.stack);
    console.log("======");
} finally {
    console.log("finnaly");
}

console.log("diluar block try catch finnaly");