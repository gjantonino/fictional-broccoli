import React, { useState, useEffect } from 'react';
import { Box, DateInput, Form, FormField, TextInput, Button, Menu, Select } from 'grommet';
import { services } from '../../services/index.js';
import { v4 as uuidv4 } from 'uuid';
import { CameraTest } from '../CameraTest/CameraTest.jsx';


export function NewActivityForm(props) {
    const [activityTypes, setActivityTypes] = useState(['LTM-0', 'LTM-1', 'STM-0', 'STM-1']);
    const [locations, setLocations] = useState([]);
    const [locationName, setLocationName] = useState();
    const [activityType, setActivityType] = useState();
    const [locationId, setLocationId] = useState('');
    const [cameraFiles, setCameraFiles] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            let data = await services.fieldActivityRest.getLocations('testUser');
            setLocations(data);
        }
        fetchLocations();
    }, []);

    async function handleSave (value) {
        try {
            value.id = uuidv4();
            value.userId = 'testUser';
            value.pictures = cameraFiles;
            console.log(value)
            await services.fieldActivityRest.addActivity(value);
        } catch (e) {
            console.error(e);
        } finally {
            let db = await services.idb.open();
            services.idb.add(db, value);
        }
    }

    function handleLocationChange(locName) {
        setLocationName(locationName);
        let loc = locations.filter((loc) => loc.locationName === locName)[0];
        setLocationId(loc.locationId);

    }

    function handleCameraInput(cameraData) {
        let cameraFilesArray = cameraFiles;
        cameraFilesArray.push(cameraData);
        setCameraFiles(cameraFilesArray);
    }

    function handleActivityTypeChange(actType) {
        setActivityType(actType);
    }

    return (
        <Box flex>
            <Box flex pad={{ top: 'large', left: 'large', right: 'large' }} >
                <Form
                    onSubmit={({ value }) => { handleSave(value) }}>
                    <FormField name="locationName" htmlFor="locationName-id" label="Establecimiento">
                        <Select
                            name="locationName"
                            id="locationName-id"
                            label="Locations"
                            options={locations.map((location) => location.locationName)}
                            value={locationName}
                            onChange={(option) => handleLocationChange(option.value)}
                            multiple={false}
                            plain
                        />
                    </FormField>
                    <FormField name="activityType" htmlFor="locationName-id" label="Actividad">
                        <Select
                            name="activityType"
                            id="activityType-id"
                            label="Actividad"
                            options={activityTypes}
                            value={activityType}
                            onChange={(option) => handleActivityTypeChange(option.value)}
                            multiple={false}
                            plain
                        />
                    </FormField>
                    <FormField name="locationId" htmlFor="locationId-id" label="Location ID">
                        <TextInput disabled plain type={'number'} id="locationId-id" name="locationId" value={locationId} />
                    </FormField>
                    <FormField name="measureDate" htmlFor="measureDate-id" label="Date">
                        <DateInput
                            plain
                            id="measureDate-id"
                            name="measureDate"
                            format="dd/mm/yyyy"
                            onChange={(value) => value}
                        />
                    </FormField>
                    <FormField name="measureOne" htmlFor="measureOne-id" label="Medida 1">
                        <TextInput plain type={'number'} step={'0.01'} id="measureOne-id" name="measureOne" />
                    </FormField>
                    <FormField name="fotoEstaca-1" htmlFor="foto-estaca-1" label="Foto">
                        <CameraTest pictureName="fotoEstaca-1" handleCameraFile={(data) => handleCameraInput(data)}id="foto-estaca-1"/>
                    </FormField>

                    <Box direction="row" justify='around' align="center" pad={{ top: "large" }}>
                        <Button size="medium" color="neutral-1" type="submit" primary label="Save" />
                        <Button size="medium" color="dark-3" type="reset" primary label="Reset" />
                    </Box>
                </Form>
            </Box>
        </Box>
    );

}
