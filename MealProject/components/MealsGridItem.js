import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

function MealsGridItem({ image, title, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} >
            <View style={styles.innerContainer}>
                <Image source={{ uri: image }} style={styles.img} />
            </View>
            <View style={styles.innerText}>
                <Text style={styles.title}>{title}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
}

export default MealsGridItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        elevation: 4,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: "hidden",
        padding: 8,
        backgroundColor: 'white'
    },
    innerContainer: {
        flex: 1
    }
    ,
    img: {
        flex: 1,
        height: 200,
        
    },
    innerText:{
        flex: 1
    },
    title:{
        fontSize: 18,
        fontFamily: 'pacifico',
        textAlign: 'center'
    }
})