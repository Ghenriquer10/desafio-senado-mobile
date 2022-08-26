import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Senator from "../pages/Senator";
import Senators from "../pages/Senators";

const Stack = createNativeStackNavigator();

function RoutesApp(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="senators"
                component={Senators}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="senator"
                component={Senator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default RoutesApp;