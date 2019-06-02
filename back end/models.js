const knex = require('knex')(require('./knexfile').development);
const crypto = require("crypto");


function getUser(mail) {
    return knex("users").where({mail:mail})
}

function randomString () {
  return crypto.randomBytes(4).toString('hex')
}

function saltHashPassword ({ password,
                             salt = randomString()
                           }) 
{
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
  return {
    salt,
    hash: hash.digest('hex')
  }
}


function createUser(data_JSON) {
    let data = JSON.parse(data_JSON);
    console.log(`Add user ${data.mail}`);
    const { salt, hash } = saltHashPassword({password:data.password}); // hache le mdp de l'user et génère un salt
    data.password = hash;
    data.salt = salt;
    let user_data = {
      username:data.username,
        password:data.password,
        prenom:data.prenom,
        nom:data.nom,
        email:data.email,
        salt:data.salt
    };

    console.log('user data ' + user_data);

    return knex('users').where({ email:data.email }).then(([users]) => {

        if (users) 
        {
            console.log("user  exist");
            return { success: false };
        }
        return knex('users').insert(user_data, 'id'); // renvoie vrai si le hash est égal au mdp, faux si ce n'est pas le cas
      })

    
}



function logUser(data)
{
    console.log( data.email);

    return knex('users').where({ email:data.email }).then(([users]) => {

        if (!users) 
        {
            console.log("user doesn't exist");
            return { success: false };
        }

        const { hash } = saltHashPassword({   // récupère le hash du mdp entré par l'utilisateur, avec le salt associé à cet user en bdd
        password: data.password,
          salt: users.salt
        })
        

        return { success: hash === users.password, id: users.id } // renvoie vrai si le hash est égal au mdp, faux si ce n'est pas le cas
      })
}

/*
function createPublication(data) {

}


function createComment(data) {

}


function listUsers(data) {
    return knex("users").where(data);
}
*/
module.exports = {
    getUser,
    createUser,
    logUser,
   /* listUsers,
    
    createPlayer*/
};