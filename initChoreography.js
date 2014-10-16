function initChoreography(){

    looper.addHit( function(){ disturbRepelers( 100 )} );

    looper.addHit( function(){
      Arrangements.plane( 100 , 'z' , 0 );
      R_VALUES.update = !R_VALUES.update;
      if( t1 === false ){
        R_VALUES.targetForce = .1;
        t1 = !t1;
      }else{
        R_VALUES.targetForce = .01;
        t1 = !t1;
      }

    } , {
      measureFrequency: 4,
      measureOffset:0,
      percents:[ .4 , .8],
      duration:[ 0 , 27 ]
      //measureOffset: 1
    });

    looper.onLoop( 0 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 0,
        y: 0,
        z: -900.57315433686765
      }, looper.loopLength* 1000 );

      ShapeGems.sphere.toggle();
      ShapeGems.sphere.body.position.z = -500;

      ShapeGems.torus1.toggle();
     // ShapeGems.torus1.body.position.z = -500;


    });
    looper.onLoop( 1 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 0,
        y: 0,
        z: -150.57315433686765
      }, looper.loopLength* 1000 );

      R_VALUES.centerForce = 1.
      R_VALUES.windForce = -.5
      //Shad
    });
    looper.onLoop( 2 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: -681.9967079052677,
        y: 46.99165457145572,
        z: -150.57315433686765
      }, looper.loopLength* 1000 );

    });


    looper.onLoop( 3 , function(){

      ShapeGems.points1.toggle();

      SH1 = ShapeGems.points1.body.clone();
      scene.add( SH1 );
      SH1.scale.multiplyScalar( 30 );
      ShapeGems.points1.body.visible = false;
  
      R_VALUES.centerForce = 3.
      R_VALUES.windForce = -2

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: -581.9967079052677,
        y: 246.99165457145572,
        z: 300.57315433686765
      }, looper.loopLength* 1000 );

    });



    looper.onLoop( 4 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: -281.9967079052677,
        y: 246.99165457145572,
        z: 300.57315433686765
      }, looper.loopLength* 1000 );

    });

    looper.onLoop( 5 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 0.9967079052677,
        y: 0.99165457145572,
        z: 430.57315433686765
      }, looper.loopLength* 1000 );

    });

    looper.onLoop( 7 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 0.9967079052677,
        y: 0.99165457145572,
        z: 830.57315433686765
      }, looper.loopLength* 1000 );

    });

    looper.onLoop( 8, function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 0.9967079052677,
        y: 0.99165457145572,
        z: 1030.57315433686765
      }, looper.loopLength* 1000 );

    });


    looper.onLoop( 9, function(){

      R_VALUES.centerForce = 1.
      R_VALUES.windForce = -.5

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 0.9967079052677,
        y: 0.99165457145572,
        z: 1330.57315433686765
      }, looper.loopLength* 1000 );

    });



    looper.onLoop( 11 , function(){

      ShapeGems.sphere.movementSpeed = 1.4;

      
      R_VALUES.centerForce = 5.
      R_VALUES.windForce = -3.

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 700.9967079052677,
        y: 0.99165457145572,
        z: 700.57315433686765
      }, looper.loopLength* 1000 );

    });



    looper.onLoop( 15 , function(){

      ShapeGems.sphere.movementSpeed = 1.4;

      R_VALUES.centerForce = 1.
      R_VALUES.windForce = -.5
      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 700.9967079052677,
        y: 0.99165457145572,
        z: 700.57315433686765
      }, looper.loopLength* 1000 );

      ShapeGems.torus1.movementSpeed = 3.;

    });

    looper.onLoop( 20 , function(){

      ShapeGems.sphere.movementSpeed = 1.4;

      R_VALUES.centerForce = .01
      R_VALUES.windForce = -.5
      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 10000.9967079052677,
        y: 0.99165457145572,
        z: 10000.57315433686765
      }, looper.loopLength * 3000 );

      ShapeGems.torus1.movementSpeed = 3.;

    });





  //  Loop 11 ( oo oo oo eh )

}
