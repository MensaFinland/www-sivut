<?php
/*
Template Name: Testikalenteri (suomenkielinen)
*/

/**
 * The template for displaying test calendar page.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package mensaFin
 */
?>

<!DOCTYPE html>
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

<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js" type="text/javascript"></script>
<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>

<link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<link href="<?php bloginfo('template_directory'); ?>/evtcal.css" rel="stylesheet" type="text/css" />
<script src="<?php bloginfo('template_directory'); ?>/eventcalendar.js" type="text/javascript"></script>
<script src="<?php bloginfo('template_directory'); ?>/evtcal2.js" type="text/javascript"></script>
<script src="<?php bloginfo('template_directory'); ?>/skripteja2.js" type="text/javascript"></script>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<meta name="robots" content="index,follow" /> 
<meta name="rating" content="general" />
<meta charset="utf-8" />
<meta http-equiv="Page-Enter" content="blendTrans(Duration=0.19)" />
<meta name="description" content="Mensa on kansainv‰linen j‰rjestˆ, jonka toiminnan tarkoituksena on ‰lykkyyden tunnistaminen ja kehitt‰minen ihmisyyden hyv‰ksi, ‰lykkyystutkimuksen tukeminen sek‰ ‰lyllisen ja sosiaalisen ymp‰ristˆn tarjoaminen j‰senilleen. Mensan j‰seneksi voi liitty‰ jokainen, joka saavuttaa ‰lykkyystestiss‰ paremman tuloksen kuin 98% v‰estˆst‰." />
<meta name="keywords" content="mensa, ‰lykkyystesti, mensan testi, ‰lykkyys, ‰o, iq, ‰o testi, iq testi, testi, test, ‰lykkyysosam‰‰r‰, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, ‰lykkyystestit, pulmapeli, pulmapelit, sosiaalinen ‰lykkyys, ‰lypeli, ‰lyp‰‰, psykologinen, logiikka, looginen, loogiset, p‰‰ttely, kyky, teht‰vi‰, tunne‰ly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, j‰rjestˆ, yhdistys" />
<meta name="Author" content="Suomen Mensa ry, Sivut suunnitteli Tuomas Hietanen, Ulla Sainio 2013" />

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php get_template_part('template-parts/init-facebook-social-plugin') ?>

<div id="background">
<div id="wrapper">

<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
        <?php get_template_part('template-parts/heading'); ?>
        <?php get_template_part('template-parts/navigation'); ?>

<div id="container">
<div id="container-edge"></div>

	<div id="primary" class="content-area" style="width:425px; float: left; background-color:transparent;">
		<div id="content" class="site-content" role="main">

			<?php the_post(); //while ( have_posts() ) : the_post(); ?>

				<?php //get_template_part( 'content', 'page' ); ?>
				<?php get_template_part( 'template-parts/content-page' ); ?>

			<?php //endwhile; // end of the loop. ?>

		</div><!-- #content -->
	</div><!-- #primary -->
	<div id="calendarBG" style="float: left;">
	<div id="calendar" style="">
        <?php get_template_part('template-parts/narrow-test-calendar-full'); ?>
	</div> <!-- #calendar -->
	</div> <!-- #calendarBG -->
	<div id="sidebar"> 
          <?php get_template_part( 'template-parts/test-map' ) ?>
	</div><!-- #sidebar (secondary) -->
</div> <!-- #container -->

