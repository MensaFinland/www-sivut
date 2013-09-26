<?php
//Debug:
ini_set('display_errors', 'On');
 
//Alustetaan sivu:
require 'dataaccess.php';
$DA = new Data_Access;
$DA->openDatabase();

$hideGone = "and (ISNULL(CONCAT(DateYear, '-', DateMonth, '-', DateDay)) or DateYear=0 or STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') >= NOW() ) ";
$sql="select Id, Title, Visible, EventType, DateYear, DateMonth, DateDay, DateHour, DateMinute, City, StreetAddress, LocationDetails, EventDetails, Latitude, Longitude from EventCalendar where Visible=0 " . $hideGone . "order by STR_TO_DATE(CONCAT(DateYear, '-', DateMonth, '-', DateDay),'%Y-%m-%d') DESC, Id DESC";
$eventdata=$DA->getValues($sql);

?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Mensa WP</title>

<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src="http://code.jquery.com/jquery-1.9.1.js" type="text/javascript"></script>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<script src="skripteja.js" type="text/javascript"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js" type="text/javascript"></script>
<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>

<link rel="icon" type="image/gif" href="http://www...">

<link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<link href="evtcal.css" rel="stylesheet" type="text/css" />
<script src="eventcalendar.js" type="text/javascript"></script>
<script src="evtcal2.js" type="text/javascript"></script>
<script src="skripteja2.js" type="text/javascript"></script>

<meta name="robots" content="index,follow" /> 
<meta name="rating" content="general" />
<meta charset="utf-8" />
<meta http-equiv="Page-Enter" content="blendTrans(Duration=0.19)" />
<meta name="description" content="Mensa on kansainvälinen järjestö, jonka toiminnan tarkoituksena on älykkyyden tunnistaminen ja kehittäminen ihmisyyden hyväksi, älykkyystutkimuksen tukeminen sekä älyllisen ja sosiaalisen ympäristön tarjoaminen jäsenilleen. Mensan jäseneksi voi liittyä jokainen, joka saavuttaa älykkyystestissä paremman tuloksen kuin 98% väestöstä." />
<meta name="keywords" content="mensa, älykkyystesti, mensan testi, älykkyys, äo, iq, äo testi, iq testi, testi, test, älykkyysosamäärä, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, älykkyystestit, pulmapeli, pulmapelit, sosiaalinen älykkyys, älypeli, älypää, psykologinen, logiikka, looginen, loogiset, päättely, kyky, tehtäviä, tunneäly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, järjestö, yhdistys" />
<meta name="Author" content="Suomen Mensa ry, Sivut suunnitteli Tuomas Hietanen, Ulla Sainio 2013" />

<link href="style1000.css" rel="stylesheet" type="text/css">

</head>
<body>


