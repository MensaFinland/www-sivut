<?php
/**
 * Content area for:
 *  * Pages
 *  * Post in the front pages's "announcements"
 *
 * @package mensaFin
 */
?>
<div id="primary" class="content-area default-content-area">
  <div id="content" class="site-content" role="main">
    <?php while ( have_posts() ) : the_post(); ?>
      <?php global $content_style;
            get_template_part( 'template-parts/content', $content_style ); ?>
    <?php endwhile; // end of the loop. ?>
	<img src="<?php bloginfo('template_directory'); ?>/images/loppunelio.jpg" width="10" height="10" alt="end of story" />
  </div><!-- #content -->
</div><!-- #primary -->
