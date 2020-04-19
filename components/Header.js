import React from 'react';
import { Appbar } from 'react-native-paper';



const Header = () => {
    return(
    <Appbar.Header>
        <Appbar.Content
            title="Better Weather"
            subtitle="Advance weather Forcast"
        />
    </Appbar.Header>
    )
}

export default Header;