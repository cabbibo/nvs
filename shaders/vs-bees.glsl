
uniform vec3 velocity;
uniform vec3 target;

uniform sampler2D t_audio;

varying vec3 vPos;
varying float vVelMatch;
varying float vNormalMatch;
varying vec3 vDif;
varying vec4 vAudio;

varying vec3 vMNormal;
varying vec3 vNormal;

void main(){


  vDif = position - target;
  vVelMatch = dot( normalize(velocity) , vec3( 0. , 0. , 1. ) );
  vNormalMatch = dot( normal, -normalize(vDif) );

  vNormal = normal;
  vMNormal = ( modelMatrix * vec4( normal , 0. )).xyz;

  vAudio = texture2D( t_audio , vec2( abs( vNormalMatch )  , 0. ) );

  vPos = position + 20. * length( vAudio ) * vNormalMatch * vNormalMatch* vNormalMatch * normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vPos , 1. );

}
