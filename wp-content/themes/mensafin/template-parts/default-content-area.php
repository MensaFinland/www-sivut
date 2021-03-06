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
	<br/><br/>
  </div><!-- #content -->
</div><!-- #primary -->
