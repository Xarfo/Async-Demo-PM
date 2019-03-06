
const  getUser  = (id, callback) => {
    setTimeout(() => {
             console.log("Reading a user from a database...");
            callback({id:id, gitHubUsername: 'xarfo'});
         },3000);

         
}

<<<<<<< HEAD

function getRepositories(username, Callback) {

    setTimeout(() => {
        console.log('Calling GitHub repository API')
       Callback ([repository1, repository2, repository3, repository4]);
      
=======
const getRepository = (username, callback) => {
    setTimeout(() => {
        console.log(`Reading GitHub API`);
        callback(['repo1', 'repo2', 'repo3']);
>>>>>>> 6e3c5af211e75bb0375e6c6cbab00b5b2fa5a56c
    },3000);
}


console.log('before');
const user = getUser(1, (user) => {
    getRepository(user.gitHubUsername, (repo) => {
        console.log(user.gitHubUsername,'Repos',repo);
});

});

console.log('after');




