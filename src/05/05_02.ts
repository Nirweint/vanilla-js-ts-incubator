import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export function getStreetsTitlesOfGovernmentBuildings(buildings: Array<GovernmentBuildingsType>) {
    return buildings.map((building) => building.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: Array<HouseType>) {
    return houses.map((house) => house.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {
    return houses.map(house => `Hello guys from ${house.address.street.title}`)
}