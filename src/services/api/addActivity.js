import axios from 'axios'
export async function addActivity (activityData) {
    try {
        let options = {
            method: 'POST',
            url: 'https://192.168.1.114:8000/field_activity/testUser',
            data: activityData
        }
        await axios(options);
    } catch(e){
        let errMsg = `Error posting field activity: ${e.message}`;
        console.error(errMsg);
        throw new Error(errMsg);
    }
}