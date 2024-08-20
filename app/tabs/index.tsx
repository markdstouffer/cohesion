import {SafeAreaView, Text} from "react-native";
import SafeViewAndroid from "@/styles/SafeViewAndroid";

const GroupsView = () => {
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <Text>Groups</Text>
        </SafeAreaView>
    )
}

export default GroupsView;