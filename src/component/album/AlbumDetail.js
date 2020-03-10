import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from '../commons/Card';
import CardItem from '../commons/CardItem';
import Button from '../commons/Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, url, image, thunmbnail_image } = album;
    const {
        imageStyle,
        thumbnailImageStyle,
        headerTextViewContainer,
        thumbnailImageContainer,
        titleText
    } = styles;
    return (
        <Card>
            <CardItem>
                <View style={thumbnailImageContainer}>
                    <Image style={thumbnailImageStyle} source={{ uri: image }} />
                </View>
                <View style={headerTextViewContainer}>
                    <Text style={titleText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardItem>
            <CardItem>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy now
                </Button>
            </CardItem>
        </Card>
    );
}

const styles = {
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    },
    thumbnailImageStyle: {
        height: 60,
        width: 60
    },
    headerTextViewContainer: {
        justifyContent: 'space-around'
    },
    thumbnailImageContainer: {
        marginRight: 10
    },
    titleText: {
        fontSize: 20
    }
}

export default AlbumDetail;
