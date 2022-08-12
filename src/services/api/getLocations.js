import axios from 'axios'
export async function getLocations () {
    let locations = [
        {
            locationId: 100,
            locationName: 'La estancia'
        },
        {
            locationId: 101,
            locationName: 'Estancia María'
        },
        {
            locationId: 102,
            locationName: 'Estancia Susana'
        },
        {
            locationId: 103,
            locationName: 'Los Robles'
        }
    ];
    return locations;
}