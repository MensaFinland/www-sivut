// <!--

	$(function () {
		//QR-koodi:
		$("#dialog").dialog({ autoOpen: false });
		//Kartta resize:
		$("#mapContainer").resizable({
			helper: "ui-resizable-helper",
			handles: 's, w, sw',
			minHeight: 300,
			minWidth: 220,
			knobHandles: true,
		});
		
		/* Wordpressin teeman kuvahakemisto */
        var theme_pathk = '';
        if (window.wordpress_theme_path) {
          theme_pathk = window.wordpress_theme_path;
        }
		
		//Posti-lahetys
		$("#wish").submit(function(e){
			e.preventDefault();
			var $serdata = $(this).serialize();
			//alert($serdata);
			
			$.ajax({
				cache: false,
				type: 'POST',
				url: theme_pathk + 'testikalenteribl.php',
				data: $serdata,
				success: function(data){
					//alert(data);
					if(data==="safty-fail"){
						alert("Vastasit turvakysymykseen väärin.");
					}else{
						alert("Palaute lähetetty. Pyrimme vastaamaan toiveeseesi.");
						$("#wish").closest('form').find("input[type=text], textarea").val("");
					}
				},
				error:function(xhr){
					alert("Lähetys epäonnistui. " + xhr.statusText);
				}                    
				});
		});
	});

	// -->
