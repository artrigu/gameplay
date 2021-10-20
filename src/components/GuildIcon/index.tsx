import React from "react";
import { Image } from 'react-native';

import { styles } from "./styles"


export function GuildIcon() {
    const uri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1280px-Valorant_logo_-_pink_color_version.svg.png'
    return (

        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />


    )
}