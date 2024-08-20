import {useColorScheme} from "@/hooks/useColorScheme";
import {Tabs} from "expo-router";
import {Colors} from "@/constants/Colors";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";

const TabLayout = () => {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                headerStyle: {
                    backgroundColor: 'red'
                }
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Groups',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabLayout;