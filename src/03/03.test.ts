import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, growingUp} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        name: "Alexander",
        id: 1,
        age: 24,
        isActive: true,
        address: {
            streetTitle: "Yanischits 20",
            city: {
                title: "Pinsk",
                countryTitle: "Belarus",
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "JS"
            },
            {
                id: 4,
                title: "React"
            },
        ]
    }
})

test('new tech skill should be added to student', () => {
    addSkill(student, "Redux")

    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe("Redux")
    expect(student.technologies[4].id).toBeDefined()
})

test('student should be growing up on one year', () => {
    growingUp(student)

    expect(student.age).toBe(25)

})

test('does student live in the city?', () => {
    let result1 = doesStudentLiveIn(student, "Pinsk")
    let result2 = doesStudentLiveIn(student, "Moscow")

    expect(result1).toBe(true)
    expect(result2).toBe(false)

})