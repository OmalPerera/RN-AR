import { Viro360Image } from '@viro-community/react-viro';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const imgs = [
  '360_waikiki.jpg',
  '360_space.jpg',
  '360_guadalupe.jpg',
  '360_diving.jpg',
];

const env = '../res/' + imgs[3];
const V360Component = (props) => {
  return <Viro360Image source={require('../res/360_diving.jpg')} />;
};

export default V360Component;

var styles = StyleSheet.create({});
