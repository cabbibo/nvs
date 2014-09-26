
uniform sampler2D t_audio;

uniform samplerCube t_refl;
uniform samplerCube t_refr;

uniform float custom1;
uniform float custom2;

varying vec3 vNorm;
varying vec3 vMNorm;
varying vec3 vCamVec;
varying vec3 vMPos;


void main(){

  vec3 refr = refract( -vCamVec , vMNorm , custom1 );
  vec3 refl = reflect( -vCamVec , vMNorm );

  vec4 l_refr = textureCube( t_refr , vec3( -1. * refr.x , refr.yz ) );

  vec4 l_refl = textureCube( t_refl , vec3( -1. * refl.x , refl.yz ));


  float m = abs( dot( -vCamVec , vMNorm ));
  
  vec4 aC = texture2D( t_audio , vec2( m , 0. ) );
//  aC *= texture2D( t_audio , vec2( abs( refr.y ) , 0. ) );
//  aC *= texture2D( t_audio , vec2( abs( refr.z ) , 0. ) );


  vec4 c = mix( l_refr , l_refl , custom2 );
  gl_FragColor = c * aC * 4.;


  
}
