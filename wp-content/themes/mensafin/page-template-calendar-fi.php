<?php
/*
Template Name: Testikalenteri (suomenkielinen)
*/
get_template_part('calendar-header');
?>

<div id="container">
<div id="container-edge"></div>

<?php
/**
 * The template for displaying test calendar page.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package mensaFin
 */
 
//Debug:
//ini_set('display_errors', 'On');
 
//Alustetaan sivu:
require 'dataaccess.php';
$DA = new Data_Access;
$DA->openDatabase();

$hideGone = "and (ISNULL(CONCAT(DateYear, '-', DateMonth, '-', DateDay)) or DateYear=0 or STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') >= CURDATE() ) ";
$sql="select Id, Title, Visible, EventType, DateYear, DateMonth, DateDay, DateHour, DateMinute, City, StreetAddress, LocationDetails, EventDetails, Latitude, Longitude from EventCalendar where Visible=0 " . $hideGone . "order by STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') ASC, City ASC, Id DESC";
$eventdata=$DA->getValues($sql);

?>
	<div id="primary" class="content-area" style="width:425px; float: left; background-color:transparent;">
		<div id="content" class="site-content" role="main">

			<?php the_post(); //while ( have_posts() ) : the_post(); ?>

				<?php //get_template_part( 'content', 'page' ); ?>
				<?php get_template_part( 'template-parts/content-page' ); ?>

			<?php //endwhile; // end of the loop. ?>

                <div class="pistelinja"></div><!-- end pistelinja -->
                <div class="juttu">
				<div><form id="wish" name="wish">
                  
					<p class="lomakeOtsikko">Toivo uutta testiä</p>
					<p class="textWish">Voit toivoa uutta testiä. Ilmoita toiveessasi paikkakunta ja muut toiveet. </p>
					<p class="textWish">Emme lähetä automaattista postia, vaan käsittelemme toiveet ja palaamme asiaan, jos se on aiheellista.</p>
					<br/>
            <div><p class="textWish"><label for="mailbody"><span class="lomakeLaatikko">Toive</span> (255 merkkiä)</label></p><textarea name="mailbody" id="mailbody" maxlength="255"></textarea></div>
                        
					<div><p class="textWish"><label for="mailfrom"><span class="lomakeLaatikko">Sähköposti</span> </label></p><br/><br/>
                    <input type="email" name="mailfrom" id="mailfrom" title="Palaamme asiaan" maxlength="255" /></div>
                        
					<div><p class="textWish"><label for="answer"><span class="lomakeLaatikko">Turvakysymys</span><br/>Paljonko on viisi ynnä kolme (kirjaimin)?  </label></p><br/><br/>
                    <input name="answer" type="text" id="answer" maxlength="255" /></div>
					<div><input type="hidden" name="sendmail" id="sendmail" value="1" /><button id="sendbtn" class="nappi marginaalilla" type="submit"><span class="textWish">Lähetä</span></button></div>
					</form>
                </div>
                </div><!-- end juttu -->
                <div class="pistelinja"></div><!-- end pistelinja -->
            
            
		</div><!-- #content -->
	</div><!-- #primary -->
	<div id="calendarBG" style="float: left;">
	<div id="calendar" style="">
        <?php get_template_part('template-parts/narrow-test-calendar-full'); ?>
	</div> <!-- #calendar -->
	</div> <!-- #calendarBG -->
	<div id="sidebar">
		<div class="kalenteritaus" >
			<img src="<?php bloginfo('template_directory'); ?>/images/KalenteriPalkki.jpg" alt="Testikalenteri" /> 
			<div class="datepicker" id="datepicker"></div>
		</div>
		<img src="<?php bloginfo('template_directory'); ?>/images/KarttaPalkki.jpg" alt="Testipaikkakunnat" /> 
		<div id="mapContainer" class="karttataus"></div><!-- end mapContainer -->
	</div><!-- #sidebar (secondary) -->
</div> <!-- #container -->

