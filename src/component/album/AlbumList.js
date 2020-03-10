import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor() {
        super();
        this.state = {
            albums: []
        };
    }
    componentDidMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response => {
            this.setState({
                albums: response.data
            });
        });
    }
    render() {
        const { albums } = this.state;
        return (
            albums.map((album, i) => (
                <AlbumDetail key={i} album={album} />
            ))
        );
    }
}

export default AlbumList;
