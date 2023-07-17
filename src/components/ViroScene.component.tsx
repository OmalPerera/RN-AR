import {
  Viro360Image,
  Viro3DObject,
  ViroARPlaneSelector,
  ViroARScene,
  ViroAmbientLight,
  ViroMaterials,
  ViroNode,
  ViroQuad,
  ViroSpotLight,
  ViroText,
} from '@viro-community/react-viro';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Simple3DObject from './V3DObjects';
import { modelItems } from '../model/ModelItems';
import VTextComponent from './Vtext';
import V360Component from './V360';
import Test3Component from './test3';
import VimageRecog from './VimageRecognition';

const VIRComp = (props) => {
  const { navigation, route, onInitialized } = props;
  const { show360, show3D, showText } = props.props;
  console.log('jjjj : show360', show360);

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {show360 ? (
        <V360Component />
      ) : (
        // <Test3Component />
        <VimageRecog />
        // <>
        //   <ViroAmbientLight color={'#aaaaaa'} />
        //   <ViroARPlaneSelector alignment={'Horizontal'} maxPlanes={3}>
        //     <ViroNode
        //       position={modelItems[4].position}
        //       dragType="FixedToWorld"
        //       onDrag={() => {}}
        //     >
        //       <ViroSpotLight
        //         innerAngle={5}
        //         outerAngle={25}
        //         direction={[0, -1, -0.2]}
        //         position={[0, 3, 1]}
        //         color="#ffffff"
        //         castsShadow={true}
        //         shadowMapSize={2048}
        //         shadowNearZ={2}
        //         shadowFarZ={5}
        //         shadowOpacity={0.7}
        //       />
        //       <Simple3DObject object={modelItems[4]} />
        //       <ViroQuad
        //         position={[0, 0, 0]}
        //         rotation={[-90, 0, 0]}
        //         width={4}
        //         height={4}
        //         arShadowReceiver={true}
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

ViroMaterials.createMaterials({
  bone: {
    diffuseColor: 'rgb(245,245,220)',
    lightingModel: 'PBR',
  },
});
