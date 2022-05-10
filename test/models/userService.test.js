
const User = require('../../app/models/user')
const UserService = require('./../../app/models/UserService')

describe("Unit Tests for UserService class", () =>{
    test("Create a new user using the UserService", () =>{
        //lo que voy hacer
        const user  = UserService.create(3,"alfello","Alfredo", "I'm learning")

        //validación

        expect(user.id).toBe(3)
        expect(user.username).toBe("alfello")
        expect(user.name).toBe("Alfredo")
        expect(user.description).not.toBeUndefined()
    })
})

describe("Unit Test for the method getInfo in UserService class",() => {
    test("Test the static method getInfo", () => {
        const userS = UserService.create(3,"alfello","Alfredo", "I'm coding") 
        const userInfoList = UserService.getInfo(userS)
        
        expect(userInfoList[0]).toBe(3)
        expect(userInfoList[1]).toBe("alfello")
        expect(userInfoList[2]).toBe("Alfredo")
        expect(userInfoList[3]).toBe("Sin Bio")
    });
})

describe("Unit Test for the method updateUserUsername in UserService class",() => {
    test("Test the static method updateUserUsername", () => {
        const user = UserService.create(3,"alfello","Alfredo") 
        UserService.updateUserUsername(user,"Alfellopr")
    
        expect(user.username).toBe("Alfellopr")
    });
})

describe("Unit Test for the method getAllUsernames in UserService class", () => { 
    test("Test the static method getAllUsernames, Given a list of users give me the ist of usernames", () => {
        const user = UserService.create(4,"alfello", "Alfredo")
        const user2 = UserService.create(5,"alfello2", "Alfredo2")
        const user3 = UserService.create(6,"alfello3", "Alfredo3")
        const usernames = UserService.getAllUsernames([user,user2,user3])

        expect(usernames).toContain("alfello")
        expect(usernames[0]).toBe("alfello")
        expect(usernames).toContain("alfello2")
        expect(usernames[1]).toBe("alfello2")
        expect(usernames).toContain("alfello3")
        expect(usernames[2]).toBe("alfello3")
    });
})