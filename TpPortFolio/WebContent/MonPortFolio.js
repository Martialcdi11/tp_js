/**
 * 
 */

$(function() {
    $( "#ajimg" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#ajout" ).click(function() {
      $( "#ajimg" ).dialog( "open" );
    });
    

    
    
    $( ".imginfos" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
    
  //  $( "#envoie" ).click(function() {
   	$('#fileSelector').on('change', function (e){	
        	
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			for (i = 0; i < e.target.files.length; i++) {
				var picReader = new FileReader();
				picReader.addEventListener("load", function (event) {
					var reader = event.target;
			    	var imagetable= new ImgTable('Nouvelle image',reader.result,'décrire image','Les tags plus tard');
			    	var myDelegatedFunction = saisieinfos.bind(imagetable);
			    	myDelegatedFunction;
			    });
				var f = e.target.files[i];
				if (!f.type || !f.type.match('image.*')) {
					continue; // Termine l'itération sur le for
				}
				picReader.file = f;
				picReader.readAsDataURL(f);
			}
		} else {
			console.log('non supporté');
		}
    	
      });   
    
   
    function saisieinfos(image){
    	// ouverture de la modale pour saisie des infos de l'images!! 
    	var divimg =  $( ".imginfos div").clone(true);
    	divimg.dialog({
    	      autoOpen: false,
    	      show: {
    	        effect: "blind",
    	        duration: 500
    	      },
    	      hide: {
    	        effect: "explode",
    	        duration: 500
    	      }
    	    });
    	divimg.dialog( "open" );
        // divimg.attr('class', 'imagecomplete');
    	divimg.append($('<input>').attr('class', 'nvimgtitre').attr('value',image.titre))
    	divimg.append($('<img>').attr('src', image.source).attr('class', 'imgappercu'))
    	divimg.append($('<input>').text(image.titre).attr('id', 'nvimgtitre'))
    	divimg.append($('<textarea>').text(image.descro).attr('class', 'nvimgdesc'))
    	divimg.append($('<textarea>').text(image.lestags).attr('class', 'nvimgtags'))
    	
    }
    	
    
      
    function credivimg(image){
    	var divimg = $('<div>');
    	divimg.attr('class', 'imagecomplete');
    	divimg.append($('<div>').text(image.titre).attr('class', 'imgtitre'))
    	divimg.append($('<img>').attr('src', image.source).attr('class', 'imgappercu'))
    	divimg.append($('<div>').text(image.descro).attr('class', 'imgdesc'))
    	divimg.append($('<div>').text(image.lestags).attr('class', 'imgtags'))
    	
    	return divimg;
    }
    
    
    var ii=0;
    $("#defiloir").append(credivimg(imgtableau[ii]));
    var ii=1;
    $("#defiloir").append(credivimg(imgtableau[ii]));
    var ii=2;
    $("#defiloir").append(credivimg(imgtableau[ii]));

    
  });



