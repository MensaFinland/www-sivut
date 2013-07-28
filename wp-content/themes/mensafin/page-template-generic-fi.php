<?php
/*
Template Name: Perussivu (suomenkielinen)
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
  <?php $content_style = 'page'; ?>
  <?php get_template_part( 'template-parts/default-content-area' ); ?>
  <?php get_template_part( 'template-parts/default-sidebar'      ); ?>
</div> <!-- #container -->

<?php get_template_part( 'template-parts/sitemap-footer' ); ?>
<?php get_footer(); ?>
