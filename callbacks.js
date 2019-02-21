console.log('before');
getUser(1);
getRepositories('xarfo');
// setTimeout(() => {
//     console.log('Reading a user from database.....');
// },3000);
console.log('after');

function getUser (id) {
    setTimeout(() => {
             console.log({id:id, gitHubUsername: 'xarfo'});
           
         },3000);

         
}


function getRepositories(username) {

    setTimeout(() => {
        return [repository1, repository2, repository3, repository4];
      
    },3000);

}