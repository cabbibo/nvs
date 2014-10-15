
varying vec3 vPos;
varying float vVelMatch;
varying float vNormalMatch;
varying vec3 vDif;
varying vec4 vAudio;

void main(){


  gl_FragColor= length( vAudio ) * vec4( vAudio.xyz , 1. ) *  vec4( 1. , vNormalMatch , 0. , 1. );

}
