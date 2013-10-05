<?php
/**
 * The Calendar-Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package mensaFin
 */
?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>

<script type="text/javascript">
  window.wordpress_theme_path = "<?php bloginfo('template_directory'); ?>/";
</script>

<?php

  // wp_enqueue_script is the preferred way to include Javascript and CSS.
  //  - Scripts are included only once.
  //  - Dependencies are included in correct order.
  // wp_head() call in header.php prints the actual include lines.
  //
  //                 A NAME WE CHOOSE   ADDRESS OF SCRIPT/CSS                                  DEPENDENCY SCRIPTS
  wp_enqueue_script('jquery-bundle'   , 'http://code.jquery.com/jquery-1.9.1.min.js'                                       );
  wp_enqueue_script('html5shiv'       , 'http://html5shiv.googlecode.com/svn/trunk/html5.js'                           );
  wp_enqueue_script('jquery-ui-bundle', 'http://code.jquery.com/ui/1.10.3/jquery-ui.min.js'      , array('jquery-bundle')   );
  wp_enqueue_style( 'jquery-ui-bundle', 'http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.min.css');

  wp_enqueue_script('goggle-maps-api' , 'http://maps.google.com/maps/api/js?sensor=false'    , array('jquery-ui-bundle'));
  wp_enqueue_script('local-skripteja' , get_bloginfo('template_directory') . '/skripteja.js' , array('jquery-bundle')   );
  wp_enqueue_script('local-skripteja2', get_bloginfo('template_directory') . '/skripteja2.js', array('jquery-ui-bundle')   );
  wp_enqueue_script('local-evtcal'    , get_bloginfo('template_directory') . '/eventcalendar.js', array('jquery-ui-bundle')   );
  wp_enqueue_style( 'local-evtcal'    , get_bloginfo('template_directory') . '/evtcal.css' );

  wp_enqueue_script('local-evtcal2'   , get_bloginfo('template_directory') . '/evtcal2.js', array('jquery-ui-bundle')   );

  wp_enqueue_style('font-montserrat', 'http://fonts.googleapis.com/css?family=Montserrat');

  wp_head(); ?>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<meta name="robots" content="index,follow" />
<meta name="rating" content="general" />
<meta name="description" content="Mensa on kansainvälinen järjestö, jonka toiminnan tarkoituksena on älykkyyden tunnistaminen ja kehittäminen ihmisyyden hyväksi, älykkyystutkimuksen tukeminen sekä älyllisen ja sosiaalisen ympäristön tarjoaminen jäsenilleen. Mensan jäseneksi voi liittyä jokainen, joka saavuttaa älykkyystestissä paremman tuloksen kuin 98% väestöstä." />
<meta name="keywords" content="mensa, älykkyystesti, mensan testi, äykkyys, äo, iq, äo testi, iq testi, testi, test, älykkyysosamäärä, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, älykkyystestit, pulmapeli, pulmapelit, sosiaalinen älykkyys, älypeli, älypää, psykologinen, logiikka, looginen, loogiset, päättely, kyky, tehtäviä, tunneäly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, järjestö, yhdistys" />
<meta name="Author" content="Suomen Mensa ry, Sivut suunnitteli Tuomas Hietanen, Ulla Sainio, Simo Härkönen 2013" />

<script type="text/javascript">
if (typeof jQuery == 'undefined') {
    document.write(unescape("%3Cscript src='<?php bloginfo('template_directory'); ?>/libraries/jquery-ui.min.css' type='text/javascript'%3E%3C/script%3E"));
    document.write(unescape("%3Cscript src='<?php bloginfo('template_directory'); ?>/libraries/jquery-1.9.1.min.js' type='text/javascript'%3E%3C/script%3E"));
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
