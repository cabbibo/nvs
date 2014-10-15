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

    });
    looper.onLoop( 1 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 0,
        y: 0,
        z: -150.57315433686765
      }, looper.loopLength* 1000 );

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

    looper.onLoop( 4 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: -281.9967079052677,
        y: 246.99165457145572,
        z: 0.57315433686765
      }, looper.loopLength* 1000 );

    });

    looper.onLoop( 5 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 0.9967079052677,
        y: 0.99165457145572,
        z: 200.57315433686765
      }, looper.loopLength* 1000 );

    });

     looper.onLoop( 7 , function(){

      var percentTilEnd = 1 - looper.percentOfLoop;
      var timeTilEnd = percentTilEnd * looper.loopLength;
      tweenCamera({
        x: 0.9967079052677,
        y: 0.99165457145572,
        z: 400.57315433686765
      }, looper.loopLength* 1000 );

    });



}
