/*
 Tempat style secara global
 Date Created       : 11 Agustus 2018
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi
*/

import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import Colors from './Colors';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Dimensi from './Dimensions';
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;


const ratio_x = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratio_y = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const base_unit = 16;
const unit = base_unit * ratio_x;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

// We add an em() shortcut function 
function em(value) {
    return unit * value;
}

export default Styles = StyleSheet.create({
    container_no_header: {
        flex: 1,
        ...ifIphoneX({
            marginTop: 40,
        }, {
                marginTop: 20
            })
    },
    container: {
        flex: 1,
    },
    container_center: {
        flex: 1,
        justifyContent: 'center'
    },
    container_center_map: {
        backgroundColor: Colors.black
    },
    form_input_standart_input_style: {
        width: '100%',
        color: Colors.black,
        marginVertical: 2
    },
    form_half_input_style: {
        width: '100%',
        color: Colors.black,
        marginVertical: 2
    },
    form_half_half_input_style: {
        width: '80%',
        color: Colors.black,
    },
    // form_input_standart_container_style: {
    //     borderBottomWidth: 0.8,
    //     borderWidth: 1,
    //     borderRadius: 3,
    //     paddingLeft: 10,
    //     paddingRight: 5,
    //     borderBottomColor: Colors.black,
    //     marginTop: 3,
    // },
    form_input_standart_container_style: {
        marginTop: 20,
    },
    datePicker_text: {
        fontSize: 14,
        marginLeft: 20,
        borderWidth: 0,
        color: '#121212',
        marginTop: 5,
        marginBottom: -35,
        paddingHorizontal: -2,
        marginHorizontal: em(1),
    },
    separator_line: {
        backgroundColor: '#BDBDBD',
        width: x - em(1.5) * 1,
        height: 1,
        marginBottom: em(1),
        marginTop: em(3),
        marginHorizontal: em(1),
    },
    separator_line_margin_horizontal_20: {
        backgroundColor: '#BDBDBD',
        flex: 1,
        height: 0.8,
        marginHorizontal: 20
    },
    avatar_container: {
        marginTop: 10,
        // borderColor: '#9B9B9B',
        // borderWidth: 1.5,
        // backgroundColor : '#C9D3DB',
        // flex: 1,
        // flexDirection: 'row',
        // paddingLeft:35,
        // paddingRight:35,
        // alignItems: 'center',
        // justifyContent: 'flex-start'
        marginTop: 5,
        width: (x - em(1.5) * 1) * 0.5,
        marginBottom: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    side_bar_default: {
        width: (x - em(1.5) * 1) * 0.25
    },
    avatar: {
        width: 150,
        height: 150
    },
    avatar_icon: {
        top: y / 6.5, position: 'absolute', right: x / 45, backgroundColor: "#ffffff", justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 40
    },
    text_change_picture: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 14,
    },
    loading_picture: {
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
    },
    upload_picture: {
        marginTop: 14,
        borderColor: '#9B9B9B',
        borderWidth: 1.5,
        backgroundColor: '#C9D3DB',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(40),
        height: responsiveWidth(40)
    },
    button_change: {
        marginTop: 14,
        //width : x/6,
        width: x - em(1.25) * 10,
        backgroundColor: '#1DB6B7',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 12,
        marginLeft: 20
    },
    button_pin: {
        marginTop: 14,
        width: responsiveWidth(100),
        backgroundColor: Colors.light_grey,
        borderRadius: 20,
        marginBottom: 10
    },
    button_text: {
        fontSize: 14,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',

    },
    picker_default: {
        marginLeft: 20,
        width: x / 2
    },
    picker_default_time: {
        marginLeft: 5,
        width: x / 3
    },
    picker_default_education: {
        marginLeft: 20,
        width: responsiveWidth(70)
    },
    icon_default: {
        width: (x - em(1.5) * 1) * 0.20,
    },
    text_option_default: {
        width: (x - em(1.5) * 1) * 0.80,
        justifyContent: 'center',
        fontFamily: 'Lato-Regular',
    },
    search_input_multiselect: {
        width: (x - em(1.5) * 2.5) * 0.5,
    },
    multi_half_box: {
        width: (x - em(1.5) * 2.5) * 0.2,
        marginLeft: 20,
        marginTop: 5,
        marginRight: 15
    },
    multi_half_box: {
        width: (x - em(1.5) * 2.5) * 0.2,
        marginLeft: 20,
        marginTop: 5,
        marginRight: 15
    },
    dropdown_address: {
        width: responsiveWidth(90),
        marginLeft: 20,
        marginTop: 5,
        marginRight: 15
    },
    multi_other_half_box: {
        width: x / 1.5,
        marginTop: 5,
    },
    form_label_multiselect: {
        marginRight: 50
    },
    status_bar: {
        height: STATUSBAR_HEIGHT,
    },
    app_bar: {
        backgroundColor: Colors.color_light_grey,
        height: APPBAR_HEIGHT,
    },
    app_bar_white: {
        backgroundColor: Colors.white,
        height: APPBAR_HEIGHT,
    },
    content_top_bar: {
        flex: 1,
        backgroundColor: Colors.color_light_grey,
    },
    map_view: {
        flex: 1,
        width: responsiveWidth(100),
        height: responsiveWidth(50),
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    default_button_touchable_opacity: {
        backgroundColor: Colors.default_color,
        width: 200,
        height: 45,
        borderRadius: Dimensi.default_border_radius,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    default_button_touchable_opacity_modal: {
        backgroundColor: Colors.default_color,
        width: 100,
        borderRadius: Dimensi.default_border_radius,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    default_button_touchable_opacity_comment: {
        backgroundColor: Colors.default_color,
        width: 70,
        height: 35,
        borderRadius: Dimensi.default_border_radius,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    default_button_card_touchable_opacity_blue: {
        backgroundColor: Colors.default_color,
        width: responsiveWidth(43),
        height: 30,
        borderRadius: Dimensi.default_border_radius,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    default_button_card_schedule_opacity_blue: {
        backgroundColor: Colors.default_color,
        width: responsiveWidth(40),
        height: 30,
        borderRadius: Dimensi.default_border_radius,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    default_button_card_schedule: {
        backgroundColor: Colors.badge_grey,
        width: responsiveWidth(90),
        height: 30,
        borderRadius: Dimensi.default_border_radius,
    },
    default_button_card_touchable_opacity_black: {
        backgroundColor: Colors.default_button_black,
        width: responsiveWidth(43),
        height: 30,
        borderRadius: Dimensi.default_border_radius,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    default_button_card_schedule_opacity_black: {
        backgroundColor: Colors.default_button_black,
        width: responsiveWidth(40),
        height: 30,
        borderRadius: Dimensi.default_border_radius,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    default_button_circle_opacity_blue: {
        backgroundColor: Colors.default_color,
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        borderRadius: responsiveWidth(20)/2,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    default_font_button: {
        color: Colors.white,
        fontSize: responsiveFontSize(2),
        fontFamily: 'Lato-Regular',
    },
    default_font_button_comment: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'Lato-Regular',
    },
    default_font_button_card: {
        color: Colors.white,
        fontSize: responsiveFontSize(2),
        fontFamily: 'Lato-Regular',
    },
    default_font_button_schedule: {
        color: Colors.grey,
        fontSize: responsiveFontSize(2),
        fontFamily: 'Lato-Regular',
    },
    circle_first_screen: {
        width: responsiveWidth(180),
        height: responsiveWidth(180),
        borderRadius: responsiveWidth(170) / 2,
        backgroundColor: Colors.default_color
    },
    default_button_blue: {
        marginTop: 10,
        backgroundColor: Colors.default_button_blue,
        borderRadius: 50,
        // borderWidth: 2,
        width: responsiveWidth(50),
        // borderColor: Colors.default_button_blue,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        fontFamily: 'Lato-Regular'
    },
    
    default_button_black: {
        marginTop: 10,
        backgroundColor: Colors.default_button_black,
        borderRadius: 50,
        // borderWidth: 2,
        width: responsiveWidth(50),
        // borderColor: Colors.default_button_black,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        fontFamily: 'Lato-Regular'
    },
    image_slider: {
        height: responsiveWidth(100),
        width: responsiveWidth(100),
    },
    text_slider: {
        color: Colors.default_color,
        fontFamily: 'Lato-Regular',
        textAlign: 'center'
    },
    button_circle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    active_dot_style: {
        backgroundColor: Colors.black,
    },
    image_center: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    image_circle: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
        alignSelf: 'center',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4,
        marginTop: '15%',
    },
    text_nama: {
        marginTop: 10,
        fontSize: responsiveFontSize(3),
        fontWeight: '500',
        fontFamily: 'Lato-Regular',
    },
    text_location: {
        marginLeft: 10,
        fontSize: responsiveFontSize(2),
        fontFamily: 'Lato-Regular',
    },
    separator_line: {
        backgroundColor: 'rgba(0,0,0, 0.2)',
        width: responsiveWidth(100),
        height: 0.7,
        marginBottom: '4%',
        marginTop: '4%'
    },
    bio_profile_text: {
        marginLeft: 20,
        fontSize: responsiveFontSize(1.8),
        color: Colors.black,
        fontFamily: 'Lato-Regular',
    },
    bio_profile_description: {
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
        fontSize: responsiveFontSize(1.6)
    },
    skill: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    skill_style: {
        backgroundColor: Colors.default_card, marginLeft: 10,
    },
    accept_style: {
        backgroundColor: Colors.green_emerald,
    },
    schedule_style: {
        backgroundColor: Colors.default_card
    },
    reschedule_style: {
        backgroundColor: Colors.default_card,
        width: responsiveWidth(90)
    },
    cancel_style: {
        backgroundColor: Colors.grey
    },
    skill_text: {
        color: Colors.default_button_blue,
        fontFamily: 'Lato-Regular',
    },
    white_text: {
        color: Colors.white,
        fontFamily: 'Lato-Regular',
    },
    grey_text: {
        color: Colors.grey,
        fontFamily: 'Lato-Regular',
    },
    name_schedule :{
        color : Colors.black,
        fontSize : responsiveFontSize(1.5),
    },
    certification_list: {
        width: responsiveWidth(80)
    },
    certification_delete: {
        width: responsiveWidth(10)
    },
    selfView_video_call: {
        width: responsiveWidth(30),
        height: responsiveHeight(30),
        borderRadius: 10,
    },
    remoteView_video_call: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
    },
    container_video_call: {
        flex: 1,
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        backgroundColor: Colors.white,
    },
    welcome_video_call: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'Lato-Regular',
    },
    listViewContainer_video_call: {
        height: 150,
    },
    circleIcon_videl_call: {
        width: responsiveWidth(10),
        height: responsiveHeight(10),
        borderRadius: responsiveWidth(10) / 2,
    },
    InputSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Dimensi.default_padding_20
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.white,
        color: Colors.default_line_color,
    },
    input_flag: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.white,
        color: Colors.default_line_color,
        marginTop:30
    },
    default_button_card_touchable_opacity_sorting: {
        backgroundColor: Colors.default_color,
        width: responsiveWidth(15),
        height: 27,
        borderRadius: 3,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    header_contract : {
        marginTop:20,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body_contract:{
        marginHorizontal:20
    },
    body_contract2:{
        marginLeft:10
    },
    body_contract3: {
        marginLeft:10
    },
    text_standar_contract:{
        color:'black',fontSize:12,textAlign:'justify',fontFamily: 'Lato-Regular',
    },
    text_bold_contract:{
        color:'black',fontSize:13,fontWeight:'bold',marginTop:10,alignItems:'center',fontFamily: 'Lato-Regular',
    },
    text_bold_text_contract:{
        color:'black',fontSize:12,textAlign:'justify',fontWeight: "bold",fontFamily: 'Lato-Regular',
    },
    container_activity_indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
     },
     activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 30,
        width: 30,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
      },
      modalBackgroundView:{
        backgroundColor:'#00000000',
        width:responsiveWidth(100),
        marginTop: 56,
        marginLeft : -1,
        marginRight: -20,
        marginBottom : -20
      },
      textFontFamily: {
        fontFamily: 'Lato-Regular',
      },
      gambar_card: {
        height: 50,
        width: 50,
        borderRadius: 100,
        marginLeft: 10,
        marginRight: 10,
      },
      headerButton: {
        height: 44,
        width: 44,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});