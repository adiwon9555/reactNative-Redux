import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import CardItem from '../commons/CardItem';
import * as actions from '../../actions/listActions';

class ListItem extends Component {
    componentDidUpdate(){
        LayoutAnimation.spring();
    }
    renderDescription = () => {
        const {
            descriptionText
        } = styles;
        const { isExpandable, library } = this.props;
        if (isExpandable) {
            return (
                <CardItem>
                    <Text style={descriptionText}>{library.description}</Text>
                </CardItem>
            )
        }

    }
    render() {
        const { library, selectItem } = this.props;
        const {
            titleText
        } = styles;
        return (
            <View>
                <TouchableOpacity onPress={() => selectItem(library.id)}>
                    <CardItem>
                        <Text style={titleText}>{library.title}</Text>
                    </CardItem>
                </TouchableOpacity>
                {this.renderDescription()}
            </View>

        );
    }
}

const styles = {
    titleText: {
        fontSize: 20
    },
    descriptionText: {
        fontSize: 15
    }
}

mapStateToProps = (state, ownProps) => {
    return { isExpandable: state.selectedLibrary == ownProps.library.id }
}

export default connect(mapStateToProps, actions)(ListItem);
