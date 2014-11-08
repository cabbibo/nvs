  

      var SOCIAL_MEDIA = [
        ["Download Song" , "download_1.png" , "audio/2D.mp3"],
        ["Share on Twitter" ,"twitter_1.png" , "http://twitter.com/share?text=NVSCENE%202015%20Invite%20made%20in%20%23threejs%20and%20%23WebGL%20by%20@cabbibo%20&url=http://cabbi.bo/nvs"],
        ["Share on Facebook", "facebook_1.png" , 'http://www.facebook.com/sharer.php?u=http://cabbi.bo/nvs'],
        ["Soundcloud" ,"soundcloud_1.png" , "https://soundcloud.com/cabbibo/sets/nsb"],
        ["Cabbibo" , "cabbibo_1.png" , "http://cabbi.bo"],
      ]
      

  function addSocialMedia( smArray ){

      this.social = document.createElement('div');
      this.social.id = 'social';
      document.body.appendChild( this.social );

      window.titleEP  = document.createElement('a');
      window.titleEP.href = 'https://nv.scene.org';
      window.titleEP.target = '_blank';
      window.titleEP.id = 'titleEP';
      window.titleEP.innerHTML = 'NVSCENE 2015';


      this.social.appendChild( window.titleEP  );

      for( var i  = 0; i < smArray.length; i ++ ){

        var a = document.createElement('a');

        if( i != smArray.length -1 ){
          a.href = smArray[i][2];
         // if( i != 0 )
            a.target = '_blank';
        }else{
          a.onClick = "function(){ console.log('hello')}";
          a.id = "information"
        }



        a.style.background = 'url( icons/'+smArray[i][1]+')';
        a.style.backgroundSize = '100%';
        a.style.backgroundSize ="25px";
        a.style.backgroundPosition="center";
        a.style.backgroundRepeat="no-repeat";
        a.classList.add( 'social' );
        a.INFO_TEXT = smArray[i][0];

        this.social.appendChild( a );

      }

    }


