import {SafeAreaView, Text} from "react-native";
import SafeViewAndroid from "@/styles/SafeViewAndroid";

const ProfileView = () => {
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <Text>Profile</Text>
        </SafeAreaView>
    )
}

export default ProfileView;