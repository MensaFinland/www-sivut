<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package mensaFin
 */
?>

<article id="post-<?php the_ID(); ?>" class="juttuWide">
	<header class="entry-header">
		<!-- FYI: h1 is defined by style.css to be invisible. Only search engines see it. -->
		<h1 class="entry-title"><?php the_title(); ?></h1>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
<div class="pistelinja"></div><!-- end pistelinja -->
