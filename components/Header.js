import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
    return(
    <Appbar.Header>
        <Appbar.Content
            title="Title"
            subtitle="Subtitle"
        />
    </Appbar.Header>
    )
}

export default Header;