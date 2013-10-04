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
Suomen Mensa ry:n &auml;lykkyystestit, alkaen 1.10.2013
</head><body>
<h3><a href="http://www.mensa.fi">Suomen Mensa ry</a>:n &auml;lykkyystestit, alkaen 1.10.2013</h3>
<br/>
		  <table style="padding: 3px; border-style: inset dotted inset dotted; border-width: thin; border-color: #000000; font-family: Consolas">
          <?php
            if(isset($eventdata)){
                while($row=mysqli_fetch_array($eventdata, MYSQL_ASSOC)){
                    if($row["EventType"]=="0" || $row["EventType"]==0){
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
                        print "</td>";
                    } else {
                        print "<tr><td>".htmlspecialchars($row["Title"]);
                        print "</td><td>".htmlspecialchars($row["EventDetails"]);
                    }
                    print "</tr>";
                }
            }			
            ?>
                 </table>

</body>
</html>
