const user = require("./../models/user")

class userService{

    static create(id,username, name){
        return new user(id, username, name, "Sin Bio")
    }

    static getInfo(userS){
        return [userS.id, userS.username,userS.name, "Sin Bio"]
    }
}

module.exports = userService