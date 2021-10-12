import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

const res1 = sum(2,3)
const res2 = sum(2,4)

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const growingUp = (student: StudentType) => {
    student.age++
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, money: number) => {
    building.budget += money

};