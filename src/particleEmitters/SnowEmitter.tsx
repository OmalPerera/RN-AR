import { ViroParticleEmitter } from '@viro-community/react-viro';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const SnowEmitter = (props) => {
  const snowSpawnRate = props.snowRate ? 100 * props.snowRate : 100;
  var fallSpeed = props.fallSpeed == undefined ? 1.0 : props.fallSpeed;
  var windShear = props.windShear == undefined ? 1.0 : props.windShear;

  return (
    <ViroParticleEmitter
      position={[0, 4.5, 0]}
      duration={2000}
      visible={true}
      delay={0}
      run={props.run}
      loop={true}
      fixedToEmitter={true}
      image={{
        source: require('../res/particle_snow.png'),
        height: 0.01,
        width: 0.01,
        bloomThreshold: 1.0,
      }}
      spawnBehavior={{
        particleLifetime: [5000, 5000],
        emissionRatePerSecond: [snowSpawnRate, snowSpawnRate],
        spawnVolume: {
          shape: 'box',
          params: [20, 1, 20],
          spawnOnSurface: false,
        },
        maxParticles: 2000,
      }}
      particleAppearance={{
        opacity: {
          initialRange: [0, 0],
          factor: 'Time',
          interpolation: [
            { endValue: 1.0, interval: [0, 500] },
            { endValue: 0.0, interval: [4000, 5000] },
          ],
        },
        rotation: {
          initialRange: [0, 360],
          factor: 'Time',
          interpolation: [{ endValue: 1080, interval: [0, 5000] }],
        },
        scale: {
          initialRange: [
            [5, 5, 5],
            [10, 10, 10],
          ],
          factor: 'Time',
          interpolation: [
            { endValue: [6, 6, 6], interval: [0, 1000] },
            { endValue: [10, 10, 10], interval: [3000, 5000] },
            { endValue: [5, 5, 5], interval: [4000, 5000] },
          ],
        },
      }}
      particlePhysics={{
        velocity: {
          initialRange: [
            [-2 * windShear, -0.5, 0],
            [2 * windShear, -3.0 * fallSpeed, 0],
          ],
        },
      }}
    />
  );
};

export default SnowEmitter;
