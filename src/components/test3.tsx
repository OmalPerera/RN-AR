import {
  Viro360Image,
  Viro3DObject,
  ViroARPlane,
  ViroARPlaneSelector,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroMaterials,
  ViroNode,
  ViroPortal,
  ViroPortalScene,
  ViroQuad,
  ViroSpotLight,
  ViroText,
} from '@viro-community/react-viro';
import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { modelItems } from '../model/ModelItems';

const Test3Component = (props) => {
  const [modelsCounter, setmodelsCounter] = useState(0);
  const [modelArray, setmodelArray] = useState([]);
  const arSelectorRef: any = useRef(null);
  const obj3D: any = modelItems[4];

  const getWallWindows = (anchor) => {
    return (
      <ViroARPlane anchorId={anchor.anchorId}>
        <ViroNode key="portal">
          <ViroPortalScene
            passable={true}
            dragType="FixedDistance"
            onDrag={() => {}}
          >
            <ViroPortal scale={[0.5, 0.5, 0.5]}>
              <Viro3DObject
                source={require('../res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[
                  require('../res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                  require('../res/portal_wood_frame/portal_wood_frame_normal.png'),
                  require('../res/portal_wood_frame/portal_wood_frame_specular.png'),
                ]}
                type="VRX"
              />
            </ViroPortal>
            <Viro360Image source={require('../res/360_lake.jpg')} />
          </ViroPortalScene>
        </ViroNode>
      </ViroARPlane>
    );
  };

  const get3Dmodel = (anchor) => {
    console.log('Anchor : ', anchor);
    return (
      <ViroARPlane anchorId={anchor.anchorId}>
        <ViroNode key="3dmodel" dragType="FixedToWorld" onDrag={() => {}}>
          <Viro3DObject
            source={obj3D.obj}
            resources={obj3D.resources}
            onLoadEnd={() => {
              arSelectorRef.current.reset();
            }}
            scale={obj3D.scale}
            type={obj3D.type}
            animation={{ ...obj3D.animation, run: true }}
          />
          {/* <ViroQuad
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            height={10}
            width={10}
            //arShadowReceiver={true}
          /> */}
        </ViroNode>
      </ViroARPlane>
    );
  };

  const planeSelected = (anchor) => {
    let mA: any = modelArray;
    switch (modelsCounter) {
      case 0:
        mA = [...modelArray, get3Dmodel(anchor)];
        break;
      case 1:
        mA = [...modelArray, getWallWindows(anchor)];
        break;
    }
    setmodelsCounter(modelsCounter + 1);
    setmodelArray(mA);
  };

  return (
    <>
      {/* <Viro360Image source={require('../res/360_living_room.jpg')} /> */}
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ViroDirectionalLight
        color="#777777"
        direction={[0, -1, 0]}
        shadowOrthographicPosition={[0, 8, -5]}
        shadowOrthographicSize={10}
        shadowNearZ={2}
        shadowFarZ={9}
        //lightInfluenceBitMask={2}
        castsShadow={true}
      />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={25}
        direction={[0, -1, -0.2]}
        position={[0, 3, 0]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={5}
        shadowFarZ={5}
        shadowOpacity={0.7}
      />
      <ViroARPlaneSelector
        maxPlanes={2}
        ref={(selectorRef) => {
          console.log('selectorRef : ', selectorRef);
          arSelectorRef.current = selectorRef;
        }}
        onPlaneSelected={(e) => {
          console.log('selectorRef : ', e);
          planeSelected(e);
        }}
        dragType="FixedToWorld"
      ></ViroARPlaneSelector>
      {modelArray}
    </>
  );
};
export default Test3Component;

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  ground: {
    cullMode: 'None',
    shininess: 2.0,
    diffuseColor: '#ff9999',
    lightingModel: 'Blinn',
  },
});
