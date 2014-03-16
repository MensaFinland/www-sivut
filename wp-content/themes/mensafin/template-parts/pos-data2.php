<?php
 /**
  * Contact information for local chapters in each province.
  *
  * @package mensafin
  */
?><?php

//Debug:
//ini_set('display_errors', 'On');
 
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
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Mensa �land', 'Ahvenanmaa / �land', 'pos17', 2);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('P��majaMensa', 'Etel�-Savo', 'pos8', 3);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Helsingin Mensa', 'P��kaupunkiseutu', 'pos12', 4);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('It�-Uusimaa', 'It�-Uusimaa', 'pos11', 5);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Kanta-H�me (H�mensa)', 'Kanta-H�me', 'pos16', 6);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Keski-Suomi', 'Keski-Suomi', 'pos5', 7);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Kymenlaakso', 'Kymeenlaakso ja Etel�-Karjala', 'pos9', 8);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Lappi (Napapiirin Mensa - Mensa Arctic Circle)', 'Lappi', 'pos2', 9);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Oulu', 'Pohjois-Pohjanmaa, Kainuu', 'pos3', 10);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Pirkanmaa (Mansen Mensa)', 'Pirkanmaa', 'pos13', 11);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Pohjois-Karjala', 'Pohjois-Karjala', 'pos7', 12);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('Pohjois-Savo', 'Pohjois-Savo', 'pos6', 13);
INSERT INTO Pos(PosName, Province, Map_Id, Order_Id) values ('P�ij�t-H�me (Demensa)', 'P�ij�t-H�me', 'pos10', 14);
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

	$person = array("title" => $row["Title"], "name" => $row["Name"], "email" => $row["Email"], "tel" => $row["Tel"]);

	if ($row["PosName"] != $current_pos) {
		$current_pos = $row["PosName"];
		$peoplearray = array();
		$peoplearray[] = $person;
		$posarray[$row["PosName"]] = array("map_id" => $row["Map_Id"], "province" => $row["Province"], "name" => $row["PosName"], "people" => $peoplearray);
	}else{
		$posarray[$row["PosName"]]["people"][] = $person;
	}
}
//var_dump($posarray);

  $GLOBALS['paikallisosastot'] = $posarray;

?>