<?php get_template_part( 'template-parts/sitemap-footer' ); ?>

        <div id="dialog" title="QR-Code">
            <p>Valokuvaa QR-koodi asianmukaisella ohjelmalla k‰nnyk‰ll‰si, niin voit asettaa muistutuksen tapahtumasta.</p>
            <img id="iQRCode" alt="QR-code" />
        </div>
        <div id="LocalizationQrcode" style="visibility: hidden">QR</div>
        <div id="LocalizationIcal" style="visibility: hidden">iCal</div>

		<table class="datacontainer">
			<thead><tr class="dsHead"><th>Id</th>               <th>Event title</th>              <th>Year</th>               <th>Month</th>             <th>Day</th>             <th>Hour</th>             <th>Minute</th>             <th>City</th>                   <th>Street Address</th>                         <th>Location details</th>                                                  <th>Event details</th>                              <th>Latitude</th>                     <th>Longitude</th></tr></thead>
			<tbody id="#datasource" class="datacontainer">
				<!--
					This structure comes from the data source. (Write with ASP, PHP or what ever...)
					Modify the data values and linecount, but please use format provided here.
					There are two types of items, events (13 columns) and infos (3 columns).
					Id-field is what ever url-encoded string or number.
					Please be brief for all fields: QR-codes have SMS-style character limitations.
				-->
				<tr class="dsEvent"><td class="dsId">1231</td><td class="dsTitle">Test</td><td class="dsYear">2013</td><td class="dsMonth">06</td><td class="dsDay">07</td><td class="dsHour">17</td><td class="dsMinute">30</td><td class="dsCity">Helsinki</td><td class="dsStreetAddress">Rikhardinkatu 3</td><td class="dsLocationDetails">Rikhardinkadun kirjasto, Salonki, 3. krs</td><td class="dsEventDetails">(viitenumero: 11743)</td><td class="dsLatitude">60.1661552</td><td class="dsLongitude">24.9463225</td></tr>
				<tr class="dsEvent"><td class="dsId">1232</td><td class="dsTitle">Test</td><td class="dsYear">2013</td><td class="dsMonth">06</td><td class="dsDay">16</td><td class="dsHour">17</td><td class="dsMinute">30</td><td class="dsCity">Tampere</td><td class="dsStreetAddress">Kirjastotalo Metso, Pirkankatu 2</td><td class="dsLocationDetails">Toivonen-sali, muumikerros</td><td class="dsEventDetails">(viitenumero: 11620)</td><td class="dsLatitude">61.4977606</td><td class="dsLongitude">23.7507924</td></tr>
				<tr class="dsEvent"><td class="dsId">1233</td><td class="dsTitle">Test</td><td class="dsYear">2013</td><td class="dsMonth">06</td><td class="dsDay">22</td><td class="dsHour">18</td><td class="dsMinute">00</td><td class="dsCity">Lappeenranta</td><td class="dsStreetAddress">Villimiehenkatu 1</td><td class="dsLocationDetails"></td><td class="dsEventDetails">(viitenumero: 11905)</td><td class="dsLatitude">61.0573018</td><td class="dsLongitude">28.1917542</td></tr>
				<tr class="dsEvent"><td class="dsId">1234</td><td class="dsTitle">Test</td><td class="dsYear">2013</td><td class="dsMonth">06</td><td class="dsDay">25</td><td class="dsHour">13</td><td class="dsMinute">00</td><td class="dsCity">Sein‰joki</td><td class="dsStreetAddress">Alvar Aallon katu 14</td><td class="dsLocationDetails">P‰‰kirjasto Apila, Jaaksi 3 (pieni kokoustila/atk-luokka)</td><td class="dsEventDetails">(viitenumero: 11879)</td><td class="dsLatitude">62.7858996</td><td class="dsLongitude">22.8402672</td></tr>
				<tr class="dsEvent"><td class="dsId">1235</td><td class="dsTitle">Test</td><td class="dsYear">2013</td><td class="dsMonth">06</td><td class="dsDay">25</td><td class="dsHour">13</td><td class="dsMinute">00</td><td class="dsCity">Turku</td><td class="dsStreetAddress">Rauhankatu 1</td><td class="dsLocationDetails"></td><td class="dsEventDetails">(viitenumero: 11879)</td><td class="dsLatitude">60.4526784</td><td class="dsLongitude">22.2573233</td></tr>
				<tr class="dsEvent"><td class="dsId">1236</td><td class="dsTitle">Test</td><td class="dsYear">2013</td><td class="dsMonth">06</td><td class="dsDay">25</td><td class="dsHour">14</td><td class="dsMinute">30</td><td class="dsCity">Helsinki</td><td class="dsStreetAddress">Rikhardinkatu 3</td><td class="dsLocationDetails">Rikhardinkadun kirjasto, Salonki, 3. krs</td><td class="dsEventDetails">(viitenumero: 11895)</td><td class="dsLatitude">60.1661552</td><td class="dsLongitude">24.9463225</td></tr>
				<tr class="dsInfo"><td class="dsId">1237</td><td colspan="9" class="dsTitle">Global test day 1.10.2013</td><td colspan="3" class="dsDetails">Some more info to come...</td></tr>
				<!-- End of events. -->
			</tbody>
		</table>



<?php get_footer(); ?>
