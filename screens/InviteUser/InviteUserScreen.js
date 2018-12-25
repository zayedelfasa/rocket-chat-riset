import React, { Component } from 'react';
import { Platform, StyleSheet, View, Alert, StatusBar, Image, TouchableOpacity, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Styles from '../../styles/Styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../styles/Colors';
import * as InviteUserActions from './InviteUserActions';
import { InviteUserStore } from './InviteUserStore';
import { connect } from 'remx';
import { Examples, Title, TextInput, Button, Text } from '@shoutem/ui';
import String_local_storage from '../../configs/String_local_storage';
import { NavigationEvents } from 'react-navigation';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const getNameClass = "InviteUserScreen : ";

const items = [
    {
        name: "Fruits",
        id: 0
    },
    {
        name: "Gems",
        id: 1
    },
    {
        name: "Plants",
        id: 2
    },
]

class InviteUserScreen extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            user_room: "",
            selectedItems: [],
            room_id: navigation.getParam("room_id", null)
        }
        console.log(getNameClass + " room_id : " + navigation.getParam("room_id", null));
        InviteUserActions.initialize_all_store();
    }

    handleEmail = (text) => {
        this.setState({ user_room: text })
    }

    componentWillReceiveProps(newProps) {
        // console.log("DATA componentWillReceiveProps", newProps.stat_login);
        // if (!newProps.stat_loading) {
        //     this.props.navigation.goBack();
        // }
        let selectedItems = [];
        console.log("DATA componentWillReceiveProps", JSON.stringify(newProps.user_on_group));
        for (let key in newProps.user_on_group) {
            console.log(getNameClass + " ARRAY VALUE " + newProps.user_on_group[key].name);
            selectedItems.push(newProps.user_on_group[key].name);
        }
        this.setState({ selectedItems });
    }

    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
        console.log(getNameClass + " onSelectedItemsChange selectedItems : " + this.state.selectedItems);
    }

    on_invite_new_user = async () => {
        const user_id = await AsyncStorage.getItem(String_local_storage.user_login_id);
        const user_token = await AsyncStorage.getItem(String_local_storage.user_login_token);
        InviteUserActions.fetch_invite_user(user_token, this.state.room_id, user_id, this.state.selectedItems);
    }

    async componentDidMount() {
        const username = await AsyncStorage.getItem(String_local_storage.user_login_id);
        const user_token = await AsyncStorage.getItem(String_local_storage.user_login_token);
        InviteUserActions.fetch_user_list(user_token, username);
        InviteUserActions.fetch_user_list_on_group(user_token, username, this.state.room_id);
        console.log(getNameClass + " all user : " + InviteUserStore.get_response_all_user());
    }

    render() {
        return (
            <View style={styles.container}>
                <Title>Add New User</Title>
                {
                    this.props.user_list == null ?
                        null
                        :
                        <SectionedMultiSelect
                            items={this.props.user_list.users}
                            uniqueKey='_id'
                            selectText='Choose User'
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={this.state.selectedItems}
                        />
                }
                <View style={{ marginTop: 10 }}>
                    <Button styleName="secondary" onPress={this.on_invite_new_user}>
                        <Text>Invite</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

function mapStateToProps(ownProps) {
    return {
        user_list: InviteUserStore.get_response_all_user(),
        user_on_group: InviteUserStore.get_response_user_on_group()
    }
}

export default connect(mapStateToProps)(InviteUserScreen);
// export default InviteUserScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    input: {
        marginBottom: 5
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})