import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Link} from "expo-router";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Link href="/tabs" asChild>
          <Pressable>
            <Text style={styles.text}>COHESION</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 35,
    fontWeight: '500',
  },
});

export default HomeScreen;
