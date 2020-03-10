import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import Card from '../commons/Card';

class ListView extends Component {
    componentDidMount() {

    }
    renderItem = ({ item }) => {
        return (
            <ListItem library={item}></ListItem>
        )
    }
    render() {
        const { libraries } = this.props;
        return (
            <Card>
                <FlatList
                    data={libraries}
                    renderItem={this.renderItem}
                    keyExtractor={library => library.id.toString()}
                />
            </Card>
        );
    }
}

mapStateToProps = state => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(ListView);
