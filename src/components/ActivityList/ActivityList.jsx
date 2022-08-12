import React, { useState, useEffect } from 'react';
import {Notification, Box, List, Text, Tag } from 'grommet';
import { FormEdit } from 'grommet-icons';
import { services } from '../../services'

export function ActivityList() {
    const [activities, setActivities] = useState([]);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchActivities = async () => {
            let data = await services.fieldActivityRest.getActivityByUser('testUser');
            setActivities(data);
            //save activities to IndexedDB
            let db = await services.idb.open();
            await services.idb.addMany(db, data);
        }
        const fetchActivitiesfromIdb = async () => {
            let db = await services.idb.open();
            let data = await services.idb.getAll(db);
            setActivities(data);
        }

        try {
            fetchActivities();
        } catch (e) {
            //If error from fetch, get data from IndexedDB
            fetchActivitiesfromIdb();
            handleError(e)
        }
    }, []);

    function handleError(e) {
        setError(e);
    }

    function activityItem(item, index, state) {
        return (
            <Box flex direction='row' align='center' justify='between'>
                <Box>
                    <Text weight={'bold'}>{item.locationName}</Text>
                    <Text>{item.measureDate}</Text>
                </Box>
                <Tag size='small' name="" value={item.activityType} />
                <FormEdit></FormEdit>
            </Box>
        )
    }

    return (
        <Box>
            {error && (
                <Notification
                    toast
                    title="Error"
                    message={'error'}
                    />)}
            <List
                data={activities}
                children={(item, index, state) => activityItem(item, index, state)}>
            </List>
        </Box>
    );
}
