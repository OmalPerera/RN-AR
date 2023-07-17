import {
  Viro360Image,
  Viro3DObject,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAmbientLight,
  ViroMaterials,
  ViroQuad,
  ViroSpotLight,
} from '@viro-community/react-viro';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Simple3DObject from './V3DObjects';
import { modelItems } from '../model/ModelItems';

const VimageRecog = (props) => {
  const [pauseUpdates, setpauseUpdates] = useState(false);

  const onAnchorFound = () => {
    console.log('--onAnchorFound');
    //setpauseUpdates(true);
  };
  return (
    <ViroARImageMarker
      target={'logo'}
      onAnchorFound={() => onAnchorFound()}
      //   pauseUpdates={pauseUpdates}
    >
      <ViroAmbientLight color={'#aaaaaa'} />
      <Simple3DObject object={modelItems[4]} />
      {/* <Viro3DObject
        scale={[0, 0, 0]}
        source={require('../res/tesla/object_car.obj')}
        resources={[require('../res/tesla/object_car.mtl')]}
        type="OBJ"
        materials={'white'}
        //onClick={this._toggleButtons}
        animation={{ name: 'scaleCar', run: true }}
      />*/}

      <ViroSpotLight
        innerAngle={5}
        outerAngle={25}
        direction={[0, -1, 0]}
        position={[0, 5, 1]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={2}
        shadowFarZ={7}
        shadowOpacity={0.7}
      />

      <ViroQuad
        rotation={[-90, 0, 0]}
        position={[0, -0.001, 0]}
        width={2.5}
        height={2.5}
        arShadowReceiver={true}
      />
    </ViroARImageMarker>
  );
};

export default VimageRecog;

var styles = StyleSheet.create({});

ViroARTrackingTargets.createTargets({
  logo: {
    source: require('../res/pug_img.png'),
    orientation: 'Up',
    physicalWidth: 0.12, // real world width in meters
  },
});

ViroMaterials.createMaterials({
  white: {
    lightingModel: 'PBR',
    diffuseTexture: require('../res/tesla/object_car_main_Base_Color.png'),
    metalnessTexture: require('../res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('../res/tesla/object_car_main_Roughness.png'),
  },
});
