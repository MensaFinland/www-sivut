<?php
/**
 * The Heading on the top: "Mensa Finland" + links
 *
 * @package mensaFin
 */
?>
	<header id="masthead" class="site-header" role="banner">
		  <!-- hakuautomaatteja varten? t.ulla -->
		  <h1>Mensa on kansainv�linen j�rjest�, jonka toiminnan tarkoituksena on �lykkyyden tunnistaminen ja kehitt�minen ihmisyyden hyv�ksi, �lykkyystutkimuksen tukeminen sek� �lyllisen ja sosiaalisen ymp�rist�n tarjoaminen j�senilleen. Mensan j�seneksi voi liitty� jokainen, joka saavuttaa �lykkyystestiss� paremman tuloksen kuin 98% v�est�st�. mensa, �lykkyystesti, mensan testi, �lykkyys, �o, iq, �o testi, iq testi, testi, test, �lykkyysosam��r�, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, �lykkyystestit, pulmapeli, pulmapelit, sosiaalinen �lykkyys, �lypeli, �lyp��, psykologinen, logiikka, looginen, loogiset, p��ttely, kyky, teht�vi�, tunne�ly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, j�rjest�, yhdistys</h1>
	
		<div id="MensaLogo"><a href="index.php"><img src="<?php bloginfo('template_directory'); ?>/images/MensaLogo.png" alt="Mensa Logo" /></a></div><!-- end MensaLogo -->
		<div id="MensaText"><a href="index.php"><img src="<?php bloginfo('template_directory'); ?>/images/MensaText.png" alt="leiska" /></a></div><!-- end MensaText -->
		<div id="network">
		  <div id="some">
			<img id="someicons" src="<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png" width="355" height="29" usemap="#some1" alt="FB, Twitter, YouTube, Pinterest, Foorumi">

			<map name="some1">
				<area shape="rect" coords="0,0,24,31" href="https://www.facebook.com/Mensantestit" target="_blank" alt="Mensan �lykkyystestit Facebookissa" onMouseOver="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2F.png';" 
	onMouseOut="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png';">
				<area shape="rect" coords="31,0,69,29" href="https://twitter.com/intent/follow?screen_name=mensafinland&amp;tw_p=followbutton&amp;variant=2.0" target="_blank" alt="Seuraa k�ytt�j�� @MensaFinland" onMouseOver="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2T.png';" 
	onMouseOut="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png';">
				<area shape="rect" coords="69,0,132,29" href="https://www.youtube.com/MensaFinland" target="_blank" alt="Youtube" onMouseOver="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2Y.png';" 
	onMouseOut="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png';">
				<area shape="rect" coords="136,0,171,29" href="https://pinterest.com/mensafinland/" target="_blank" alt="Pinterest" onMouseOver="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2P.png';" 
	onMouseOut="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png';">
				<area shape="rect" coords="211,0,355,29" href="https://www.mensa.fi/forum/" target="_blank" alt="J�senten sivusto" onMouseOver="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2Fo.png';" 
	onMouseOut="if(document.images) document.someicons.src='<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png';">
			</map>
		  </div> <!-- some -->
	  </div><!-- end network --> 
		
		<div id="edge">
		  <div id="edge1"><img src="<?php bloginfo('template_directory'); ?>/images/edgeFull.png" alt="reuna" />
			</div><!-- end edge1 -->
		</div><!-- end network --> 

		<div class="site-branding">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</div>

	</header><!-- #masthead -->
