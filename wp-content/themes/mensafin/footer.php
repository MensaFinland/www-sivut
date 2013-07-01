<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package mensaFin
 */
?>

		</div><!-- end content -->
	</div><!-- #main -->

	<div id="footerBG"> 
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div id="footerInfoArea" class="site-info">
				<div class="footerInfo" style="width:170px;">
			<?php do_action( 'mensafin_credits' ); ?>
			<a href="http://wordpress.org/" title="<?php esc_attr_e( 'A Semantic Personal Publishing Platform', 'mensafin' ); ?>" rel="generator"><?php printf( __( 'Proudly powered by %s', 'mensafin' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( __( 'Theme: %1$s by %2$s.', 'mensafin' ), 'mensaFin', 'Suomen Mensa ry' ); ?>
				</div><!-- end footerInfo  linkkeja alykkyystesteihin -->
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
	</div><!-- end footerBG -->
</div><!-- #page -->

<?php wp_footer(); ?>

</div><!-- end wrapper -->
</div><!-- end background -->

</body>
</html>