<div id="background">
<div id="wrapper">
    
    <header>
        <div id="MensaLogo"><a href="index.php"><img src="images/MensaLogo.png" alt="Mensa Logo" /></a></div><!-- end MensaLogo -->
        <div id="MensaText"><a href="index.php"><img src="images/MensaText.png" alt="leiska" /></a></div><!-- end MensaText -->
        <div id="network">
			<div id="some"><img src="images/some.png" width="190" height="64" alt="social media" />
			</div><!-- end facebook -->
	  	  <div id="members">
          
          
          <!-- hakuautomaatteja varten? t.ulla -->
          <h1>Mensa on kansainvälinen järjestö, jonka toiminnan tarkoituksena on älykkyyden tunnistaminen ja kehittäminen ihmisyyden hyväksi, älykkyystutkimuksen tukeminen sekä älyllisen ja sosiaalisen ympäristön tarjoaminen jäsenilleen. Mensan jäseneksi voi liittyä jokainen, joka saavuttaa älykkyystestissä paremman tuloksen kuin 98% väestöstä. mensa, älykkyystesti, mensan testi, älykkyys, äo, iq, äo testi, iq testi, testi, test, älykkyysosamäärä, aivokapasiteetti, nettitesti, kotitesti, soveltuvuustesti, suomen mensa, suomi, finland, älykkyystestit, pulmapeli, pulmapelit, sosiaalinen älykkyys, älypeli, älypää, psykologinen, logiikka, looginen, loogiset, päättely, kyky, tehtäviä, tunneäly, ilmainen nettitesti, numeerinen, numeeriset, raja, jakauma, online, järjestö, yhdistys</h1>
          
          
          <img id="forumLink" src="images/jasen.png" width="180" height="64" alt="members area" style="cursor:pointer;" />
		  	</div><!-- end members -->
   	  </div>
      <!-- end network --> 
        
    	</header><!-- end header -->
  
        <nav>
            <ul>
                <li class="link linkHeader"><img id="togglemenu1" src="images/miinus.png" alt="-" class="miinus" />SUOMEN MENSA</li>
                <li class="link menu1"><a href="perussivu.html?mensa"><img alt="" src="images/transparent.png" />Mikä on Mensa?</a></li>
                <li class="link menu1" style="padding-bottom:5px;"><a href="perussivu.html?liity"><img alt="" src="images/transparent.png" />Liity jäseneksi</a></li>
                
                <li class="link linkHeader"><img id="togglemenu2" src="images/miinus.png" class="miinus" alt="-" /><a href="perussivu.html?alykkyys">ÄLYKKYYS</a></li>  
                <li class="link menu2"><a href="testikalenteri.html"><img alt="" src="images/transparent.png" />Testikalenteri</a></li>
                <li class="link menu2"><a href="perussivu.html?nettitesti"><img alt="" src="images/transparent.png" />Tee nettitesti</a></li>
                <li class="link menu2"><a href="perussivu.html?alykkyys"><img alt="" src="images/transparent.png" />Mitä on älykkyys?</a></li>
                <li class="link menu2" style="padding-bottom:5px;"><a href="perussivu.html?testaus"><img alt="" src="images/transparent.png" />Älykkyystestaus</a></li>
                
                <li class="link linkHeader"><img id="togglemenu3" src="images/miinus.png" alt="-" class="miinus" /><a href="perussivu.html?toiminta">TOIMINTA</a></li>  
                <li class="link menu3"><a href="perussivu.html?suomessa"><img alt="" src="images/transparent.png" />Suomessa</a></li>
                <li class="link menu3"><a href="perussivu.html?kansainvalinen"><img alt="" src="images/transparent.png" />Kansainvälisesti</a></li>
                <li class="link menu3"><a href="perussivu.html?pos"><img alt="" src="images/transparent.png" />Paikallisosastot</a></li>
                <li class="link menu3"><a href="perussivu.html?jasenia"><img alt="" src="images/transparent.png" />Mensan jäseniä</a></li>
                <li class="link menu3"><a href="perussivu.html?mensapalkinto"><img alt="" src="images/transparent.png" />Mensapalkinto</a></li>
                <li class="link menu3" style="padding-bottom:5px;"><a href="http://www.lahjakkaatlapset.fi/" target="_blank"><img alt="" src="images/transparent.png" />Lahjakkaat lapset</a></li>
             
                <li class="link linkHeader"><img id="togglemenu4" src="images/miinus.png" alt="-" class="miinus" /><a href="perussivu.html?yhteystiedot">YHTEYSTIEDOT</a></li>  
                <li class="link menu4" style="padding-bottom:5px;"><a href="perussivu.html?toimihenkilot"><img alt="" src="images/transparent.png">Toimihenkilöt</a></li>
                
                <li class="link" style="padding-top: 20px;">
                <a href="perussivu.html?svenska">
                PÅ SVENSKA</a></li>
                <li class="link"><a href="perussivu.html?english">
                IN ENGLISH</a></li>
            </ul>
        </nav><!-- end nav -->
        
