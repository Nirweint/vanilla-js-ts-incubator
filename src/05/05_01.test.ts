import {ManType, messages} from "./05_01";

let people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitriy Sidorov", age: 18},
]

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitriy Sidorov", age: 18},
    ]
})

test("should get array of greeting messages", () => {

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("I'm Andrew, and i 33 years old.")
})
