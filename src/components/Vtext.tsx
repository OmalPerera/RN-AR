import { ViroNode, ViroText } from '@viro-community/react-viro';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const VTextComponent = (props) => {
  return (
    <ViroText
      text={'HELLO AR **'}
      scale={[0.5, 0.5, 0.5]}
      position={[0, 0, -1]}
      style={styles.helloWorldTextStyle}
    />
  );
};
export default VTextComponent;

var styles = StyleSheet.create({});
