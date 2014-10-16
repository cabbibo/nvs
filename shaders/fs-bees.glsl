
varying vec3 vPos;
varying float vVelMatch;
varying float vNormalMatch;
varying vec3 vDif;
varying vec4 vAudio;

varying vec3 vNormal;
varying vec3 vMNormal;
void main(){


  gl_FragColor= vec4( normalize( vMNormal ) * normalize( vMNormal ) + vec3( .5 ) , 1. );// * vec4( vAudio.xyz , 1. ) *  vec4( 1. , vNormalMatch , 0. , 1. );

}
