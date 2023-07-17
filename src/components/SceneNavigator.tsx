import {
  ViroARSceneNavigator,
  ViroNode,
  ViroText,
} from '@viro-community/react-viro';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import VIRComp from './ViroScene.component';

const SceneNavigator = (props) => {
  function onInitialized(state, reason) {
    //console.log('guncelleme', state, reason);
    if (state === 3) {
    } else if (state === 1) {
      // Handle loss of tracking
    }
  }

  const SceneAR = () => {
    return <VIRComp onInitialized={onInitialized} props={props} />;
  };

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: SceneAR,
      }}
      style={styles.f1}
    />
  );
};
export default SceneNavigator;

var styles = StyleSheet.create({
  f1: { flex: 1 },
});
