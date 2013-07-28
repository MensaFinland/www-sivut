<?php
/**
 * The Heading on the top: "Mensa Finland" + links
 *
 * @package mensaFin
 */
?>
	<header id="masthead" class="site-header" role="banner">
		<div id="MensaLogo"><a href="index.php"><img src="<?php bloginfo('template_directory'); ?>/images/MensaLogo.png" alt="Mensa Logo" /></a></div><!-- end MensaLogo -->
		<div id="MensaText"><a href="index.php"><img src="<?php bloginfo('template_directory'); ?>/images/MensaText.png" alt="leiska" /></a></div><!-- end MensaText -->
		<div id="network">
		  <div id="some">
			<div class="fb-follow" data-href="https://www.facebook.com/Mensantestit" data-layout="button_count" data-show-faces="false" data-width="250">
			</div> <!-- Facebook -->
		  </div> <!-- some -->
		  <div id="members">

		  <!-- hakuautomaatteja varten? t.ulla -->
		  <h1>Mensa on kansainv�linen j�rjest�, jonka toiminnan tarkoituksena on �lykkyyden tunnistaminen ja kehitt�minen ihmisyyden hyv�ksi, �lykkyystutkimuksen tukeminen sek� �lyllisen ja sosiaalisen ymp�rist�n tarjoaminen j�senilleen. Mensan j�seneksi voi liitty� jokainen, joka saavuttaa �lykkyystestiss� paremman tuloksen kuin 98% v�est�st�. mensa, �lykkyystesti, mensan testi, �lykkyys, �o, iq, �o testi, iq testi, testi, test, �lykkyysosam��r�, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, �lykkyystestit, pulmapeli, pulmapelit, sosiaalinen �lykkyys, �lypeli, �lyp��, psykologinen, logiikka, looginen, loogiset, p��ttely, kyky, teht�vi�, tunne�ly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, j�rjest�, yhdistys</h1>
		  
		  
		  <a href="https://www.mensa.fi/forum/"><img id="forumLink" src="<?php bloginfo('template_directory'); ?>/images/jasen.png" width="180" height="64" alt="members area" style="cursor:pointer;" /></a>
			</div><!-- end members -->
	  </div><!-- end network --> 
		
		<div id="edge">
		  <div id="edge1"><img src="<?php bloginfo('template_directory'); ?>/images/reuna1.png" alt="reuna" />
			</div><!-- end edge1 -->
		  <div id="edge2">
			</div><!-- end edge2 -->
		</div><!-- end network --> 

		<div class="site-branding">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</div>

	</header><!-- #masthead -->
