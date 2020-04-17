import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
    <Appbar.Header>
        <Appbar.Content
            title="Title"
            subtitle="Subtitle"
        />
        <Appbar.Action icon="magnify" onPress={this._handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
    </Appbar.Header>
}

export default Header;