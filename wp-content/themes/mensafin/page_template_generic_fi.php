<?php
/*
Template Name: Perussivu (suomi)
*/

/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package mensaFin
 */

get_header(); ?>
<div id="container">
<div id="container-edge"></div>

	<div id="primary" class="content-area" style="width:555px; float:left; background-color:transparent;">
		<div id="content" class="site-content" role="main">

			<?php the_post(); //while ( have_posts() ) : the_post(); ?>

				<?php //get_template_part( 'content', 'page' ); ?>
				<?php get_template_part( 'template_parts/content-page' ); ?>

			<?php //endwhile; // end of the loop. ?>

		</div><!-- #content -->
	</div><!-- #primary -->
	<div id="sidebar"> 
          <?php get_template_part( 'template_parts/link-to-iq-blog' ) ?>
          <?php get_template_part( 'template_parts/mensatestit-on-facebook' ) ?>
	</div><!-- #sidebar (secondary) -->
</div> <!-- #container -->

<?php get_template_part( 'template_parts/sitemap-footer' ); ?>
<?php get_footer(); ?>
