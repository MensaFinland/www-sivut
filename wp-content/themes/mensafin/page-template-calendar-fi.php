<?php
/*
Template Name: Testikalenteri (suomenkielinen)
*/

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
ini_set('display_errors', 'On');
 
//Alustetaan sivu:
require 'dataaccess.php';
$DA = new Data_Access;
$DA->openDatabase();

$hideGone = "and (ISNULL(CONCAT(DateYear, '-', DateMonth, '-', DateDay)) or DateYear=0 or STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') >= NOW() ) ";
$sql="select Id, Title, Visible, EventType, DateYear, DateMonth, DateDay, DateHour, DateMinute, City, StreetAddress, LocationDetails, EventDetails, Latitude, Longitude from EventCalendar where Visible=0 " . $hideGone . "order by STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') ASC, Id DESC";
$eventdata=$DA->getValues($sql);

 
  // wp_enqueue_script is the preferred way to include Javascript and CSS.
  //  - Scripts are included only once.
  //  - Dependencies are included in correct order.
  // wp_head() call in header.php prints the actual include lines.
  //
  //                 A NAME WE CHOOSE   ADDRESS OF SCRIPT/CSS                                  DEPENDENCY SCRIPTS
  wp_enqueue_script('jquery-bundle'   , 'http://code.jquery.com/jquery-1.9.1.js'                                       );
  wp_enqueue_script('html5shiv'       , 'http://html5shiv.googlecode.com/svn/trunk/html5.js'                           );
  wp_enqueue_script('jquery-ui-bundle', 'http://code.jquery.com/ui/1.10.3/jquery-ui.js'      , array('jquery-bundle')   );
  wp_enqueue_style( 'jquery-ui-bundle', 'http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css');

  wp_enqueue_script('goggle-maps-api' , 'http://maps.google.com/maps/api/js?sensor=false'    , array('jquery-ui-bundle'));
  wp_enqueue_script('local-skripteja' , get_bloginfo('template_directory') . '/skripteja.js' , array('jquery-bundle')   );
  wp_enqueue_script('local-skripteja2', get_bloginfo('template_directory') . '/skripteja2.js', array('jquery-ui-bundle')   );
  wp_enqueue_script('local-evtcal'    , get_bloginfo('template_directory') . '/eventcalendar.js', array('jquery-ui-bundle')   );
  wp_enqueue_style( 'local-evtcal'    , get_bloginfo('template_directory') . '/evtcal.css' );

  wp_enqueue_script('local-evtcal2'   , get_bloginfo('template_directory') . '/evtcal2.js', array('jquery-ui-bundle')   );

  wp_enqueue_style('font-montserrat', 'http://fonts.googleapis.com/css?family=Montserrat');
  get_template_part('header');
?>

<div id="container">
<div id="container-edge"></div>

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
          <?php get_template_part( 'template-parts/test-map' ) ?>
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
