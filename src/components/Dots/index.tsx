import {useMemo, useRef} from 'react'

import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'

function roundedSquareWave(
  t: number,
  delta: number,
  a: number,
  f: number
): number {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

export default function Dots(): JSX.Element {
  const ref = useRef(null)

  const {vec, transform, positions, distances} = useMemo(() => {
    const vec = new THREE.Vector3()
    const transform = new THREE.Matrix4()
    const positions = [...Array(10000)].map((_, i) => {
      const position = new THREE.Vector3()

      position.x = (i % 100) - 50
      position.y = Math.floor(i / 100) - 50

      position.y += (i % 2) * 0.5

      position.x += Math.random() * 0.3
      position.y += Math.random() * 0.3
      return position
    })
    const right = new THREE.Vector3(1, 0, 0)
    const distances = positions.map(pos => {
      return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5
    })
    return {vec, transform, positions, distances}
  }, [])

  useFrame(({clock}) => {
    for (let i = 0; i < 10000; ++i) {
      const t = clock.elapsedTime - distances[i] / 80
      const wave = roundedSquareWave(t, 0.1, 1, 1 / 4)
      const scale = 1 + wave * 0.3
      vec.copy(positions[i]).multiplyScalar(scale)
      transform.setPosition(vec)
      ref.current.setMatrixAt(i, transform)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[0.1]} />
      <meshBasicMaterial color="#313131" />
    </instancedMesh>
  )
}
