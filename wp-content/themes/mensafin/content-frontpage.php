<?php
/**
 * @package mensaFin
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h3 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
		<div class="entry-meta" style="font-size:10px; color: black; padding-left: 10px;">
			<?php mensafin_posted_on(); ?>
                        <?php
			$tag_list = get_the_tag_list( '', __( ', ', 'mensafin' ) );
			print(__("Aiheet") . ": ");
			print($tag_list);
			print(".");
                        ?>
		</div><!-- .entry-meta -->
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'mensafin' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
