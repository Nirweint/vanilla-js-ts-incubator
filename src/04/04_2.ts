import {CityType, GovernmentBuildingsType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, streetTitle: string) {
    city.houses = city.houses.filter(house => house.address.street.title !== streetTitle)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingsType>, staffCount: number) {
    return buildings.filter(building => building.staffCount >= staffCount)
}