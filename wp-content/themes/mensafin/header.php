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
<script type="text/javascript">
  window.wordpress_theme_path = "<?php bloginfo('template_directory'); ?>/";
</script>
<script src="<?php bloginfo('template_directory'); ?>/skripteja.js" type="text/javascript"></script> 

<link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<meta name="robots" content="index,follow" /> 
<meta name="rating" content="general" />
<meta charset="utf-8" />
<meta http-equiv="Page-Enter" content="blendTrans(Duration=0.19)" />
<meta name="description" content="Mensa on kansainv�linen j�rjest�, jonka toiminnan tarkoituksena on �lykkyyden tunnistaminen ja kehitt�minen ihmisyyden hyv�ksi, �lykkyystutkimuksen tukeminen sek� �lyllisen ja sosiaalisen ymp�rist�n tarjoaminen j�senilleen. Mensan j�seneksi voi liitty� jokainen, joka saavuttaa �lykkyystestiss� paremman tuloksen kuin 98% v�est�st�." />
<meta name="keywords" content="mensa, �lykkyystesti, mensan testi, �lykkyys, �o, iq, �o testi, iq testi, testi, test, �lykkyysosam��r�, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, �lykkyystestit, pulmapeli, pulmapelit, sosiaalinen �lykkyys, �lypeli, �lyp��, psykologinen, logiikka, looginen, loogiset, p��ttely, kyky, teht�vi�, tunne�ly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, j�rjest�, yhdistys" />
<meta name="Author" content="Suomen Mensa ry, Sivut suunnitteli Tuomas Hietanen, Ulla Sainio 2013" />

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="background">
<div id="wrapper">

<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
        <?php get_template_part('template_parts/heading'); ?>
        <?php get_template_part('template_parts/navigation'); ?>

	<!-- <div id="main" class="site-main"> -->
	<div id="container">
        <div id="container-edge"></div>
