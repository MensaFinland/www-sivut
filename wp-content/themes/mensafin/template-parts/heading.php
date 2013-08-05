<?php
/**
 * The Heading on the top: "Mensa Finland" + links
 *
 * @package mensaFin
 */
?>
	<header id="masthead" class="site-header" role="banner">
		  <!-- hakuautomaatteja varten? t.ulla -->
		  <h1>Mensa on kansainvälinen järjestö, jonka toiminnan tarkoituksena on älykkyyden tunnistaminen ja kehittäminen ihmisyyden hyväksi, älykkyystutkimuksen tukeminen sekä älyllisen ja sosiaalisen ympäristön tarjoaminen jäsenilleen. Mensan jäseneksi voi liittyä jokainen, joka saavuttaa älykkyystestissä paremman tuloksen kuin 98% väestöstä. mensa, älykkyystesti, mensan testi, älykkyys, äo, iq, äo testi, iq testi, testi, test, älykkyysosamäärä, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, älykkyystestit, pulmapeli, pulmapelit, sosiaalinen älykkyys, älypeli, älypää, psykologinen, logiikka, looginen, loogiset, päättely, kyky, tehtäviä, tunneäly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, järjestö, yhdistys</h1>
	
		<div id="MensaLogo"><a href="index.php"><img src="<?php bloginfo('template_directory'); ?>/images/MensaLogo.png" alt="Mensa Logo" /></a></div><!-- end MensaLogo -->
		<div id="MensaText"><a href="index.php"><img src="<?php bloginfo('template_directory'); ?>/images/MensaText.png" alt="leiska" /></a></div><!-- end MensaText -->
		<div id="network">
		  <div id="some">
			<img name="some" src="<?php bloginfo('template_directory'); ?>/images/networkKaikki.png" width="351" height="25" border="0" usemap="#some1">

			<map name="some1">
				<area shape="rect" coords="0,0,24,25" href="https://www.facebook.com/Mensantestit" target="_blank" alt="Mensan älykkyystestit Facebookissa">
				<area shape="rect" coords="29,0,67,25" href="https://twitter.com/intent/follow?screen_name=mensafinland&tw_p=followbutton&variant=2.0" target="_blank" alt="Seuraa käyttäjää @MensaFinland">
				<area shape="rect" coords="67,0,130,25" href="https://www.youtube.com/MensaFinland" target="_blank" alt="Youtube">
				<area shape="rect" coords="134,0,169,25" href="https://pinterest.com/mensafinland/" target="_blank" alt="Pinterest">
				<area shape="rect" coords="209,0,351,25" href="https://www.mensa.fi/forum/" target="_blank" alt="Jäsenten sivusto">
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
