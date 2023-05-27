function getUsers(callback) {
    setTimeout(() => {
        const users = ["john", "jack", "abigail"];
        callback(users);
    }, 3000);
}

getUsers((users) => {
    console.log(users)
});