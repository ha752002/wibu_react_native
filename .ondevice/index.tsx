import * as React from 'react';
import {getStorybookUI} from "@storybook/react-native";
import {Provider} from 'react-redux';
import {store} from "../src/store";

const StorybookUIRoot = getStorybookUI({onDeviceUI: true, port: 7070});

const Index = () => {
    return (
        <Provider store={store}>
            <StorybookUIRoot/>
        </Provider>
    );
}

export default Index
