class User{
    constructor(id, username, name, description, dateCreated, lastUpdated ){
        this.id = id
        this.username = username
        this.name = name
        this.description = description
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }
        dateCreated = new Date()
        lastUpadte = new Date()

}
module.exports = User