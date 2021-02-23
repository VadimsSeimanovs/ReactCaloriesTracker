import { StyleSheet } from 'react-native'

const stylesFoodInformation = StyleSheet.create({
    container:{
        flex: 1,
    },
    scrollView:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    text:{
        backgroundColor: '#FFC107',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 16,
        fontWeight: 'normal'
    },
    textWithImage:{
        backgroundColor: '#FFC107',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        textAlign: 'center',
        textAlignVertical: "center",
        alignContent: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageStyles:{
        width: 200,
        height: 200
    }
});

export default stylesFoodInformation;