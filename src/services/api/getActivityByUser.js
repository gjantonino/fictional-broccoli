import axios from 'axios'
export async function getActivityByUser (userName) {
    return [
        {
            id: '6619b25c-0eba-4ffd-83a5-be3270d4cd74',
            userId: 'testUser',
            locationId: 100,
            locationName: 'La estancia',
            activityType: 'LTM-0',
            images: ['link', 'link', 'link'],
            measure1: 0.243,
            measureDate: '2022-07-30T03:22:31.344Z'
    
        },
        {
            id: '4a05de3f-154d-4e27-926c-ce4ad8b7e078',
            userId: 'testUser',
            locationId: 101,
            locationName: 'Estancia María',
            activityType: 'STM-0',
            images: ['link', 'link', 'link'], //object storage, S3 or similar.
            measure1: 0.8,
            measureDate: '2022-07-28T03:22:31.344Z'
        }
    ]
}