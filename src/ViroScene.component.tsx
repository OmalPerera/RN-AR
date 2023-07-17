import {
  Viro3DObject,
  ViroARPlaneSelector,
  ViroARScene,
  ViroAmbientLight,
  ViroText,
} from '@viro-community/react-viro';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Simple3DObject from './components/V3DObjects';
import {modelItems} from './model/ModelItems';

const VIRComp = props => {
  const {navigation, route, onInitialized} = props;

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {/* <ViroText
      text={'HELLO AR **'}
      scale={[0.5, 0.5, 0.5]}
      position={[0, 0, -1]}
      style={styles.helloWorldTextStyle}
    /> */}
      <ViroAmbientLight color={'#aaaaaa'} />
      <ViroARPlaneSelector alignment={'Horizontal'} maxPlanes={3}>
        <Simple3DObject object={modelItems[0]} />
      </ViroARPlaneSelector>
    </ViroARScene>
  );
};
export default VIRComp;

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
