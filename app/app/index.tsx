import { useState } from 'react';
import {Image, Pressable, TextInput, View} from 'react-native';
import { StyleSheet } from 'react-native'; 

const App = () => {

    const [search, setSearch] = useState("")

    const openNavbar = () => {
        alert("Open navbar")
    }

    return(
        <View style={styles.container}>
            {/* Navbar with popUpUser */}
            <View  style={styles.boxNavbar}>
                <Pressable style={styles.navbar} onPress={() => openNavbar()}>
                    <Image style={styles.user} source={require(
                    '../assets/user.png',
                    )}></Image>
                </Pressable>
            </View>
            {/* Logo */}
            <View style={styles.boxLogo}>
                <Image style={styles.logo} source={require(
                '../assets/google.webp',
                )}></Image>
            </View>
            {/* Search and subcontents section */}
            <View style={styles.boxContent}>
                <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search"
                placeholderTextColor="#838383"
                style={styles.input}
                />
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        paddingBottom: 25,
        gap: 10,
    },
    boxLogo: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 240,
        height: 80,
    },
    boxNavbar: {
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: 20,
        marginTop: 20
    },
    navbar: {
        borderRadius: 50,
        overflow: 'hidden',
    },
    user: {
        width: 50,
        height: 50,
    },
    input: {
        backgroundColor : "#e0e0e0",
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 24,
        marginBottom: 20,
        width: "90%",
        fontWeight: "600"
    },
    boxContent: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    }
})