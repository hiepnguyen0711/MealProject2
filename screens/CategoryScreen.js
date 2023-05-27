import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGirdItem from "../components/CategoryGridItem";


function CategoryScreen({ navigation }){

    function renderCategoryItem(itemData){
        function ChangeMealScreenHandler(){
            navigation.navigate('meals', {
               'cateogyId': itemData.item.id} );
        }
        return(
            <CategoryGirdItem title={itemData.item.title} color={itemData.item.color} onPress={ChangeMealScreenHandler} />
        );
    }
    return(
        <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem} 
        numColumns={2}
        />
    );
}

export default CategoryScreen;