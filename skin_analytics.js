var skin_analytics = function(){
  //skin analytics
  //FFPLAYER - DEVIL-94
  //version: 0.1
        var popupToken = document.querySelector("#sa_popup_token");
	            var popupToken2= document.querySelector(".sa_popup_special");

        var word_sa={
         copen:"<div id='skin_analytics_tool'>",
         cclose:"</div>",
         ctitle:"SKIN ANALYTICS 0.1",
         //word_sa.popup('messaggio',3000)...
         pop: function(method,msg){
         	if(method === 1){
         		//open
                popupToken.style.opacity = 1;
                popupToken.style.transform= "scale(1,1)";
                popupToken.innerHTML+=msg;
            }
            else if(method === 0){
            	//close
                popupToken2.style.opacity = 0;
                popupToken2.style.transform="scale(0,0)";
                
            }
            else {
            }
         }
         
            
         
          
        };
 	// document.querySelector(".container").insertAdjacentHTML("beforeend",word_sa.copen+word_sa.ctitle+word_sa.cclose);  
  	var btn1urlcheck = document.querySelector("#sa_btn_url_check");
  	var inputurlcheck = document.querySelector("#sa_input_url_check");
    var btn2imagecheck = document.querySelector("#sa_btn_image_check");
    var inputimagecheck = document.querySelector("#sa_input_image_check");
    function getMeta(url){   
    var img = new Image();
    img.onload = function(){
    if(this.width == "500" && this.height == "375"){
        //alert( "LARGHEZZA:"+this.width+'\n ALTEZZA'+ this.height );
    	//word_sa.popup("","Molto Bene ! la dimensione dell'immagine è in norma alle regole dello Skinlab",2000);
        word_sa.pop(1,"Ciaoo");

    }
    else{
    //word_sa.popup("red","Errore, la dimensione dell'immagine non va bene.\n Dimensione Consigliata: 500x375\n Dimensione Immagine:"+this.width+"x"+this.height,5000);
    word_sa.pop(1,"Ciaoo");
    }
    
    
    };
    img.onerror = function(){word_sa.pop(1,"Errore, l'immagine non può essere caricata");}
    img.src = url;
	}
    btn1urlcheck.onclick=function(){
    if(/(http:\/\/)[.a-z|0-9]+\.skin\.forumfree\.it/i.test(inputurlcheck.value)){
    //word_sa.popup("","Molto Bene ! Il dominio è in norma alle regole dello SkinLab.",2500);
    } else {//word_sa.popup("red","Errore, il dominio non va bene",2500);
    	}
   	}
  	
    
    btn2imagecheck.onclick=function(){
    
    getMeta(inputimagecheck.value);
    
    }
  	/*
    algoritmo punteggio:
    ....
    */
  
  
  
  
  
  
  
};

window.onload = function(){
  skin_analytics();

}
