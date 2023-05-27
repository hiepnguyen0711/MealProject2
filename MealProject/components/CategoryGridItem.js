import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function CategoryGirdItem({title, color, onPress}){
    
    
    return(
        <View style={[styles.container, {backgroundColor: color}]}>
            <TouchableOpacity style={styles.button} onPress={onPress} >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                    
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CategoryGirdItem;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 16,
        height:150,
        borderRadius: 12,
        
        elevation: 4,
        shadownColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    button:{
        flex: 1
    },
    innerContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        fontSize: 18,
        fontFamily: 'pacifico',
    }
})