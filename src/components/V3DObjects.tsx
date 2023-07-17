import { Viro3DObject, ViroNode } from '@viro-community/react-viro';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const Simple3DObject = (props) => {
  const { object } = props;

  console.log('----L : ', object);

  /* This ViroNode is used as a parent for 3 children - 3D Object, Particle Emitters (if present in data model) and shadows. 
                This is done so that all three children are positioned in relation to each other in the scene graph, and any touch events
                that change their position of the object, affect all three */

  return (
    <Viro3DObject
      source={object.obj}
      resources={object.resources}
      position={object.position}
      scale={object.scale}
      type={object.type}
      animation={{ ...object.animation, run: true }}
      //materials={['heart']}
      //dragType="FixedDistance"
      //   lightReceivingBitMask={3}
      //   shadowCastingBitMask={2}
      //   transformBehaviors={['billboardY']}
      onDrag={() => {}}
    />
  );
};
export default Simple3DObject;

var styles = StyleSheet.create({});
