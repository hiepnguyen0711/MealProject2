import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import FavoriteItem from "../components/FavoriteItem";

function FavoriteScreen({navigation}){
    
    const favoriteIds =  useSelector( (state) => state.favoriteMeals.ids );
    const favoriteList = MEALS.filter((meal) => favoriteIds.includes(meal.id) )

    if(favoriteList.length === 0){
        return(
            <View style={styles.container}>
                <Text style={styles.content} >Không có món ăn nào được yêu thích</Text>
            </View>
        );
    }
    function renderFavoriteItem(itemData){
        function DetailMealScreenHandler(){
            navigation.navigate('detail', {
                mealId: itemData.item.id
            })
        }
        return <FavoriteItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} onPress={DetailMealScreenHandler} />
    }

    return(
        <FlatList data={favoriteList} keyExtractor={(item) => item.id} renderItem={renderFavoriteItem} />
    );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    },
    content:{
        textAlign: 'center',
        color: 'black',
        fontSize: 24,
        fontFamily: 'pacifico'
    }
});