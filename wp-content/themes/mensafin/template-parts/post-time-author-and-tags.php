<?php
/**
 * Displays metadata - author, posting time and tags - for a post.
 * Used in front page and showing whole posts.
 *
 * @package mensaFin
 */
?>

<div class="entry-meta" style="font-size:10px; color: black; padding-left: 10px;">
  <?php mensafin_posted_on(); ?>
  <?php
    $tag_list = get_the_tag_list( '', __( ', ', 'mensafin' ) );
    print(__("Aiheet") . ": ");
    print($tag_list);
    print(".");
  ?>
</div><!-- .entry-meta -->
