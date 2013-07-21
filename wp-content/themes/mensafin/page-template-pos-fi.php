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

get_header(); ?>
<div id="container">
<div id="container-edge"></div>

	<div id="primary" class="content-area" style="width: 525px; float:left; background-color:transparent;">
		<div id="content" class="site-content" role="main" style="overflow:hidden;">

			<?php the_post(); //while ( have_posts() ) : the_post(); ?>

				<?php //get_template_part( 'content', 'page' ); ?>
				<?php $contentlike_template_part = 'template-parts/pos-list'; ?>
				<?php get_template_part( 'template-parts/content-page' ); ?>

			<?php //endwhile; // end of the loop. ?>

		</div><!-- #content -->
	</div><!-- #primary -->
	<div id="sidebar" class="pos-map">
		<?php get_template_part( 'template-parts/pos-map' ); ?>
	</div><!-- #sidebar (secondary) -->
</div> <!-- #container -->

<?php get_template_part( 'template-parts/sitemap-footer' ); ?>
<?php get_footer(); ?>
