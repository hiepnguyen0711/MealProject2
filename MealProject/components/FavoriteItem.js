import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function FavoriteItem({ title, imageUrl, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} >
                <Image source={{ uri: imageUrl }} style={styles.imgUrl} />
                <Text style={styles.title} >{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FavoriteItem;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 12,
        elevation: 8,
        margin: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.4,
        padding: 8
    },
    imgUrl:{
        height: 200,
    },
    title:{
        fontFamily: 'pacifico',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 4
    }
});