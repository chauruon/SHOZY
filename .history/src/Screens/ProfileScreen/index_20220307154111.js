import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import styles from './styles';

class AppleStyleSwipeableRow  {
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Archive
        </Animated.Text>
      </RectButton>
    );
  };
  render() {
    return (
      <Swipeable renderLeftActions={this.renderLeftActions}>
        <Text>"hello"</Text>
      </Swipeable>
    );
  }
}

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      
    </View>
  );
};

export default ProfileScreen;
