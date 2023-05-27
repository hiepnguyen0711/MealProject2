import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({icon, color, onPress }){
    return(
        <TouchableOpacity onPress={onPress} >
            <Ionicons name={icon} size={24} color={color} style={styles.icon} />
        </TouchableOpacity>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    icon:{
        marginHorizontal: 8
    }
})