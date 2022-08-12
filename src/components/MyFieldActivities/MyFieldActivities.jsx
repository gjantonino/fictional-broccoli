import React, { useState, useEffect } from 'react';
import { Box, Heading, Text } from 'grommet';
import { Link, Outlet } from 'react-router-dom'
import { Add } from 'grommet-icons';

export function MyFieldActivities() {
    return (
        <Box flex>
            <Box flex direction='row' align='baseline' justify='between' pad={{ left: 'medium', right: 'medium' }}>
                <Heading level="2" color={"dark-1"}>Mis Actividades</Heading>
                <Link to='new'>
                    <Add></Add>
                </Link>
            </Box>
            <Outlet />
        </Box>
    );
}
