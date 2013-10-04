<?php 
////Alustetaan sivu:
require 'dataaccess.php';
$DA = new Data_Access;
$DA->openDatabase();

$hideGone = "and (ISNULL(CONCAT(DateYear, '-', DateMonth, '-', DateDay)) or DateYear=0 or STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') >= STR_TO_DATE(CONCAT(2013, '-', 10, '-', 01),'%Y-%m-%d') ) ";
$sql="select Id, Title, Visible, EventType, DateYear, DateMonth, DateDay, DateHour, DateMinute, City, StreetAddress, LocationDetails, EventDetails, Latitude, Longitude from EventCalendar where Visible=0 " . $hideGone . "order by STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') ASC, City ASC, Id DESC";
$eventdata=$DA->getValues($sql);

   
?>
<html><head>
Suomen Mensa ry:n älykkyystestit, alkaen 1.10.2013
</head><body>
<h3>Suomen Mensa ry:n älykkyystestit, alkaen 1.10.2013</h3>
<br/>
          <div class="testit" id="maineventlist">
          <?php
            if(isset($eventdata)){
                while($row=mysqli_fetch_array($eventdata, MYSQL_ASSOC)){
                    print "<table class='event'>";
                    if($row["EventType"]=="0" || $row["EventType"]==0){
                        print "\r\n<div id='testInfo".htmlspecialchars($row["Id"])."' title='&Auml;lykkyystesti' class='event testipopup'>";
                        print "<tr><td><span class='aika'>".htmlspecialchars($row["City"]);
                        print " ".htmlspecialchars($row["DateDay"]).".".htmlspecialchars($row["DateMonth"]).".".htmlspecialchars($row["DateYear"]);
						$parseMin = htmlspecialchars($row["DateMinute"]);
                        print "</span></td><td>klo ".htmlspecialchars($row["DateHour"]).".".(intval($parseMin)<10?"0".$parseMin:$parseMin);
                        print "</td><td>".htmlspecialchars($row["LocationDetails"]);
                        print "</td><td><a href=\"http://maps.google.com/maps?q=".htmlspecialchars($row["Latitude"]).",".htmlspecialchars($row["Longitude"])."\" target=\"_blank\">".htmlspecialchars($row["StreetAddress"])."</a>";
                        print "</td><td>".htmlspecialchars($row["EventDetails"]);
                        print "</td><td>&nbsp;";
                        print "</td><td>Maksa paikan p&auml;&auml;ll&auml; tai ennakkomaksuna tilille FI30 8000 1002 1175 06";
                        print "</td><td>".htmlspecialchars($row["Title"]);
                        print "</td><td>&nbsp;";
                        print "</td><td><a href=\"?page_id=11\">Tarkemmat tiedot testikalenterista</a>";						
                        print "</td></tr></div>";
                        print "\r\n<tr><td><a id=\"testopener".htmlspecialchars($row["Id"])."\" href=\"#\"><span class='aika'>".htmlspecialchars($row["City"]);
                        print " ".htmlspecialchars($row["DateDay"]).".".htmlspecialchars($row["DateMonth"]).".".htmlspecialchars($row["DateYear"])."</span></a>";
						print "<script>\r\n";
                        print "\$(function() { \$(\"#testInfo".htmlspecialchars($row["Id"])."\").dialog({ autoOpen: false });";
                        print "\$(\"#testopener".htmlspecialchars($row["Id"])."\").click(function(){\$(\"#testInfo".htmlspecialchars($row["Id"])."\").dialog(\"open\");return false;});";
                        print "});</script>";
                    } else {
                        print "<tr><td>".htmlspecialchars($row["Title"]);
                        print "</td><td>".htmlspecialchars($row["EventDetails"]);
                    }
                    print "</td></tr></table><!-- end event -->";
                    print "<p class='testitPistelinja'></p>";
                }
            }			
            ?>
                 </div><!-- end testit -->

</body>
</html>
