class User{
    constructor(id, username, name, description){
        this.id = id
        this.username = username
        this.name = name
        this.description = description
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
    get getUsername(){
        return this.username
    }

    get getDescription(){
        return this.description
    }

    get getDateCreated(){
        return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdated
    }

    set setUsername(newUsername){
        this.username= newUsername
    }

    set setBio(newBio){
        this.bio = newBio
    }

}
module.exports = User