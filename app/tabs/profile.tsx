import {SafeAreaView, Text} from "react-native";
import SafeViewAndroid from "@/styles/SafeViewAndroid";
import GroupCard from "@/components/GroupCard";

const IMAGE_URL =
  "https://ca-times.brightspotcdn.com/dims4/default/e47f09d/2147483647/strip/true/crop/2000x1333+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3e%2Fdd%2F533ccabf4d4682e3bc321865edcf%2Fcat-janice-3-2-2767.jpg";


const ProfileView = () => {
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <Text>Profile</Text>
            <GroupCard name="LTRLH" tagLine="A 75 Hard CHALLENGE!" avatarUrl={IMAGE_URL} memberCount={4} />
        </SafeAreaView>
    )
}

export default ProfileView;