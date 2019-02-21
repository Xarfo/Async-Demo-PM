console.log('before');
getUser();
console.log('after');

function getUser() {
    setTimeout(() => {
    console.log('Reading a user from database.....');
},3000);
}