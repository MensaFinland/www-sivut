<?php
 /**
  * Contact information for local chapters in each province.
  *
  * @package mensafin
  */
?>
<?php

//Debug:
ini_set('display_errors', 'On');
 
//Alustetaan sivu:
require 'dataaccess.php';
$DA = new Data_Access;
$DA->openDatabase();

/*
CREATE TABLE Pos(
 Pos_Id INT NOT NULL AUTO_INCREMENT, 
 PosName VARCHAR(255) NOT NULL,
 Province VARCHAR(255) NOT NULL,
 Map_Id VARCHAR(5), 
 Order_Id INT NOT NULL,
 PRIMARY KEY ( Pos_Id ))
;

CREATE TABLE PosContact(
 People_Id INT NOT NULL AUTO_INCREMENT, 
 Pos_Id INT NOT NULL,
 Name VARCHAR(255) NOT NULL,
 Title VARCHAR(255) NOT NULL,
 Email VARCHAR(255) NOT NULL,
 Tel VARCHAR(255) NOT NULL,
 Order_Id INT NOT NULL, 
 Public INT NOT NULL,
 PRIMARY KEY (People_Id),
 FOREIGN KEY (Pos_Id) REFERENCES Pos(Pos_Id)
 )
;
-- Public: 0=no, 1=yes, 2=forum

INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Mensanuoret', 'Koko Suomi', NULL, 1);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Mensa Åland', 'Ahvenanmaa / Åland', 'pos17', 2);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('PäämajaMensa', 'Etelä-Savo', 'pos8', 3);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Helsingin Mensa', 'Pääkaupunkiseutu', 'pos12', 4);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Itä-Uusimaa', 'Itä-Uusimaa', 'pos11', 5);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Kanta-Häme (Hämensa)', 'Kanta-Häme', 'pos16', 6);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Keski-Suomi', 'Keski-Suomi', 'pos5', 7);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Kymenlaakso', 'Kymeenlaakso ja Etelä-Karjala', 'pos9', 8);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Lappi (Napapiirin Mensa - Mensa Arctic Circle)', 'Lappi', 'pos2', 9);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Oulu', 'Pohjois-Pohjanmaa, Kainuu', 'pos3', 10);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Pirkanmaa (Mansen Mensa)', 'Pirkanmaa', 'pos13', 11);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Pohjois-Karjala', 'Pohjois-Karjala', 'pos7', 12);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Pohjois-Savo', 'Pohjois-Savo', 'pos6', 13);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Päijät-Häme (Demensa)', 'Päijät-Häme', 'pos10', 14);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Satakunta (Satamensa)', 'Satakunta', 'pos15', 15);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Turku', 'Varsinais-Suomi', 'pos14', 16);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Vaasa', 'Etelä-Pohjanmaa, Pohjanmaa, Keski-Pohjanmaa', 'pos4', 17);

INSERT INTO PosContact(Pos_Id, Name, Title, Email, Tel, Order_Id, Public) values (1, 'Matti Meikalainen', 'Puheenjohtaja', 'spam at mensa.fi', '+358 10 234 5678', 1, 0);
INSERT INTO PosContact(Pos_Id, Name, Title, Email, Tel, Order_Id, Public) values (1, 'Maija Meikalainen', 'Varapuheenjohtaja', '', '', 2, 0);

 */

$sql="SELECT PosName, Province, Map_Id, Name, Title, Email, Tel FROM Pos INNER JOIN PosContact ON Pos.Pos_Id = PosContact.Pos_Id WHERE PosContact.Public=1 ORDER BY Pos.Order_Id, PosContact.Order_Id ASC";

$posdata=$DA->getValues($sql);
$posarray = array();
$current_pos = null;

while($row=mysqli_fetch_array($posdata, MYSQL_ASSOC)){

	$person = array("title" => $row["PosContacts.Title"], "name" => $row["PosContacts.Name"], "email" => $row["PosContacts.Email"], "tel" => $row["PosContacts.Tel"]);

	if ($row["Pos.Name"] != $current_pos) {
		$current_pos = $row["Pos.Name"];
		$peoplearray = array();
		$peoplearray[] = $person;
		$posarray["Pos.Name"] = array("Map_Id" => $row["Pos.Map_Id"], "province" => $row["Pos.Province"], "name" => $row["Pos.Name"], "people" => $peoplearray);
	}else{
		$posarray["Pos.Name"]["people"][] = $person;
	}
}
var_dump($posarray);

  $GLOBALS['paikallisosastot'] = $posarray;

?>
