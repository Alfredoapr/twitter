const User = require("./../models/user")

class userService{

    static create(id,username, name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(userS){
        return [userS.id, userS.username,userS.name, "Sin Bio"]
    }

    static updateUserUsername(user, newUsername){
        user.setUsername = newUsername
    }

    static getAllUsernames([user,user2,user3]){
        return [user.username, user2.username, user3.username]
    }


}

module.exports = userService