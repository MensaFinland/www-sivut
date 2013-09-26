<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package mensaFin
 */

function render_contentlike_template_part()
{
	global $contentlike_template_part;
	if ($contentlike_template_part)
	{
		get_template_part($contentlike_template_part);
	}
}
?>

<article id="post-<?php the_ID(); ?>" class="juttuWide mainArticleFull">
	<header class="entry-header">
		<!-- FYI: h1 is defined by style.css to be invisible. Only search engines see it. -->
		<h1 class="entry-title"><?php the_title(); ?></h1>
		<!-- The human readable title of the post -->
		<h2 class="entry-title"><?php the_title(); ?></h2>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php render_contentlike_template_part(); ?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
