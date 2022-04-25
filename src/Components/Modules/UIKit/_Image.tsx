import React, { PureComponent } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';




const ErrorImage = require('../../../Assets/error_image.png');

type Props = {
    source?: any,
    resizeMode?: "center" | "contain" | "cover" | "stretch"
    width: number,
    height: number,
    style?: object,
    containerStyle?: object,
}

export class _Image extends PureComponent<Props> {

    state = {
        loaded: false,
        source: this.props.source,
    }

    static defaultProps = {
        resizeMode: 'cover',
        source: null,
        style: {},
        containerStyle: {},
    }

    render() {
        const { loaded, source } = this.state;
        const { width, height, style, resizeMode, containerStyle } = this.props;
        const imageStyles = {
            ...style,
            width: width,
            height: height,
            resizeMode: resizeMode,
        };
        const imageContainerStyles = {
            ...containerStyle,
        }
        const loadingContainerStyle = {
            ...styles.loadingContainer,
            width: width,
            height: height,
        };
        const onLoad = () => { this.setState({ loaded: true }) };
        const onError = () => { this.setState({ source: ErrorImage }) };
        const LoadingImageView = () => {
            if (loaded) {
                return null;
            }
            return (
                <View style={loadingContainerStyle}>
                    <ActivityIndicator size="large" color="gray" />
                </View>
            )
        }

        return (
            <View style={imageContainerStyles}>
                <FastImage source={source} style={imageStyles} onLoadEnd={onLoad} onError={onError} />
                <LoadingImageView />
            </View>
        )
    }
}

export default _Image;

const styles = StyleSheet.create({
    loadingContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
