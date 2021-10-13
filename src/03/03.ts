import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

const res1 = sum(2,3)
const res2 = sum(2,4)

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
};

export const growingUp = (student: StudentType) => {
    student.age++;
};

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city;
};

export const addMoneyToBudget = (building: GovernmentBuildingsType, money: number) => {
    building.budget += money;

};

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
};

export const toFireStaff = (buildings: GovernmentBuildingsType, number: number) => {
    buildings.staffCount -= number;
};

export const toHireStaff = (buildings: GovernmentBuildingsType, number: number) => {
    buildings.staffCount += number;
};

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens! All of ${city.citizensNumber} people.`
};