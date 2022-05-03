
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