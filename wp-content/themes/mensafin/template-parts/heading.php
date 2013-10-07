<?php
/**
 * The Heading on the top: "Mensa Finland" + links
 *
 * @package mensaFin
 */
?>
	<header id="masthead" class="site-header" role="banner">
<!-- hakuautomaatteja varten? t.ulla -->
<h1>Mensa on kansainvälinen järjestö, jonka toiminnan tarkoituksena on älykkyyden tunnistaminen ja kehittäminen ihmisyyden hyväksi, älykkyystutkimuksen tukeminen sekä älyllisen ja sosiaalisen ympäristön tarjoaminen jäsenilleen. Mensan jäseneksi voi liittyä jokainen, joka saavuttaa älykkyystestissä paremman tuloksen kuin 98% väestöstä.</h1>
<h1>Hakusanoja: mensa, mensa testi, älykkyystesti, mensan testi, äo testi, mensan kotitesti, älykkyysosamäärä, äly, älykkyys, yli, huippu, älykäs, huippuälykäs, älykkäille, älykkäiden, äo, iq, äo testi, iq testi, testi, test, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, älykkyystestit, eurooppalainen älykkyystesti,
psykologinen testi, sosiaalinen älykkyys, älypeli, älypää, psykologinen, logiikka, looginen, loogiset, päättely, kyky, tehtäviä, tunneäly, ilmainen nettitesti, matemaattinen, numeerinen, numeeriset, raja, jakauma, online, järjestö, yhdistys, yhteisö, ryhmä, seura, seuraa, verkosto, vertais, tapahtuma, tapahtumia, kokemuksia, taito, lahjakkuus,
lahjakas, lapsi, tuki, erilaisuus, perspektiivi, harrastus, ystävä, ystäviä, kavereita, keskustelu, sananvapaus, chat, huumori, pulmapeli, pulmapelit, vapaaehtois, hyväntekeväisyys, parantaa, sukututkimus, tutustuminen, tekemistä, kohtaamisia, yhteistyö, oppiminen, oppia, mahdollisuus, kansainvälinen, maailmanlaajuinen, toiminta, toimintaa, älyä, oivallusta, oivaltaminen, oivaltaa, &auml;lykkyys, &auml:o, &auml;lykas, alykkyys, aly, alykas</h1>

		<div id="MensaLogo"><a href="index.php"><img src="<?php bloginfo('template_directory'); ?>/images/MensaLogo.png" alt="Mensa Logo" /></a></div><!-- end MensaLogo -->
		<div id="MensaText"><a href="index.php"><img src="<?php bloginfo('template_directory'); ?>/images/MensaText.png" alt="Mensa Finland" /></a></div><!-- end MensaText -->
		<div id="network">
		  <div id="some">
			<img id="someicons" src="<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png" width="355" height="29" usemap="#some1" alt="FB, Twitter, YouTube, Pinterest, Foorumi" style="border:thin black none">

			<map name="some1">
				<area shape="rect" coords="0,0,24,31" href="https://www.facebook.com/Mensantestit" target="_blank" alt="Mensan älykkyystestit Facebookissa"
				  onMouseOver="if(document.images) $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2F.png');"
				  onMouseOut= "if(document.images) $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png');">
				<area shape="rect" coords="31,0,69,29" href="https://twitter.com/MensaFinland" target="_blank" alt="Seuraa käyttäjää @MensaFinland"
				  onMouseOver="if(document.images) $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2T.png');" 
				  onMouseOut="if(document.images)  $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png');">
				<area shape="rect" coords="69,0,132,29" href="https://www.youtube.com/MensaFinland" target="_blank" alt="Youtube"
				  onMouseOver="if(document.images) $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2Y.png');" 
				  onMouseOut="if(document.images)  $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png');">
				<area shape="rect" coords="136,0,171,29" href="https://pinterest.com/mensafinland/" target="_blank" alt="Pinterest"
				  onMouseOver="if(document.images) $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2P.png');" 
				  onMouseOut="if(document.images)  $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png');">
				<area shape="rect" coords="211,0,355,29" href="https://www.mensa.fi/forum/" alt="Jäsenten sivusto"
				  onMouseOver="if(document.images) $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2Fo.png');" 
				  onMouseOut="if(document.images)  $('#someicons').attr('src', '<?php bloginfo('template_directory'); ?>/images/some/networkKaikki2.png');">
			</map>
		  </div> <!-- some -->
	  </div><!-- end network --> 
		
		<div class="site-branding">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</div>

	</header><!-- #masthead -->