<?php get_template_part( 'template-parts/sitemap-footer' ); ?>

        <div id="dialog" title="QR-Code">
            <p>Valokuvaa QR-koodi asianmukaisella ohjelmalla kännykälläsi, niin voit asettaa muistutuksen tapahtumasta.</p>
            <img id="iQRCode" alt="QR-code" src="<?php bloginfo('template_directory') ?>/images/qr-empty.png"/>
        </div>
        <div id="IcalPath" style="visibility: hidden"><?php bloginfo('template_directory') ?>/ical.php</div>
        <div id="LocalizationInfoUrl" style="visibility: hidden"><?php bloginfo('template_directory') ?>/images/KALinfo1.png</div>
        <div id="LocalizationQrcodeUrl" style="visibility: hidden"><?php bloginfo('template_directory') ?>/images/KALqr1.png</div>
        <div id="LocalizationIcalUrl" style="visibility: hidden"><?php bloginfo('template_directory') ?>/images/KALical1.png</div>
        <div id="LocalizationInfoHoverUrl" style="visibility: hidden"><?php bloginfo('template_directory') ?>/images/KALinfo2.png</div>
        <div id="LocalizationQrcodeHoverUrl" style="visibility: hidden"><?php bloginfo('template_directory') ?>/images/KALqr2.png</div>
        <div id="LocalizationIcalHoverUrl" style="visibility: hidden"><?php bloginfo('template_directory') ?>/images/KALical2.png</div>
        <div id="CalInfoDetails" style="visibility: hidden">Maksa paikan p&auml;&auml;ll&auml; tai ennakkomaksuna tilille FI30 8000 1002 1175 06</div>

		<table class="datacontainer">
			<thead><tr class="dsHead"><th>Id</th>               <th>Event title</th>              <th>Year</th>               <th>Month</th>             <th>Day</th>             <th>Hour</th>             <th>Minute</th>             <th>City</th>                   <th>Street Address</th>                         <th>Location details</th>                                                  <th>Event details</th>                              <th>Latitude</th>                     <th>Longitude</th></tr></thead>
			<tbody id="#datasource" class="datacontainer">
				<!--
					This structure comes from the data source. (Write with ASP, PHP or what ever...)
					Modify the data values and linecount, but please use format provided here.
					There are two types of items, events (13 columns) and infos (3 columns).
					Id-field is what ever url-encoded string or number.
					Please be brief for all fields: QR-codes have SMS-style character limitations.
				-->
<?php
if(isset($eventdata)){
    while($row=mysqli_fetch_array($eventdata, MYSQL_ASSOC)){
        if($row["EventType"]=="0" || $row["EventType"]==0){
            print "<tr class='dsEvent'><td class='dsId'>".htmlspecialchars($row["Id"]);
            print "</td>\r\n<td class='dsTitle'>".htmlspecialchars($row["Title"]);
            print "</td>\r\n<td class='dsYear'>".htmlspecialchars($row["DateYear"]);
            print "</td>\r\n<td class='dsMonth'>".htmlspecialchars($row["DateMonth"]);
            print "</td>\r\n<td class='dsDay'>".htmlspecialchars($row["DateDay"]);
            print "</td>\r\n<td class='dsHour'>".htmlspecialchars($row["DateHour"]);
            print "</td>\r\n<td class='dsMinute'>".htmlspecialchars($row["DateMinute"]);
            print "</td>\r\n<td class='dsCity'>".htmlspecialchars($row["City"]);
            print "</td>\r\n<td class='dsStreetAddress'>".htmlspecialchars($row["StreetAddress"]);
            print "</td>\r\n<td class='dsLocationDetails'>".htmlspecialchars($row["LocationDetails"]);
            print "</td>\r\n<td class='dsEventDetails'>".htmlspecialchars($row["EventDetails"]);
            print "</td>\r\n<td class='dsLatitude'>".htmlspecialchars($row["Latitude"]);
            print "</td>\r\n<td class='dsLongitude'>".htmlspecialchars($row["Longitude"])."</td></tr>";
        } else {
            print "<tr class='dsInfo'><td class='dsId'>".htmlspecialchars($row["Id"])."</td>\r\n<td colspan='9' class='dsTitle'>".htmlspecialchars($row["Title"])."</td>\r\n<td colspan='3' class='dsDetails'>".htmlspecialchars($row["EventDetails"])."</td></tr>";
        }
    }
}                    
?>
				<!-- End of events. -->
			</tbody>
		</table>



<?php get_footer(); ?>
