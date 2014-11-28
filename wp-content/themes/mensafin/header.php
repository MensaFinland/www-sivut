<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package mensaFin
 */
 
  $http = is_ssl() ? 'https' : 'http';

?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?> xmlns:fb="http://ogp.me/ns/fb#">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>

<script type="text/javascript">
  window.wordpress_theme_path = "<?php bloginfo('template_directory'); ?>/";
</script>
<?php wp_enqueue_script('jquery-bundle'   , $http.'://code.jquery.com/jquery-2.1.1.min.js'                                       ); ?>
<?php wp_enqueue_script('html5shiv'       , $http.'://html5shiv.googlecode.com/svn/trunk/html5.js'                           ); ?>
<?php wp_enqueue_script('jquery-ui-bundle', $http.'://code.jquery.com/ui/1.10.3/jquery-ui.min.js'      , array('jquery-bundle')   ); ?>
<?php wp_enqueue_style( 'jquery-ui-bundle', $http.'://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.min.css'); ?>
<?php wp_enqueue_script('local-generoitu' , get_bloginfo('template_directory') . '/common.min.js' , array('jquery-bundle')   ); ?>
<?php wp_enqueue_style('font-montserrat', $http.'://fonts.googleapis.com/css?family=Montserrat'); ?>
<?php wp_head(); ?>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<meta property="og:image" content="<?php bloginfo('template_directory'); ?>/images/Mlogo.jpg" />

<meta name="robots" content="index,follow" />
<meta name="rating" content="general" />
<meta name="description" content="Mensa on kansainvälinen järjestö, jonka toiminnan tarkoituksena on älykkyyden tunnistaminen ja kehittäminen ihmisyyden hyväksi, älykkyystutkimuksen tukeminen sekä älyllisen ja sosiaalisen ympäristön tarjoaminen jäsenilleen. Mensan jäseneksi voi liittyä jokainen, joka saavuttaa älykkyystestissä paremman tuloksen kuin 98% väestöstä." />
<meta name="keywords" content="mensa, mensa testi, älykkyystesti, mensan testi, äo testi, mensan kotitesti, älykkyysosamäärä, äly, älykkyys, yli, huippu, älykäs, huippuälykäs, älykkäille, älykkäiden, äo, iq, äo testi, iq testi, testi, test, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, älykkyystestit, sosiaalinen älykkyys, älypeli, älypää, psykologinen, logiikka, looginen, loogiset, päättely, kyky, tehtäviä, tunneäly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, järjestö, yhdistys, yhteisö, seura, seuraa, verkosto, vertais, tapahtuma, tapahtumia, lahjakkuus, lahjakas, lapsi, tuki, erilaisuus, perspektiivi, harrastus, ystävä, ystäviä, kavereita, keskustelu, pulmapeli, pulmapelit, vapaaehtois, parantaa, tutustuminen, tekemistä, kohtaamisia, yhteistyö, oppiminen, oppia, kansainvälinen, maailmanlaajuinen, toiminta, toimintaa, älyä" />
<meta name="google-site-verification" content="U9zMoDfEQyW04N7KPNeXXpaYKzmrFfg1ztDSPLE7l6g" />
<meta name="Author" content="Suomen Mensa ry, Sivut suunnitteli Tuomas Hietanen, Ulla Sainio, Simo Härkönen 2013" />

<script type="text/javascript">
if (typeof jQuery == 'undefined') {
    document.write(unescape("%3Clink rel='stylesheet' href='<?php bloginfo('template_directory'); ?>/libraries/jquery-ui.min.css' type='text/css'%3E%3C/link%3E"));
    document.write(unescape("%3Cscript src='<?php bloginfo('template_directory'); ?>/libraries/jquery-2.1.1.min.js' type='text/javascript'%3E%3C/script%3E"));
    document.write(unescape("%3Cscript src='<?php bloginfo('template_directory'); ?>/libraries/jquery-ui.min.js' type='text/javascript'%3E%3C/script%3E"));
}
</script>
<!--[if lt IE 9 ]><style>.mainArticleFull{overflow-y: scroll;}</style><![endif]-->
<!--[if IE 9 ]><style>.mainArticleFull{overflow-y: scroll;}</style><![endif]-->

</head>

<body <?php body_class(); ?>>

<?php get_template_part('template-parts/init-facebook-social-plugin') ?>

<div id="background">
<div id="backgroundfix"></div>
<div id="wrapper">

<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
	<?php get_template_part('template-parts/contact-info-ribbon'); ?>
        <?php get_template_part('template-parts/heading'); ?>
        <?php get_template_part('template-parts/navigation'); ?>

	<!-- Torn notebook edge -->
	<div id="edge">
		<div id="edge1"><img src="<?php bloginfo('template_directory'); ?>/images/edgeFull.png" alt="reuna" />
		</div><!-- end edge1 -->
	</div><!-- end edge -->
