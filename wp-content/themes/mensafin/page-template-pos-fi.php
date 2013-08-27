<?php
/*
Template Name: Paikallisosastosivu (suomenkielinen)
*/

/**
 * The template for displaying a map of local chapters.
 *
 * Displays a list of contact details for local chapters in each province.
 * The right sidebar shows a map instead of showing ads and links.
 *
 * @package mensaFin
 */

get_template_part('template-parts/pos-data');

get_header(); ?>
<div id="container">
<div id="container-edge"></div>

	<div id="primary" class="content-area" style="width: 525px; float:left; background-color:transparent;">
		<div id="content" class="site-content" role="main">

			<?php the_post(); ?>
			<?php get_template_part( 'template-parts/content-page' ); ?>

		</div><!-- #content -->
	</div><!-- #primary -->
	<div id="sidebar" class="pos-map">
		<?php get_template_part( 'template-parts/pos-map' ); ?>
		<?php get_template_part( 'template-parts/pos-box' ); ?>
	</div><!-- #sidebar (secondary) -->
</div> <!-- #container -->

<?php get_template_part( 'template-parts/sitemap-footer' ); ?>
<?php get_footer(); ?>