<div id="container">
        
 	<div id="edge">
 	</div><!-- end edge --> 
        
	<div id="main">
          <div id="content">
				<div id="mainContent">
              		<div id="mainArticle" class="mainArticle mainArticleFullHeight">
                  <div class="juttu">
							<h2>Testikalenteri - tervetuloa testiin!</h2>

							<p class="text">Kun tulet Mensan testiin, otathan huomioon seuraavat käytännön asiat:</p>
							<br/>
							<ul class="text">
								<li>Testin hinta on 40 euroa (ennakkoon maksettuna 38 euroa*)</li> 
								<li>Testimaksun voi suorittaa etukäteen tilisiirtona tai testitilaisuuden alkaessa käteisenä, mieluiten tasarahalla</li> 
								<li>Testiin ei tarvitse ilmoittautua etukäteen</li> 
								<li>Testipaikalle on saavuttava ajoissa, koska testi alkaa täsmälleen ilmoitettuna aikana</li> 
								<li>Mukaan on otettava voimassaoleva henkilötodistus</li> 
								<li>Alaikäraja 16 vuotta</li> 
								<li>Testitilaisuus kestää kokonaisuudessaan noin tunnin</li> 
								<li>Testi on luonteeltaan kertatesti, mutta halutessasi voit osallistua testiin uudelleen yhden kerran - kaksi kertaa on on ehdoton maksimi</li> 
								<li>Testi on kuviopäättelytesti, jonka suorittamiseen riittää normaali näkö-, kuulo- ja kynänkäyttökyky</li> 
								<li>Ryhmätestit (työ-, harraste- tai kaveriporukka jne.) tilauksesta alennettuun hintaan 30/henk. tilaajan tiloissa. Minim. 4 osallistujaa.</li>
							</ul>
							<br/>
							<p class="text">
							*Testi on mahdollista maksaa myös ennakkoon suoraan Mensan tilille, jolloin hinta on 38 euroa. Maksuviite on testikalenterissa jokaisen testin kohdalta löytyvä viitenumero. Jotta ennakkomaksu hyväksyttäisiin, tulee testiin osallistujalla olla testissä mukanaan tulostettu kuitti maksusta jossa näkyy myös testin viitenumero. Ennakkomaksu on testikohtainen, joten vain oikealla viitenumerolla maksettu ennakkomaksu hyväksytään. Lisätietoja ja apua ongelmatilanteissa saat osoitteesta testivastaava(ät)mensa.fi
							<br/>Mensan tilinumero testien ennakkomaksua varten: FI30 8000 1002 1175 06</p>
							<br/>
							<p class="text">Tervetuloa Mensan testiin ja menestystä testissä!
							</p>												
                  </div><!-- end juttu -->
                  <div class="pistelinja"></div><!-- end pistelinja -->
                  <div class="juttu">
					<div><form id="wish" name="wish">
                  
						<p class="lomakeOtsikko">Toivo uutta testiä</p>
						<p class="textWish">VOIT toivoa uutta testiä. Ilmoita toiveessasi paikkaunta ja muut toiveet. </p>
						<p class="textWish">Emme lähetä automaattista postia, vaan käsittelemme toiveet ja palaamme asiaan, jos se on aiheellista.</p>
						<br/>
                <div><label for="mailbody"><p class="textWish"><span class="lomakeLaatikko">Toive</span> (255 merkkiä)</p> </label><textarea name="mailbody" id="mailbody" maxlength="255"></textarea></div>
                        
						<div><label for="mailfrom"><p class="textWish"><span class="lomakeLaatikko">Sähköposti</span> </p></label>
                        <input type="email" name="mailfrom" id="mailfrom" tooltip="Palaamme asiaan" maxlength="255" /></div>
                        
						<div><label for="answer"><p class="textWish"><span class="lomakeLaatikko">Turvakysymys</span><br/>Paljonko on viisi ynnä kolme (kirjaimin)?  </p></label>
                        <input name="answer" type="text" id="answer" maxlength="255" /></div>
						<div><input type="hidden" name="sendmail" id="sendmail" value="1" /><button id="sendbtn" type="submit"><p class="nappi pikkumarginaalilla">Lähetä</p></button></div>
						</form>
                    </div>
                  </div><!-- end juttu -->
                  <div class="pistelinja"></div><!-- end pistelinja -->
              </div><!-- end mainArticle -->
   	</div><!-- end content -->  

                        
	<div id="calendarBG">
	<div id="calendar">
     	<p class="palsta">Testikalenteri 2013</p>
          <div class="testit" id="maineventlist">
                	</div><!-- end testit -->
		</div><!-- end calendar -->
		</div><!-- end calendarBG -->
            
	</div><!-- end main -->  
            
	<div id="sidebar">
                <div class="datepicker" id="datepicker"></div>
				<div id="mapContainer"></div><!-- end mapContainer -->

 	</div><!-- end sidebar -->
            
		</div><!-- end container -->
        
        

	<div id="footerBG"> 
	<footer>
  <div id="footerInfoArea"> 

                <div class="footerInfo" style="width:170px;">
                    <ul>
                          <li class="footerText" style="padding-bottom:5px;">YHTEYSTIEDOT</li>
                          <li class="footerText">Suomen Mensa ry</li>
                          <li class="footerText">PL 792</li>
                          <li class="footerText" style="padding-bottom:5px;">00101 Helsinki FINLAND</li>
                          <li class="footerText">tel +358 50 525 2464</li>
                          <li class="footerText" style="padding-bottom:5px;">email toimisto[at]mensa.fi</li>
                          <li></li>
                          <li class="footerText" style="padding-top:10px;"><a href="http://www.kolumbus.fi/ulla.sainio/press.html">Medialle</a></li>
                          <li class="footerText"><a href="#">Aineistopankki</a></li>
                          <li class="footerText"><a href="http://www.gentil.fi/404.html">Arkisto</a></li>
                    </ul>
            	</div><!-- end footerInfo yhteystiedot -->
                <div class="footerInfo" style="width:195px;">
                    <ul>
                          <li class="footerText" style="padding-bottom:5px;"><a href="#">KIINNOSTAVIA LINKKEJA</a></li>
                          <li class="footerText"><a href="#">Kansainvalinen Mensa</a></li>
                          
                          <li class="footerText" style="padding-bottom:5px; padding-top:15px;"><a href="#">MENSAN KANSALLISET RYHMÄT</a></li>
                          <li class="footerText"><a href="#">Englannin Mensa</a></li>
                          <li class="footerText"><a href="#">Yhdysvaltojen Mensa</a></li>
                          <li class="footerText"><a href="#">Ruotsin Mensa</a></li>
                          <li class="footerText"><a href="#">Norjan Mensa</a></li>
                          <li class="footerText"><a href="#">Tanskan Mensa</a></li>
                          <li class="footerText"><a href="#">Saksan Mensa</a></li>
                    </ul>
                </div><!-- end footerInfo kiinnostavia linkkeja -->
            
                <div class="footerInfo" style="width:195px;">
                    <ul>
                        <li class="footerText" style="padding-bottom:5px;">ÄLYKKYYSLINKKEJÄ</li>
                        <li class="footerText"><a href="#">Uncommonly Difficult IQ Tests</a></li>
                        <li class="footerText"><a href="#">muita alykkyystesteja</a></li>
                        <li></li>
                        <li class="footerText">*Suomen Mensa ei vastaa naiden sivujen sisallosta</li>
                   </ul>
                </div><!-- end footerInfo  linkkeja alykkyystesteihin -->
        
                <div class="footerInfo">
                    <ul>
                        <li class="footerText">&copy; Mensa Finland 2013</li>
                        <li class="footerText" style="padding-bottom:5px;"> all rights reserved</li>
                      	<li></li>
                        <li class="footerText" style="padding-bottom:5px;"> last update 
                        <!-- #BeginDate format:Am1 -->July 1, 2013<!-- #EndDate -->    </li>
                        <li class="footerText" style="padding-top:80px;"><a href="http://www.gentil.fi">design gentil.fi</a></li>
                   </ul>
                </div><!-- end footerInfo  linkkeja alykkyystesteihin -->
			</div><!-- end footerInfoArea  -->
    </footer><!-- end footer -->
	</div><!-- end footerBG -->
    

</div><!-- end wrapper -->
</div><!-- end background -->

        <div id="dialog" title="QR-Code">
            <p>Valokuvaa QR-koodi asianmukaisella ohjelmalla kännykälläsi, niin voit asettaa muistutuksen tapahtumasta.</p>
            <img id="iQRCode" alt="QR-code" />
        </div>
        <div id="IcalPath" style="visibility: hidden">ical.php</div>
        <div id="LocalizationQrcode" style="visibility: hidden">QR</div>
        <div id="LocalizationIcal" style="visibility: hidden">iCal</div>
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

</body>
</html>

