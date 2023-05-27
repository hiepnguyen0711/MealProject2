import { Image, Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailScreen({route, navigation }){
    const mealIds = route.params.mealId;
    const displayDetail = MEALS.find((meal) => meal.id === mealIds)

    function headerButtonPressHandler(){
        console.log('abc');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler]);
    

    return(
        <View style={styles.container} >
            <Text style={styles.title} > {displayDetail.title}</Text>
            <Image source={{uri: displayDetail.imageUrl }} style={styles.imgURL} />
            <View style={styles.item} ><Text style={styles.duration} > {displayDetail.affordability} </Text></View>
            <View style={styles.item} ><Text style={styles.duration} > {displayDetail.duration} </Text></View>
            <View style={styles.item} ><Text style={styles.duration} > {displayDetail.complexity} </Text></View>
            <View style={styles.item} ><Text style={styles.duration} > {displayDetail.ingredients} {displayDetail.steps}</Text></View>
            

        </View>
    );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
       overflow: 'hidden'
    },
    title:{
        fontFamily: 'pacifico',
        fontSize: 24,
        textAlign:'center',
        marginBottom: 5
    },
    imgURL:{
        height: 200,
    },
    item:{
        borderRadius: 16,
        backgroundColor: 'black',
        padding: 4,
        marginVertical: 8
    },
    duration:{
        
        textAlign: 'center',
        color: 'white',
        
    }
});