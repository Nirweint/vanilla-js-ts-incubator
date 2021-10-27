import {UsersType} from "./08_01";


let users: UsersType;

beforeEach(() => {
    users = {
        '100': { id: 100, name: 'Dimych'},
        '323232': { id: 323232, name: 'Natasha'},
        '1212': { id: 1212, name: 'Valera'},
        '1': { id: 1, name: 'Katya'},
    }
})

test('should update corresponding user', () => {
    users['1'].name = 'Ekaterina';

    expect(users['1'].name).toBe('Ekaterina');
    expect(users['1']).toEqual({ id: 1, name: 'Ekaterina'});
})

test('should delete corresponding user', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})