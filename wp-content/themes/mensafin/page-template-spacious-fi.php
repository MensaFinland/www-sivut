<?php
/*
Template Name: Avara sivupalkiton (suomenkielinen)
*/

/**
 * This template allocates more space to text & images
 * by taking advertising sidebar away.
 *
 * @package mensaFin
 */

get_header(); ?>
<div id="container" class="spacious">
<div id="container-edge"></div>
  <?php $content_style = 'page'; ?>
  <?php get_template_part( 'template-parts/default-content-area' ); ?>
</div> <!-- #container -->

<?php get_template_part( 'template-parts/sitemap-footer' ); ?>
<?php get_footer(); ?>
