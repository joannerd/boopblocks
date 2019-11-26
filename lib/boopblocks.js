// const canvas = document.getElementById("canvas");

// window.onresize = resizeCanvas;
// resizeCanvas();

// const scene = new Scene(canvas);

// render();

// function render() {
//   requestAnimationFrame(render);
//   scene.update();
// }


// // var camera = new THREE.PerspectiveCamera(
// //   75,
// //   window.innerWidth / window.innerHeight,
// //   0.1,
// //   1000
// // );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);


// var cubeCamera = new THREE.CubeCamera(1, 100000, 128);
// scene.add(cubeCamera);

// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Update the render target cube
// cube.setVisible(false);
// cubeCamera.position.copy(cube.position);
// cubeCamera.update(renderer, scene);

// // Render the scene
// cube.setVisible(true);
// renderer.render(scene, camera);
