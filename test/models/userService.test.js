const user = require('./../../app/models/user')
const UserService = require('./../../app/models/UserService')

describe("Unit Tests for UserService class", () =>{
    test("Create a new user using the UserService", () =>{
        //lo que voy hacer
        const user  = new UserService(3,"alfello","Alfredo", "I'm learning")

        //validación

        expect(user.username).toBe("alfello")
        expect(user.id).toBe("3")
        expect(user.name).toBe("Alfredo")
        expect(user.description).not.toBeUndefined()
    })
})