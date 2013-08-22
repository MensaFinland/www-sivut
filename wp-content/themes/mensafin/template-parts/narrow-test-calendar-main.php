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
$sql="select Id, Title, Visible, EventType, DateYear, DateMonth, DateDay, DateHour, DateMinute, City, StreetAddress, LocationDetails, EventDetails, Latitude, Longitude from EventCalendar where Visible=0 " . $hideGone . "order by STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') ASC, Id DESC";
$eventdata=$DA->getValues($sql);

   
?>
      <p class="palsta">Testikalenteri 2013</p>
          <div class="testit" id="maineventlist">
          <?php
            if(isset($eventdata)){
                while($row=mysqli_fetch_array($eventdata, MYSQL_ASSOC)){
                    print "<div class='event'><ul><li>";
                    if($row["EventType"]=="0" || $row["EventType"]==0){
                        print "<span class='aika'>".htmlspecialchars($row["City"]);
                        print " ".htmlspecialchars($row["DateDay"]).".".htmlspecialchars($row["DateMonth"]).".".htmlspecialchars($row["DateYear"]);
                        print "</span></li><li>klo ".htmlspecialchars($row["DateHour"]).".".htmlspecialchars($row["DateMinute"])." ".htmlspecialchars($row["Title"]);
                        print "</li><li>".htmlspecialchars($row["LocationDetails"]);
                        print "</li><li>".htmlspecialchars($row["StreetAddress"]);
                        print "</li><li>".htmlspecialchars($row["EventDetails"]);
                    } else {
                        print "".htmlspecialchars($row["Title"]);
                        print "</li><li>".htmlspecialchars($row["EventDetails"]);
                    }
                    print "</li></ul></div><!-- end event -->";
                    print "<p class='testitPistelinja'></p>";
                }
            }
            ?>
                 </div><!-- end testit -->
