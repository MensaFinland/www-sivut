<?php
/**
 * The template used for displaying a post.
 * Post summaries are displayed in the front page. Clikcing one opens single.php and flows down to this file.
 *
 * @package mensaFin
 */
?>

<article id="post-<?php the_ID(); ?>" class="juttuWide mainArticleFull">
	<header class="entry-header">
		<!-- FYI: h1 is defined by style.css to be invisible. Only search engines see it. -->
		<h1 class="entry-title"><?php the_title(); ?></h1>
		<!-- The human readable title of the post -->
		<h2 class="entry-title"><?php the_title(); ?></h2>
		<?php get_template_part( 'template-parts/post-time-author-and-tags' ); ?>

	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
