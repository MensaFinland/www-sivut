// <!--
	
	/* Modernizr-kirjasto HTML5-tukea varten */
	document.write(unescape("%3Cscript src='http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js' type='text/javascript'%3E%3C/script%3E"));

	$(document).ready(function() {
            /* Wordpressin teeman kuvahakemisto */
            var theme_path = '';
            if (window.wordpress_theme_path) {
              theme_path = window.wordpress_theme_path
            }

	    /* Valikon valitun kohteen tyyli */
	    var fun = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
		$('nav ul li a[href$="' + fun + '"]').addClass("current");

        /* Menun piilotus */
		$('.miinus').click(function () {
                    var miinus = theme_path + "images/miinus.png";
                    var plus   = theme_path + "images/plus.png"
		    $(this).attr('src', $(this).attr('src') == miinus ? plus : miinus );
		    $('.' + $(this).attr('id').substr(6, 5)).toggle(500);
		});

		$('#forumLink').click(function () {
		    window.location.href = 'https://www.mensa.fi/forum/';
		});
	});

	/* Google Analytics, tilastot */
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-29342712-1']);
	_gaq.push(['_trackPageview']);
	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();

	// -->
