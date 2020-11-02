import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { SimpleLineIcons } from 'react-native-vector-icons';

export default function News() {
    const [news, setNews] = useState([
        {
            photo: require("../assets/images/photo_01.png"),
            author: "Dawid Janus",
            when: "2 października 2020",
            location: "Polska",
            image: require("../assets/images/image_01.png"),
            text: "Plazmafereza to zabieg polegający na pobraniu od dawcy jedynie płynnej części krwi zwanej osoczem. Oprócz wody, która jest głównym składnikiem osocza, zawiera ono również związki organiczne i nieorganiczne, takie jak białka, kwasy tłuszczowe, glukozę, witaminy i sole mineralne.",
            key: "1"
        },
        {
            photo: require("../assets/images/photo_02.png"),
            author: "Patrycja Gut",
            when: "13 czerwca 2020",
            location: "Polska",
            image: require("../assets/images/image_02.png"),
            text: "Erytrafereza jest to zabieg polegający na pobraniu od dawcy krwinek czerwonych przy użyciu separatora komórkowego. Zabieg trwa ok. 1 godziny. Zestaw urządzenia podłączony jest do układu krwionośnego dawcy za pomocą jednego wkłucia dożylnego. Aparat pracuje cyklicznie.",
            key: "2"
        },
        {
            photo: require("../assets/images/photo_03.png"),
            author: "Mateusz Toczek",
            when: "27 maja 2020",
            location: "Polska",
            image: require("../assets/images/image_03.png"),
            text: "Tromboafereza polega na pobraniu od dawcy tylko krwinek płytkowych (trombocyty). W tym wypadku płytki krwi, które przepływając przez separator uległy oddzieleniu od krwi które są gromadzone w oddzielnym jałowym pojemniku, natomiast krwinki czerwone i osocze zwracane są dawcy.",
            key: "3"
        },
        {
            photo: require("../assets/images/photo_04.png"),
            author: "Bartosz Pawlak",
            when: "10 marca 2020",
            location: "Polska",
            image: require("../assets/images/image_04.png"),
            text: "Leukafereza polega na pobraniu od dawcy krwi pełnej do separatora, oddzieleniu krwinek białych (leukocytów), a następnie cyklicznym zwracaniu pozostałych składników jak krwinki czerwone, płytki krwi oraz osocze do krwiobiegu człowieka.",
            key: "4"
        }
    ]);
    return (
        <>
            {news.map((item) => {
                return (
                    <View style={styles.post} key={item.key}>
                        <View style={styles.author}>
                            <Image
                                style={styles.authorImg}
                                source={item.photo}
                            />
                            <View style={styles.authorInfo}>
                                <Text style={styles.authorName}>{item.author}</Text>
                                <Text style={styles.authorLocation}><SimpleLineIcons style={styles.authorIcon} name="clock" /> {item.when} <SimpleLineIcons style={styles.authorIcon} name="location-pin" /> {item.location}</Text>
                            </View>
                        </View>
                        <Image
                            style={styles.postImg}
                            source={item.image}
                        />
                        <View style={styles.content}>
                            <View style={styles.contentIcons}>
                                <TouchableOpacity style={styles.contentIconContainer}>
                                    <SimpleLineIcons style={styles.contentIcon} name="heart" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contentIconContainer}>
                                    <SimpleLineIcons style={styles.contentIcon} name="share" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contentIconContainer}>
                                    <SimpleLineIcons style={styles.contentIcon} name="bubble" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.contentText}>{item.text}</Text>
                        </View>
                    </View>
                )
            })}
        </>
    );
}

const styles = StyleSheet.create({
    post: {
        marginTop: 5,
        paddingVertical: 10,
    },
    postImg: {
        height: 275,
        width: '100%',
        resizeMode: 'cover',
        marginVertical: 15,
    },
    author: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    authorImg: {
        borderRadius: 50,
    },
    authorInfo: {
        marginLeft: 15,
    },
    authorName: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: '#0a0819',
    },
    authorLocation: {
        fontFamily: 'MontserratRegular',
        fontSize: 8,
        color: '#d1d1d1',
        marginTop: 1.5,
    },
    authorIcon: {
        fontSize: 8,
        color: '#d1d1d1',
    },
    content: {
        paddingHorizontal: 30,
    },
    contentIcons: {
        flexDirection: 'row',
    },
    contentIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 100,
        marginRight: 7.5,
        padding: 7.5,
    },
    contentIcon: {
        fontSize: 16,
        color: '#a4a4a4',
    },
    contentText: {
        fontFamily: 'MontserratRegular',
        color: '#76848b',
        marginTop: 10,
    },
});