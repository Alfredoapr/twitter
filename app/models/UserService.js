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
}

module.exports = userService