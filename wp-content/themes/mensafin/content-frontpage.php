<?php
/**
 * @package mensaFin
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h2 class="entry-title"><a href="<?php the_permalink(); ?>" class="nounderline"><?php the_title(); ?></a></h2>
		<?php get_template_part('template-parts/post-author-time-and-tags' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content text juttu">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'mensafin' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
<div class="pistelinja"></div><!-- end pistelinja -->
