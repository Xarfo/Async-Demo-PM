
const  getUser  = (id, callback) => {
    setTimeout(() => {
             console.log("Reading a user from a database...");
            callback({id:id, gitHubUsername: 'xarfo'});
         },3000);

         
}

const getRepository = (username, callback) => {
    setTimeout(() => {
        console.log(`Reading GitHub API`);
        callback(['repo1', 'repo2', 'repo3']);
    },3000);
}


console.log('before');
const user = getUser(1, (user) => {
    getRepository(user.gitHubUsername, (repo) => {
        console.log(user.gitHubUsername,'Repos',repo);
});

});

console.log('after');




