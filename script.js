import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  radius1: 5,
  radius2: 30,
  curveLerp: 0.5,
  curvePoints: 80,
  shaderPoints: 16,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  velocityTreshold: 10,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025,
  el: document.getElementById('app'),
})