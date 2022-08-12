import React, { useState, useEffect } from 'react';
import { Box, Image, Text } from 'grommet';
import { Camera } from 'grommet-icons';

export function CameraTest(props) {
    const [source, setSource] = useState("");

    const handleCapture = (target) => {
        console.log(target);
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setSource(newUrl);
                props.handleCameraFile(newUrl);
            }
        }
    }

    return (
        <Box flex align='center' justify='center'>
            <label pad='medium' htmlFor="icon-button-file">
                <Box height="xsmall" width="xsmall" background='dark-5'>
                    {!source && <Camera></Camera>}
                    {source && <Image
                        fit="cover"
                        src={source}
                    />}
                </Box>
            </label>
            <input
                name={props.pictureName}
                style={{ display: 'none' }}
                accept="image/*"
                id="icon-button-file"
                type="file"
                capture="environment"
                onChange={(e) => handleCapture(e.target)}
            />
        </Box>
    );
}
