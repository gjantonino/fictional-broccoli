import React from 'react';
import { Header, Image, Button } from 'grommet';
import { Notification, Calendar } from 'grommet-icons';


export function AppBar(props) {

    return (
        <Header
            tag="header"
            direction="row"
            align="center"
            justify="between"
            background=""
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation="medium"
            style={{ zIndex: '1' }}
        >
            <Button icon={<Calendar />} onClick={() => { }} />
            <Image height={"40px"} src={props.logo}></Image>
            <Button icon={<Notification />} onClick={() => { }} />
        </Header>
    );
}
