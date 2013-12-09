<?php
 header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
 header('Expires: '. gmdate("D, d M Y H:i:s") , ' GMT');
 header("Cache-Control: no-cache, must-revalidate");
 header("Pragma: no-cache");

if(isset($_POST["sendmail"]) && isset($_POST["mailbody"])){
    if(strtolower($_POST["answer"])=="kahdeksan" || $_POST["answer"]=="kaheksan"){ //Uusi kohde
    
        //Debug:
        //ini_set('display_errors', 'On');

        //Alustetaan sivu:
        require 'dataaccess.php';
        $DA = new Data_Access;
        $DA->openDatabase();
            
        $sql="insert into ContactRequest(Request, Email) values ('".str_replace("'","''", $_POST["mailbody"])."','".str_replace("'","''", $_POST["mailfrom"])."')";
        $DA->insertRow($sql);

        if (isset($_POST["mailfrom"])) {
		    // Mail:
            $to = 'testivastaava@mensa.fi';
            $subject = 'Palaute testikalenterin weppilomakkeesta';
            $message = 'Uusi viesti! Kirjautumalla forumille voit katsoa kaikki annetut palautteet: http://www.mensa.fi/members/wwwmaintenance/maintenance.php';
            mail($to,$subject,$message);
        }        
        echo "ok";
    } else {
        echo "safty-fail";
    }
} else { 
        echo "no-data";
}
?>