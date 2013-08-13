<?php
  /*
   * Finnish navigation menu.
   *
   * Toggling major menu items is defined in skripteja.js.
   *
   * @package mensafin
   */
?>

<?php
 /* Display Wordpress menu named "MainMensaMenu (Admin UI -> Appearance -> Menus).
    Each link text is boxed into a div for easier CSS formatting. */
  wp_nav_menu(array('menu' => 'MainMensaMenu',
                    'before' => '<div class="navTextBox">',
                    'after' => '</div>',
                    'container' => 'nav'));
?>
