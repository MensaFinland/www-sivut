<?php
  /**
   * Front page: Narrow test calendar strip.
   *
   * @package mensafin
   */
   
   
   
//Haetaan tietokannasta testitapahtumat...toistaiseksi kommenteissa.
   
////Debug:
ini_set('display_errors', 'On');
 
////Alustetaan sivu:
require 'dataaccess.php';
$DA = new Data_Access;
$DA->openDatabase();

$hideGone = "and (ISNULL(CONCAT(DateYear, '-', DateMonth, '-', DateDay)) or DateYear=0 or STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') >= NOW() ) ";
$sql="select Id, Title, Visible, EventType, DateYear, DateMonth, DateDay, DateHour, DateMinute, City, StreetAddress, LocationDetails, EventDetails, Latitude, Longitude from EventCalendar where Visible=0 " . $hideGone . "order by STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') ASC, City ASC, Id DESC";
$eventdata=$DA->getValues($sql);

   
?><p class="palsta">Testikalenteri 2013</p>
          <div class="testit" id="maineventlist">
          <?php
            if(isset($eventdata)){
                while($row=mysqli_fetch_array($eventdata, MYSQL_ASSOC)){
                    print "<div class='event'>";
                    if($row["EventType"]=="0" || $row["EventType"]==0){
                        print "\r\n<div id='testInfo".htmlspecialchars($row["Id"])."' title='&Auml;lykkyystesti' class='event testipopup'>";
                        print "<ul><li><span class='aika'>".htmlspecialchars($row["City"]);
                        print " ".htmlspecialchars($row["DateDay"]).".".htmlspecialchars($row["DateMonth"]).".".htmlspecialchars($row["DateYear"]);
						$parseMin = htmlspecialchars($row["DateMinute"]);
                        print "</span></li><li>klo ".htmlspecialchars($row["DateHour"]).".".(intval($parseMin)<10?"0".$parseMin:$parseMin)." ".htmlspecialchars($row["Title"]);
                        print "</li><li>".htmlspecialchars($row["LocationDetails"]);
                        print "</li><li>".htmlspecialchars($row["StreetAddress"]);
                        print "</li><li>".htmlspecialchars($row["EventDetails"]);
                        print "</li><li><a href=\"http://www.mensa.fi/testikalenteri\">Lis&auml;tiedot testikalenterista</a>";						
                        print "</li></ul></div>";
                        print "\r\n<ul><li><a id=\"testopener".htmlspecialchars($row["Id"])."\" href=\"#\"><span class='aika'>".htmlspecialchars($row["City"]);
                        print " ".htmlspecialchars($row["DateDay"]).".".htmlspecialchars($row["DateMonth"]).".".htmlspecialchars($row["DateYear"])."</span></a>";
						print "<script>\r\n";
                        print "\$(function() { \$(\"#testInfo".htmlspecialchars($row["Id"])."\").dialog({ autoOpen: false });";
                        print "\$(\"#testopener".htmlspecialchars($row["Id"])."\").click(function(){\$(\"#testInfo".htmlspecialchars($row["Id"])."\").dialog(\"open\");return false;});";
                        print "});</script>";
                    } else {
                        print "<ul><li>".htmlspecialchars($row["Title"]);
                        print "</li><li>".htmlspecialchars($row["EventDetails"]);
                    }
                    print "</li></ul></div><!-- end event -->";
                    print "<p class='testitPistelinja'></p>";
                }
            }			
            ?>
                 </div><!-- end testit -->

