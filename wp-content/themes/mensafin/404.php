<?php
/**
 * In the front page, renders an individual news item in "announcements" blog.
 *
 * @package mensaFin
 */

get_header(); ?>
<div id="container">
<div id="container-edge"></div>
  <?php $content_style = '404'; ?>
  <?php get_template_part( 'template-parts/default-content-area' ); ?>
  <?php get_template_part( 'template-parts/default-sidebar'      ); ?>
</div> <!-- #container -->

<?php get_template_part( 'template-parts/sitemap-footer' ); ?>
<?php get_footer(); ?>
