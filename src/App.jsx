import React from 'react';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  LineBasicMaterial,
  Line,
  Vector,
  BufferGeometry,
  Vector3
} from 'three'

function App() {

  const domRef = React.useRef();

  React.useEffect(() => {
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: '#fff' });
    // camera.position.z = 5;

    const render = new WebGLRenderer(); // 渲染器
    const scene = new Scene() // 创建场景
    const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    const material = new LineBasicMaterial({ color: '#1790ff' }); // 线条材质
    render.setSize(window.innerWidth, window.innerHeight);
    // const container = document.getElementById('root');
    // container.appendChild(render.domElement)
    // // document.body.appendChild(render.domElement);

    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    // 定义带定点的几何体
    const points = [];
    points.push(new Vector3(-10, 0, 0));
    points.push(new Vector3(0, 10, 0));
    points.push(new Vector3(10, 0, 0));
    points.push(new Vector3(0, -10, 0));
    points.push(new Vector3(-10, 0, 0));
    const geometry = new BufferGeometry().setFromPoints(points);

    const cube = new Mesh(geometry, material);
    const line = new Line(geometry, material);
    scene.add(line);
    scene.add(cube);
    render.render(scene, camera);


    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      render.render(scene, camera);

    }
    domRef.current.appendChild(render.domElement)
    animate();

    return () => {
      domRef.current.removeChild(render.domElement)
    }

  }, [])


  return (
    <div ref={domRef} style={{ width: '100%', height: '100%' }}>
    </div>
  );
}

export default App;
