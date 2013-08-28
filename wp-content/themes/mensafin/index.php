<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package mensaFin
 */

get_header(); ?>
<div id="container">
<div id="container-edge"></div>
	<div id="primary" class="content-area" style="width:425px; float: left; background-color:transparent;">
		<div id="content" class="site-content" role="main">

		<?php if ( have_posts() ) : ?>

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php
					/* Include the Post-Format-specific template for the content.
					 * If you want to overload this in a child theme then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'content', 'frontpage' );
				?>

			<?php endwhile; ?>

			<?php mensafin_content_nav( 'nav-below' ); ?>

		<?php else : ?>

			<?php get_template_part( 'no-results', 'index' ); ?>

		<?php endif; ?>

		</div><!-- #content -->

	</div><!-- #primary -->
	<div id="calendarBG" style="float: left;">
	<div id="calendar" style="">
        <?php get_template_part('template-parts/narrow-test-calendar-main'); ?>
	</div> <!-- #calendar -->
	</div> <!-- #calendarBG -->
        <div id="sidebar"> 
          <?php get_template_part( 'banneri-ylempi' ) ?>
          <?php get_template_part( 'template-parts/mensatestit-on-facebook' ) ?>
          <?php get_template_part( 'banneri-alempi' ) ?>
        </div><!-- #sidebar (secondary) -->
</div> <!-- #container -->

<?php get_template_part( 'template-parts/sitemap-footer' ); ?>
<?php get_footer(); ?>
