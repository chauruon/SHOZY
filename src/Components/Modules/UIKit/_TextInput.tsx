import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform, TextInput, View } from 'react-native';
import MainConstants from '../../../Public/MainConstants';
// import { Icon } from 'native-base';
import { Icon } from "@native-base/icons";

type Props = {
    label?: string
    type?: 'string' | 'text'
    value?: string
    required?: boolean,
    numberOfLines?: number,
    onPress?: any,
    onChangeText?: any,
    placeholder?: string
    autoCapitalize?: 'sentences' | 'characters' | 'none' | 'words'
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad' | 'number-pad'
    secureTextEntry?: boolean,
    editable?: boolean,
    onSubmitEditing?: () => void
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send' | 'default'
    setRef?: (ref: any) => void
    onFocus?: () => void
}
type State = {
    focused: boolean,
    value: any,
    propsValue: any,
}

class _TextInput extends Component<Props> {

    defaultColor = MainConstants.DarkTextColor;
    defaultBorderColor = MainConstants.BorderColor;
    focusColor = MainConstants.RedColor5;
    ref = null;

    state = {
        value: this.props.value,
        propsValue: this.props.value,
        focused: false,
    }

    static defaultProps = {
        label: '',
        type: 'string',
        value: '',
        required: false,
        numberOfLines: 1,
        onPress: null,
        onChangeText: null,
        placeholder: '',
        autoCapitalize: 'none',
        keyboardType: 'default',
        secureTextEntry: false,
        editable: true,
        returnKeyType: 'default',
    };

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        if (prevState.value !== nextProps.value && prevState.propsValue !== nextProps.value) {
            return {
                value: nextProps.value,
                propsValue: nextProps.value,
            }
        }
        return null;
    }

    onChangeText = (text: String) => {
        let { onChangeText } = this.props;
        this.setState({ value: text });
        if (onChangeText) {
            onChangeText(text);
        }
    }

    render() {
        const { focused, value } = this.state;
        const { label, type, required, numberOfLines, onPress, autoCapitalize, keyboardType, placeholder, secureTextEntry, editable, onSubmitEditing, returnKeyType, setRef, onFocus } = this.props;
        const onFocusInput = () => {
            this.setState({ focused: true });
            onFocus && onFocus();
        }
        const onBlur = () => {
            this.setState({ focused: false });
        }

        const containerStyle = { borderColor: focused ? this.focusColor : this.defaultBorderColor };
        const labelStyle = {
            ...styles.label,
            color: focused ? this.focusColor : this.defaultColor
        };
        let inputStyle = {};
        if (type == 'text' || numberOfLines) {
            if (numberOfLines && numberOfLines > 1) {
                const additionalStyles = {
                    height: 40 + (numberOfLines - 1) * 14,
                };
                inputStyle = { ...inputStyle, ...additionalStyles };
            }
        }
        if (!editable) {
            const additionalStyles = {
                color: '#ccc',
            };
            inputStyle = { ...inputStyle, ...additionalStyles };
        }
        if (focused) {
            const additionalStyles = {
                color: 'black',
            };
            inputStyle = { ...inputStyle, ...additionalStyles };
        }
        const dropdownIconStyle = {
            ...styles.dropdownIcon,
            display: onPress ? 'flex' : 'none',
            color: onPress ? 'gray' : 'transparent',
        };

        return (
            <TouchableOpacity style={[styles.container, containerStyle]} onPress={editable ? onPress : null}>
                <View style={styles.labelContainer}>
                    <Text style={labelStyle}>{label} {required ? <Text style={styles.required}>*</Text> : null}</Text>
                </View>
                <TextInput style={[styles.input, inputStyle]}
                    autoCapitalize={autoCapitalize}
                    onFocus={onFocusInput}
                    onBlur={onBlur}
                    selectionColor={this.focusColor}
                    pointerEvents={onPress != null ? "none" : "auto"}
                    editable={editable ? (onPress != null ? false : true) : false}
                    multiline={numberOfLines && numberOfLines > 1 ? true : false}
                    numberOfLines={numberOfLines && numberOfLines > 1 ? numberOfLines : 1}
                    textAlignVertical={numberOfLines ? 'top' : 'center'}
                    value={value}
                    onChangeText={this.onChangeText}
                    ref={inputRef => { setRef && setRef(inputRef) }}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                    placeholderTextColor="#ddd"
                />
                <Icon name="caret-down" as = {'FontAwesome'} style = {styles.labelContainer} />
            </TouchableOpacity>
        )
    }
}

export default _TextInput;

const styles = StyleSheet.create({
    container: {
        padding: Platform.OS == 'ios' ? 2.5 : 0,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 15,
        justifyContent: 'center',
    },
    labelContainer: {
        position: 'absolute',
        top: -9,
        left: 10,
        justifyContent: 'center',
    },
    label: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: '700',
        fontSize: 12,
    },
    input: {
        padding: 7.5,
        marginTop: 7.5,
        fontSize: 14,
        textAlignVertical: 'center',
        fontWeight: '600',
        height: 40,
        color: MainConstants.DarkTextColor,
    },
    required: {
        color: 'red',
    },
    multiline: {
        lineHeight: 75,
    },
    dropdownIcon: {
        position: 'absolute',
        right: 10,
        fontSize: 12,
        color: 'gray',
    },
});
