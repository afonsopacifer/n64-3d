// ------------------------------------------------------
// Scene
// ------------------------------------------------------

const scene = new THREE.Scene();

// ------------------------------------------------------
// Camera
// ------------------------------------------------------

let fieldOfView = 75,
    aspectRatio = window.innerWidth/window.innerHeight,
    near = 0.1,
    far = 400;

const camera = new THREE.PerspectiveCamera( fieldOfView, aspectRatio, near, far );
camera.position.z = 150;
scene.rotation.x = .45;

// ------------------------------------------------------
// Mesh
// ------------------------------------------------------

const red = 0xfe2015,
      blue = 0x011da9,
      yellow = 0xffc001,
      green = 0x069330,
      cubeWidth = 20,
      cubeHeight = 75,
      transversalCubeHeight = 83,
      cubeDepth = 20;

// cube color scheme 1
// ---------
const cubeGeometryColor1 = new THREE.BoxGeometry( cubeWidth, cubeHeight, cubeDepth );
cubeGeometryColor1.faces[0].color.setHex( blue );
cubeGeometryColor1.faces[1].color.setHex( blue );
cubeGeometryColor1.faces[2].color.setHex( blue );
cubeGeometryColor1.faces[3].color.setHex( blue );
cubeGeometryColor1.faces[4].color.setHex( yellow );
cubeGeometryColor1.faces[5].color.setHex( yellow );
cubeGeometryColor1.faces[6].color.setHex( yellow );
cubeGeometryColor1.faces[7].color.setHex( yellow );
cubeGeometryColor1.faces[8].color.setHex( green );
cubeGeometryColor1.faces[9].color.setHex( green );
cubeGeometryColor1.faces[10].color.setHex( green );
cubeGeometryColor1.faces[11].color.setHex( green );

// cube color scheme 2
// ---------
const cubeGeometryColor2 = new THREE.BoxGeometry( cubeWidth, 83, cubeDepth );
cubeGeometryColor2.faces[0].color.setHex( red );
cubeGeometryColor2.faces[1].color.setHex( red );
cubeGeometryColor2.faces[2].color.setHex( blue );
cubeGeometryColor2.faces[3].color.setHex( blue );
cubeGeometryColor2.faces[4].color.setHex( yellow );
cubeGeometryColor2.faces[5].color.setHex( yellow );
cubeGeometryColor2.faces[6].color.setHex( yellow );
cubeGeometryColor2.faces[7].color.setHex( yellow );
cubeGeometryColor2.faces[8].color.setHex( green );
cubeGeometryColor2.faces[9].color.setHex( green );
cubeGeometryColor2.faces[10].color.setHex( green );
cubeGeometryColor2.faces[11].color.setHex( green );

// cube color scheme 3
// ---------
const cubeGeometryColor3 = new THREE.BoxGeometry( cubeWidth, 83, cubeDepth );
cubeGeometryColor3.faces[0].color.setHex( blue );
cubeGeometryColor3.faces[1].color.setHex( blue );
cubeGeometryColor3.faces[2].color.setHex( blue );
cubeGeometryColor3.faces[3].color.setHex( blue );
cubeGeometryColor3.faces[4].color.setHex( yellow );
cubeGeometryColor3.faces[5].color.setHex( yellow );
cubeGeometryColor3.faces[6].color.setHex( yellow );
cubeGeometryColor3.faces[7].color.setHex( yellow );
cubeGeometryColor3.faces[8].color.setHex( red );
cubeGeometryColor3.faces[9].color.setHex( red );
cubeGeometryColor3.faces[10].color.setHex( green );
cubeGeometryColor3.faces[11].color.setHex( green );

// Default material
// ---------
const cubeMaterial = new THREE.MeshBasicMaterial( {vertexColors: THREE.FaceColors} );

// All mesh
// ---------
const nintendoCube1 = new THREE.Mesh( cubeGeometryColor1, cubeMaterial );
const nintendoCube2 = new THREE.Mesh( cubeGeometryColor1, cubeMaterial );
const nintendoCube3 = new THREE.Mesh( cubeGeometryColor1, cubeMaterial );
const nintendoCube4 = new THREE.Mesh( cubeGeometryColor1, cubeMaterial );
const nintendoCube5 = new THREE.Mesh( cubeGeometryColor2, cubeMaterial );
const nintendoCube6 = new THREE.Mesh( cubeGeometryColor2, cubeMaterial );
const nintendoCube7 = new THREE.Mesh( cubeGeometryColor3, cubeMaterial );
const nintendoCube8 = new THREE.Mesh( cubeGeometryColor3, cubeMaterial );

// ------------------------------------------------------
// Add to scense
// ------------------------------------------------------

scene.add( 
   nintendoCube1,
   nintendoCube2,
   nintendoCube3,
   nintendoCube4,
   nintendoCube5,
   nintendoCube6,
   nintendoCube7,
   nintendoCube8
);

// ------------------------------------------------------
// render
// ------------------------------------------------------

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const render = () => {

  // ------------------------------------------------------
  // position
  // ------------------------------------------------------
  
  nintendoCube1.position.set( -30, 0,  30 );
  nintendoCube2.position.set(  30, 0,  30 );
  nintendoCube3.position.set( -30, 0, -30 );
  nintendoCube4.position.set(  30, 0, -30 );

  nintendoCube5.position.set( 0, 0, 30 );
  nintendoCube5.rotation.z = 0.73;
  
  nintendoCube6.position.set( 0, 0, -30 );
  nintendoCube6.rotation.z = 2.41;
 
  
  nintendoCube7.position.set( -30, 0, 0 );
  nintendoCube7.rotation.x = 2.41;
  
  nintendoCube8.position.set( 30, 0, 0 );
  nintendoCube8.rotation.x = 0.73;
  
  // ------------------------------------------------------
  // animation
  // ------------------------------------------------------
  
  requestAnimationFrame( render );
  scene.rotation.y += 0.008;
  
  renderer.render( scene, camera );
  
};

render();