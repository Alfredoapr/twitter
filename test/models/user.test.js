const User = require('./../../app/models/user')

describe("Unit Tests for User Class", () => {
    test("Create an User object", () => {
        //Invocamos el codifo que usaremos en la app
        const user = new User(545,"Alfello", "Alfredo Pereda","I'm a student", "dateCreated", "lastUpdate")

        //validacion del código
        expect(user.id).toBe(545)   
        expect(user.username).toBe("Alfello")
        expect(user.name).toBe("Alfredo Pereda")
        expect(user.description).toBe(`I'm a student`)
        expect(user.dateCreated).not.toBeUndefined()//verifica que el valor no sea indefinido
        expect(user.lastUpdated).not.toBeUndefined()//verifica que el valor no sea indefinido        
    });
})