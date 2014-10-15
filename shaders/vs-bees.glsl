
uniform vec3 velocity;
uniform vec3 target;

uniform sampler2D t_audio;

varying vec3 vPos;
varying float vVelMatch;
varying float vNormalMatch;
varying vec3 vDif;
varying vec4 vAudio;

void main(){


  vDif = position - target;
  vVelMatch = dot( velocity , vec3( 0. , 0. , 1. ) );
  vNormalMatch = dot( normalize(vDif) , normal );

  vAudio = texture2D( t_audio , vec2( abs( vNormalMatch )  , 0. ) );

  vPos = position + 5. * length( vAudio ) * vNormalMatch * normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vPos , 1. );

}
