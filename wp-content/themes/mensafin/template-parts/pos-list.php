<?php
 /**
  * Contact information for local chapters in each province.
  *
  * @package mensafin
  */
?>
<?php
  $poses = $GLOBALS['paikallisosastot'];

  foreach($poses as $pos) {

    /* When POS map is clicked, this is the link we scroll to. Example: <a name="pos14"></a> */
    if ($pos['map_id']) { print('<a id="' . $pos["map_id"] . '"></a>'); }

    print('<h3 class="pos">' . $pos["name"] . '</h3>');
    print('<table class="pos">');
    print('<tr><td class="col1">Toimialue</td><td>' . $pos["province"] . '</td></tr>');
    foreach($pos["people"] as $person) {
      print('<tr>');
      print('<td class="col1">' . $person['title'] . '</td>');
      print('<td class="col2">' . $person['name'] . '<br/>' . $person['email'] . '<br/>' . $person['tel'] . '</td>');
      print('</tr>');
    }
    print('</table>');
  } 

?>

