<?php
/*
Template Name: Nettitesti (suomenkielinen)
*/

/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package mensaFin
 */

get_header(); ?>
<div id="container">
<div id="container-edge"></div>
    <script>
      function openPopup() {
        window.open("http://www.mensa.no/olavtesten/fi/index_2.html",'hjemmetest','height=700,width=670,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no'); 
        return false;
      } 
    </script>
  <?php $content_style = 'page'; ?>
  <div><button class="nappi pikkumarginaalilla" onClick="openPopup();"> Aloita nettitesti! </button></div>
  <?php get_template_part( 'template-parts/default-content-area' ); ?>
</div> <!-- #container -->

<?php get_template_part( 'template-parts/sitemap-footer' ); ?>
<?php get_footer(); ?>
