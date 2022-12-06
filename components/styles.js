import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#012d90",
    green: "#10B981",
    red: "EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const PageLogo = styled.Image`
    width: 200px;
    height: 75px;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`

export const Subtitle = styled.Text`
    font-size:20px;
    margin-bottom; 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`

export const StyledFormArea = styled.View`
    width: 90%;
`