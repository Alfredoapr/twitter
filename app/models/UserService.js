const user = require("./../models/user")

class userService{
    
    static create(id,username, name){
        return new User(id, username, name, "Sin Bio")
    }
}

module.exports = userService()