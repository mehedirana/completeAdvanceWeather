import React from 'react';
import { Appbar } from 'react-native-paper';



const Header = () => {
    return(
    <Appbar.Header style={{backgroundColor:'#1976d2'}}>
        <Appbar.Content
            title="Better Weather"
            subtitle="Advance weather Forcast"
        />
    </Appbar.Header>
    )
}

export default Header;