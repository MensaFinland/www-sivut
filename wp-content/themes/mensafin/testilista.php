<?php 
////Alustetaan sivu:
require 'dataaccess.php';
$DA = new Data_Access;
$DA->openDatabase();

$hideGone = "and (ISNULL(CONCAT(DateYear, '-', DateMonth, '-', DateDay)) or DateYear=0 or STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') >= STR_TO_DATE(CONCAT(2013, '-', 10, '-', 01),'%Y-%m-%d') ) ";
$sql="select Id, Title, Visible, EventType, DateYear, DateMonth, DateDay, DateHour, DateMinute, City, StreetAddress, LocationDetails, EventDetails, Latitude, Longitude from EventCalendar where Visible=0 " . $hideGone . "order by STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') DESC, City ASC, Id DESC";
$eventdata=$DA->getValues($sql);

   
?>
<html><head>
Suomen Mensa ry:n &auml;lykkyystestit, alkaen 1.10.2013, uusin ensin
</head><body>
<h3><a href="http://www.mensa.fi">Suomen Mensa ry</a>:n &auml;lykkyystestit, alkaen 1.10.2013, uusin ensin</h3>
<br/>
		  <table style="padding: 3px; border-style: inset; border-width: thin; border-color: #000000; font-family: Consolas">
          <?php
            if(isset($eventdata)){
                while($row=mysqli_fetch_array($eventdata, MYSQL_ASSOC)){
                    if($row["EventType"]=="0" || $row["EventType"]==0){
                        print "<tr style=\"padding: 3px; border-style: inset; border-width: thin; border-color: #000000;\"><td><span class='aika'>".htmlspecialchars($row["City"]);
                        print " ".htmlspecialchars($row["DateDay"]).".".htmlspecialchars($row["DateMonth"]).".".htmlspecialchars($row["DateYear"]);
						$parseMin = htmlspecialchars($row["DateMinute"]);
                        print "</span></td><td>klo ".htmlspecialchars($row["DateHour"]).".".(intval($parseMin)<10?"0".$parseMin:$parseMin);
                        print "</td><td>".htmlspecialchars($row["LocationDetails"]);
                        print "</td><td><a href=\"http://maps.google.com/maps?q=".htmlspecialchars($row["Latitude"]).",".htmlspecialchars($row["Longitude"])."\" target=\"_blank\">".htmlspecialchars($row["StreetAddress"])."</a>";
                        print "</td><td>".htmlspecialchars($row["EventDetails"]);
                        print "</td><td>".htmlspecialchars($row["Title"]);
                        print "</td>";
                    } else {
                        print "<tr style=\"padding: 3px; border-style: inset; border-width: thin; border-color: #000000;\"><td>".htmlspecialchars($row["Title"]);
                        print "</td><td>".htmlspecialchars($row["EventDetails"]);
                    }
                    print "</tr>";
                }
            }			
            ?>
                 </table>

</body>
</html>
