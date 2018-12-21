import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, StatusBar, Image, TouchableOpacity, ScrollView, ActivityIndicator, TextInput, AsyncStorage, FlatList } from 'react-native';
import * as HomeActions from './HomeActions';
import String_local_storage from '../../configs/String_local_storage';
import { connect } from 'remx';
import { HomeStore } from './HomeStore';
import Colors from '../../styles/Colors';
import { ImageBackground, Tile, Title, Subtitle, ListView, Screen, Divider } from '@shoutem/ui';
import { List, ListItem, SearchBar } from "react-native-elements";
import {NavigationEvents} from 'react-navigation';

const ClassName = "HomeScreen : ";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loading: true,
            // token : AsyncStorage.getItem(String_local_storage.user_login_token),
            // user_id : AsyncStorage.getItem(String_local_storage.user_login_id),
        }
        this.renderRow = this.render_room.bind(this);
    }

    componentDidMount() {
        // const token = await AsyncStorage.getItem(String_local_storage.user_login_token);
        // const user_id = await AsyncStorage.getItem(String_local_storage.user_login_id);
        // HomeActions.set_initialize();
        // await HomeActions.get_room_list(this.state.token, this.state.user_id);

        this.show_room_list();

        this.penjumlahan(3,3);
    }

    penjumlahan(a, b) {
        for (var x = 0; x < 50; x++) {
            var val_return = "a";
            var tot_val = 0;
            for (var i = 0; i < (a + b); i++) {
                var s = (Math.floor((Math.random() * 2) + 1));
                // console.log("Nilai S : " , s);
                for (j = 0; j < s; j++) {
                    if (tot_val < (a + b)) {
                        // console.log("tot_val : " + tot_val.toString() + " a+b " + (a+b).toString());
                        console.log("NILAI ADALAH : " + val_return);
                    }
                    tot_val++;
                }
                val_return == "a" ? val_return = "b" : val_return = "a";
                // tot_val = tot_val + s;
            }
            console.log("--------------------------");
        }
    }

    async show_room_list() {
        const token = await AsyncStorage.getItem(String_local_storage.user_login_token);
        const user_id = await AsyncStorage.getItem(String_local_storage.user_login_id);
        HomeActions.set_initialize();
        await HomeActions.get_room_list(token, user_id);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.room_list) {
            // this.setState({ is_loading: false });
            // console.log(ClassName, " Value is_loading ", this.state.is_loading);
        }
    }

    render_room(room) {
        {console.log("DATA " ,room)}
        {console.log("DATA lastMessage " ,room.item.hasOwnProperty('lastMessage'))}
        return (
            <ListItem
                onPress = {() => {this.props.navigation.navigate("PageChatRoom", {
                    room_id : room.item._id
                })}}
                title={room.item.name}
                subtitle={room.item.hasOwnProperty('lastMessage') ? room.item.lastMessage.msg : "Belum Ada Pesan"}
                containerStyle={{ borderBottomWidth: 0 }}
            // avatar={{ uri: item.picture.thumbnail }}
            />
        );
    }

    // render() {
    //     return (
    //         <View style={{
    //             flex: 1
    //         }}>
    //             <NavigationEvents
    //                 // onWillFocus={payload => console.log('will focus', payload)}
    //                 onDidFocus={payload => {
    //                     console.log('did focus', payload);
    //                     if(payload.lastState.routeName == "PageDrawerHome") {
    //                         console.log("MASUK")
    //                         this.show_room_list();
    //                     }
    //                 }}
    //                 // onWillBlur={payload => console.log('will blur', payload)}
    //                 // onDidBlur={payload => console.log('did blur', payload)}
    //             />
    //             {
    //                 this.props.is_loading == false ?
    //                     <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>
    //                         <FlatList
    //                             data={this.props.room_list}
    //                             showsVerticalScrollIndicator={false}
    //                             renderItem={this.renderRow}
    //                             keyExtractor={item => item._id}
    //                         />
    //                     </List>
    //                     :
    //                     <View style={{
    //                         flex: 1,
    //                         alignItems: 'center',
    //                         justifyContent: 'center',
    //                     }}>
    //                         <ActivityIndicator size="large" color={Colors.grey} />
    //                     </View>
    //             }
    //         </View>
    //     )
    // }

    render() {
        return (
            <View>

            </View>
        )
    }
}

function mapStateToProps(ownProps) {
    return {
        room_list: HomeStore.get_room_list(),
        is_loading: HomeStore.get_is_loading()
    }
}

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    email: {
        color: 'red'
    }

});
