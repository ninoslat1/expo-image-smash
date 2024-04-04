import { StyleSheet, Image } from "react-native";

export const ImageViewer = ({placeholderImage}) => {
    return (
        <Image source={placeholderImage} style={style.image}/>
    )
}

const style = StyleSheet.create({
    image: {
        width: 320,
        height: 480,
        borderRadius: 20,
      }
})