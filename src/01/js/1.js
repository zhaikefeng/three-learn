/*
 * @Author: 翟珂峰
 * @LastEditTime: 2021-01-19 23:25:56
 * @Description: 这里是编写three.js的地方
 */
function init(){
    let scene = new THREE.Scene();
    console.log(scene);
    // camera 接收的参数是  视场大小 fov  长宽比 aspect width/height  近距离 near 远距离 far 
    let camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000)
    console.log('camara',camera);
   
    camera.position.set(-30,40,30)// camera观看的位置
    camera.lookAt(scene.position) // 注意若不加入camera向那个方向看,元素不展示
    let renderer = new THREE.WebGLRenderer();
    console.log('renderer',renderer)
    // renderer 启用了three.js 的方法
    renderer.setClearColor(new THREE.Color(0xFFFFFF)); // 设置背景颜色
    renderer.setSize(window.innerWidth,window.innerHeight); // 设置尺寸
    
    // 添加坐标轴
    // 红色线是x轴  绿色线是y轴  蓝色线是z轴
    let axes = new THREE.AxesHelper(20);
    console.log(axes);
    scene.add(axes);


    let planeGeometry = new THREE.PlaneGeometry(60,20)
    console.log('planeGeometry', planeGeometry)
    let planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA
    })
    console.log(planeMaterial,'planeMaterial')
    let plane = new THREE.Mesh(planeGeometry,planeMaterial)
    console.log(plane,'plane')
    plane.rotation.x = - 0.5 * Math.PI;
    plane.position.set(15,0,0);
    scene.add(plane)

    let cubeGeometry = new THREE.BoxGeometry(4,4,4)
    let cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xFF0000,
        wireframe: true,
    })
    let cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
    cube.position.set(-4,3,0)
    scene.add(cube);
    
    let sphereGeometry = new THREE.SphereGeometry(4,20,20)
    let sphereMeterial = new THREE.MeshBasicMaterial({
        color: 0x7777FFF,
        wireframe: true
    })
    let sphere = new THREE.Mesh(sphereGeometry,sphereMeterial)
    sphere.position.set(20,4,2)
    scene.add(sphere)
    // 将render形成的dom元素放到页面元素内
    document.getElementById('webgl').appendChild(renderer.domElement)
    // 调用render方法进行渲染
    renderer.render(scene,camera)
}       