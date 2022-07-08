import { getSaludo, getUser } from "./function";

describe('test demo', () => {
    test('test 1 - Numero igual', () => {
        expect(1===1).toBe(true)
     });
    test('test 2 - Mensaje igual', () => {
        //1.Arrange
        const message1 = 'Hola';

        //2.Act
        const message2 = message1.trim();

        //3.Assert (observar el comportamiento)
        expect(message1).toBe(message2);
     })

     test('test 3 - getSaludo', () => {
        const nombre = 'Beto';
        
        const message = getSaludo(nombre);
        
        expect(message).toBe(`Hola ${nombre}`)
     });

     test('test4 - getUser', () => {
        const testUser={
            uid: 'ABC123',
            username: 'Agosto1986'
        }

        const user = getUser();

        expect(testUser).toEqual(user);
        
     });
     
});
