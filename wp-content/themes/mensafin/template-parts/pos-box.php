<?php
 /**
  * Contact information for local chapters in each province.
  *
  * @package mensafin
  */
?>
<div class="posLista">
<img id="posOtsake" alt="Paikallisosastot" src="<?php bloginfo('template_directory'); ?>/images/poskartta/POSheadline.jpg" style="border:thin black none"/>
<?php
  $poses = $GLOBALS['paikallisosastot'];

  foreach($poses as $pos) {

    /* When POS map is clicked, this is the link we scroll to. Example: <a id="pos14box"></a> */
    print('<div class="posOsasto">');
    if ($pos['map_id']) { print('<a id="' . $pos["map_id"] . '"></a>'); }

    print('<h3 class="pos">' . $pos["name"] . '</h3>');
    print('<h4>Toimialue:</h4><p>' . $pos["province"] . '</p>');
    foreach($pos["people"] as $person) {
      print('<h4>' . $person['title'] . ':</h4>');
      print('<p>' . $person['name'] . '<br/>' . $person['email'] . '<br/>' . $person['tel'] . '</p>');
    }
    print('</div>'); /* div.poschapter */
  }

?>
</div> <!-- div.posLista -->
