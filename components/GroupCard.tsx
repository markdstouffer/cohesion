import { Card, Text, View, Avatar } from "react-native-ui-lib";
import { StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

type GroupCardProps = {
  name: string;
  tagLine: string;
  memberCount: number;
  avatarUrl: string;
};

const GroupCard = (props: GroupCardProps) => {
    
    const { name, tagLine, memberCount, avatarUrl } = props;

    return (
    <View>
      <Card margin padding style={styles.card}>
        <Avatar
          imageStyle={{ borderColor: "black", borderWidth: 1 }}
          size={60}
          source={{ uri: avatarUrl }}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              paddingVertical: 0,
              fontFamily: "Moulpali",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#7D7D7D",
              fontFamily: "Moulpali",
            }}
          >
            {tagLine}
          </Text>
        </View>
        <Text style={styles.members}>{memberCount} Members</Text>
        <AntDesign
          name="caretright"
          style={{ position: "absolute", right: 8, bottom: 8 }}
          size={10}
          color="black"
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    paddingLeft: 15,
    flexDirection: "row",
    fontFamily: "Moulpali",
    gap: 20,
    padding: 10,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#F0F4FF",
    height: 100,
  },
  members: {
    color: "#7D7D7D",
    position: "absolute",
    right: 10,
    top: 6,
    fontSize: 12,
    fontFamily: "Moulpali",
  },
});

export default GroupCard;
