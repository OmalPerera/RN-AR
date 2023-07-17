import {
  Viro360Image,
  Viro3DObject,
  ViroARPlaneSelector,
  ViroARScene,
  ViroAmbientLight,
  ViroNode,
  ViroQuad,
  ViroText,
} from '@viro-community/react-viro';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Simple3DObject from './V3DObjects';
import { modelItems } from '../model/ModelItems';
import VTextComponent from './Vtext';
import V360Component from './V360';
import Test3Component from './test3';

const VIRComp = (props) => {
  const { navigation, route, onInitialized } = props;
  const { show360, show3D, showText } = props.props;
  console.log('jjjj : show360', show360);

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {show360 ? (
        <V360Component />
      ) : (
        <Test3Component />
        // <>
        //   <ViroAmbientLight color={'#aaaaaa'} />
        //   <ViroARPlaneSelector alignment={'Horizontal'} maxPlanes={3}>
        //     <ViroNode
        //       position={modelItems[0].position}
        //       dragType="FixedToWorld"
        //       onDrag={() => {}}
        //     >
        //       <Simple3DObject object={modelItems[0]} />
        //       <ViroQuad
        //         rotation={[-90, 0, 0]}
        //         width={0.5}
        //         height={0.5}
        //         arShadowReceiver={true}
        //         lightReceivingBitMask={2}
        //       />
        //     </ViroNode>
        //   </ViroARPlaneSelector>
        // </>
      )}
      {/* <V360Component /> */}
      {/* <VTextComponent /> */}
    </ViroARScene>
  );
};
export default VIRComp;

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
