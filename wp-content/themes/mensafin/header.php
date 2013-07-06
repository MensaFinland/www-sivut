<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package mensaFin
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>

<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src="http://code.jquery.com/jquery-1.9.1.js" type="text/javascript"></script>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<script src="skripteja.js" type="text/javascript"></script>

<link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<meta name="robots" content="index,follow" /> 
<meta name="rating" content="general" />
<meta charset="utf-8" />
<meta http-equiv="Page-Enter" content="blendTrans(Duration=0.19)" />
<meta name="description" content="Mensa on kansainvälinen järjestö, jonka toiminnan tarkoituksena on älykkyyden tunnistaminen ja kehittäminen ihmisyyden hyväksi, älykkyystutkimuksen tukeminen sekä älyllisen ja sosiaalisen ympäristön tarjoaminen jäsenilleen. Mensan jäseneksi voi liittyä jokainen, joka saavuttaa älykkyystestissä paremman tuloksen kuin 98% väestöstä." />
<meta name="keywords" content="mensa, älykkyystesti, mensan testi, älykkyys, äo, iq, äo testi, iq testi, testi, test, älykkyysosamäärä, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, älykkyystestit, pulmapeli, pulmapelit, sosiaalinen älykkyys, älypeli, älypää, psykologinen, logiikka, looginen, loogiset, päättely, kyky, tehtäviä, tunneäly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, järjestö, yhdistys" />
<meta name="Author" content="Suomen Mensa ry, Sivut suunnitteli Tuomas Hietanen, Ulla Sainio 2013" />

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="background">
<div id="wrapper">

<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
	<header id="masthead" class="site-header" role="banner">
		<div id="MensaLogo"><a href="index.html"><img src="<?php bloginfo('template_directory'); ?>/images/MensaLogo.png" alt="Mensa Logo" /></a></div><!-- end MensaLogo -->
		<div id="MensaText"><a href="index.html"><img src="images/MensaText.png" alt="leiska" /></a></div><!-- end MensaText -->
		<div id="network">
			<div id="some"><img src="images/some.png" width="190" height="64" alt="social media" />
			</div><!-- end facebook -->
		  <div id="members">
		  
		  
		  <!-- hakuautomaatteja varten? t.ulla -->
		  <h1>Mensa on kansainvälinen järjestö, jonka toiminnan tarkoituksena on älykkyyden tunnistaminen ja kehittäminen ihmisyyden hyväksi, älykkyystutkimuksen tukeminen sekä älyllisen ja sosiaalisen ympäristön tarjoaminen jäsenilleen. Mensan jäseneksi voi liittyä jokainen, joka saavuttaa älykkyystestissä paremman tuloksen kuin 98% väestöstä. mensa, älykkyystesti, mensan testi, älykkyys, äo, iq, äo testi, iq testi, testi, test, älykkyysosamäärä, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, älykkyystestit, pulmapeli, pulmapelit, sosiaalinen älykkyys, älypeli, älypää, psykologinen, logiikka, looginen, loogiset, päättely, kyky, tehtäviä, tunneäly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, järjestö, yhdistys</h1>
		  
		  
		  <img id="forumLink" src="images/jasen.png" width="180" height="64" alt="members area" style="cursor:pointer;" />
			</div><!-- end members -->
	  </div><!-- end network --> 
		
		<div id="edge">
		  <div id="edge1"><img src="images/reuna1.png" alt="reuna" />
			</div><!-- end edge1 -->
		  <div id="edge2">
			</div><!-- end edge2 -->
		</div><!-- end network --> 

		<div class="site-branding">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</div>

	</header><!-- #masthead -->

		<nav id="site-navigation" class="navigation-main" role="navigation">
			<ul>
				<h1 class="menu-toggle"><?php _e( 'Menu', 'mensafin' ); ?></h1>
				<div class="screen-reader-text skip-link"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'mensafin' ); ?>"><?php _e( 'Skip to content', 'mensafin' ); ?></a></div>

				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
			</li>
		</nav><!-- #site-navigation -->
	
	<div id="main" class="site-main">
	<div id="content">
