function GoldenBall( mesh ){


  var mesh = mesh || new THREE.Mesh( new THREE.BoxGeometry( 1000 , 1000 , 1000 , 80 , 80 , 80 ) );
  var geometry = new THREE.Geometry();

  geometry.merge( mesh.geometry , mesh.matrix );
  
 // var geometry =  || new THREE.BoxGeometry( 1000 , 1000 , 1000 , 80 , 80 , 80 );
  
  
  
  var params = {

    repelers: REPELERS,

    vs: shaders.vertexShaders.fire,
    fs: shaders.fragmentShaders.weird1,
    ss: shaders.simulationShaders.weird1,

    geometry: geometry,


    dT: G_UNIFORMS.dT,
    time: G_UNIFORMS.time,

    soul:{
       
      dampening:          { type:"f" , value: .9 , constraints:[.8 , .999] },
      noiseSize:          { type:"f" , value: .001 , constraints:[.0001 , .01] },
      noiseVariation:     { type:"f" , value: .4   , constraints:[.01 , 1.] },
      noiseChangeSpeed:   { type:"f" , value: 1   , constraints:[.0 , 5.] },
      audioPower:         { type:"f" , value: 1   , constraints:[.0 , 1.] },
      noisePower:         { type:"f" , value: 30   , constraints:[0 , 100.] },
      returnPower:        { type:"f" , value: .1   , constraints:[ .0 ,1. ] },
      maxVel:             { type:"f" , value: 30.   , constraints:[ 0 , 100 ] },
      sampleNoiseSize:    { type:"f" , value: .0001   , constraints:[ 0 , .001 ] },
      audioVelMultiplier: { type:"f" , value: .3   , constraints:[ 0 , 1 ] },
      maxVel:             { type:"f" , value: 30.   , constraints:[ 0 , 100 ] },
      
      t_audio:          G_UNIFORMS.t_audio,

    },

    body:{
      
      audioDisplacement:{ type:"f" , value : 0.0 ,  constraints:[ 0 , 20 ]},
      
      custom1:{type:"f" , value: .04,  constraints:[ 0.00001 , 1]},
      custom2:{type:"f" , value: .31,  constraints:[ 0.00001 , 1]},
      custom3:{type:"f" , value: 1, constraints:[ 0.00001 , 1]},
    
      tmp_color1:{ type:"color" , value: 0xc0ffee },
      tmp_color2:{ type:"color" , value: 0xaa55ff },
      tmp_color3:{ type:"color" , value: 0x5500ff },

      color1:{ type:"c" , value : new THREE.Color( 0xc0ffee ) },
      color2:{ type:"c" , value : new THREE.Color( 0xaa55ff ) },
      color3:{ type:"c" , value : new THREE.Color( 0x5500ff ) },
      
      lightPos:{type:"v3" , value: new THREE.Vector3( 10 , 1 , 1 )},
      
      t_audio:   G_UNIFORMS.t_audio,

    },

  }

  var gem = new GEM( params );
  
  gem.gui = new GUI( params , {
   domElement: document.getElementById( 'GUI' ) 
  });



  return gem;

}

