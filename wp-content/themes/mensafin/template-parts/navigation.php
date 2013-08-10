<?php
  /*
   * Finnish navigation menu.
   *
   * Toggling major menu items is defined in skripteja.js.
   *
   * @package mensafin
   */
?>

<?php $miinus = get_bloginfo('template_directory') . '/images/miinus.png'; ?>
        <nav id="site-navigation" class="navigation-main" role="navigation">
            <ul>
                <li class="link linkHeader"><img id="togglemenu1" src="<?php echo $miinus ?>" alt="-" class="miinus" />SUOMEN MENSA</li>
                <li class="link menu1"><a href="?page_id=8">Mikä on Mensa?</a></li>
                <li class="link menu1" style="padding-bottom:5px;"><a href="?page_id=10">Liity jäseneksi</a></li>

                <li class="link linkHeader"><img id="togglemenu2" src="<?php echo $miinus ?>" class="miinus" alt="-" />ÄLYKKYYS</li>  
                <li class="link menu2"><a href="?page_id=11">Testikalenteri</a></li>
                <li class="link menu2"><a href="?page_id=27">Tee nettitesti</a></li>
                <li class="link menu2"><a href="?page_id=12">Mitä on älykkyys?</a></li>
                <li class="link menu2" style="padding-bottom:5px;"><a href="?page_id=13">Älykkyystestaus</a></li>

                <li class="link linkHeader"><img id="togglemenu3" src="<?php echo $miinus ?>" alt="-" class="miinus" />TOIMINTA</li>  
                <li class="link menu3"><a href="?page_id=14">Suomessa</a></li>
                <li class="link menu3"><a href="?page_id=15">Kansainvälisesti</a></li>
                <li class="link menu3"><a href="?page_id=16">Paikallisosastot</a></li>
                <li class="link menu3"><a href="?page_id=17">Mensan jäseniä</a></li>
                <li class="link menu3"><a href="?page_id=18">Mensapalkinto</a></li>
                <li class="link menu3" style="padding-bottom:5px;"><a href="?page_id=19">Lahjakkaat lapset</a></li>

                <li class="link linkHeader"><img id="togglemenu4" src="<?php echo $miinus ?>" alt="-" class="miinus" />YHTEYSTIEDOT</li>  
                <li class="link menu4" style="padding-bottom:5px;"><a href="?page_id=20">Toimihenkilöt</a></li>

                <li class="link" style="padding-top: 20px;">
                <a href="?page_id=21">
                PÅ SVENSKA</a></li>
                <li class="link"><a href="?page_id=23">
                IN ENGLISH</a></li>
            </ul>
        </nav><!-- end nav -->
