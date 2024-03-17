import {Preview} from "@storybook/react";
import {View} from "react-native";

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'centered'
    },
    decorators: [
        (Story) => {
            return (<View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Story/>
            </View>)
        }
    ],
};

export default preview;
