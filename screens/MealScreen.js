import { View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsGridItem from "../components/MealsGridItem";

function MealScreen({route, navigation}){
    const categoryId = route.params.cateogyId;

   const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
   });

  

   function renderMealItem(itemData){
    function DetaiScreenHanler(){
        navigation.navigate('detail', {
            mealId: itemData.item.id
        });
   }
        return(
            <MealsGridItem image={itemData.item.imageUrl} title={itemData.item.title} onPress={DetaiScreenHanler} />
        );
   }
    return(
        <View>
            <FlatList
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealScreen;