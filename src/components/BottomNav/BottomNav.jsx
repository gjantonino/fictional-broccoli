import React, { useState, useEffect } from 'react';
import { Nav,Anchor, Footer, Box, Heading, Text } from 'grommet';
import { Link, Outlet } from 'react-router-dom'
import { Home, History, User } from 'grommet-icons';

export function BottomNav() {
    return (
        <Footer background='light-1' justify='around' pad='medium'>
                <Link to='/'>
                    <Home></Home>
                </Link>
                <Link to='activities'>
                    <History></History>
                </Link>
                <Link to=''>
                    <User></User>
                </Link>
        </Footer>
    );
}
