<?php
/**
 * Content area for:
 *  * Pages
 *  * Post in the front pages's "announcements"
 *
 * @package mensaFin
 */
?>
<div id="primary" class="content-area" style="width:555px; float:left; background-color:transparent;">
  <div id="content" class="site-content" role="main">
    <?php while ( have_posts() ) : the_post(); ?>
      <?php global $content_style;
            get_template_part( 'template-parts/content', $content_style ); ?>

    <?php endwhile; // end of the loop. ?>
  </div><!-- #content -->
</div><!-- #primary -->
