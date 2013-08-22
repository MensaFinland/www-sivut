<?php
 /**
  * Map of local chapters in each province.
  *
  * @package mensafin
  */
?>

<!-- POS-kartta -->
<div style="display:inline">
	<img id="poskartta0" name="poskartta0" alt="Paikallisosastot" src="<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif" width="235" height="430" style="border:thin black none" usemap="#poskartta"/>

	<map name="poskartta">
	<area href="#pos2" title="Lappi" id="apos2" shape="poly" coords="160,7,167,16,180,21,180,29,173,37,174,55,169,66,172,73,181,84,195,98,181,124,190,144,176,143,176,164,170,167,161,167,148,173,133,169,118,176,106,166,98,145,105,131,100,109,99,82,91,66,80,64,63,43,75,32,87,52,98,59,109,53,120,63,133,49,133,30,142,10,153,13" alt="Lappi"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos2.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos2box';"/>
	<area href="#pos3" title="Oulu" id="apos3" shape="poly" coords="97,228,116,201,116,194,122,191,123,175,136,169,150,173,164,167,176,168,180,160,180,143,193,145,202,167,195,180,199,190,192,197,200,208,207,226,207,242,177,238,173,248,149,232,139,241,137,255,125,249,122,255" alt="Oulu"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos3.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos3box';"/>
	<area href="#pos4" title="Vaasa" id="apos4" shape="poly" coords="50,279,52,263,51,257,65,259,81,239,92,231,117,257,104,273,107,294,73,299,59,309,49,307" alt="Vaasa"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos4.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos4box';"/>
	<area href="#pos5" title="Keski-Suomi" id="apos5" shape="poly" coords="122,253,135,259,145,301,136,309,141,324,130,320,113,332,113,307,100,298,108,295,105,273" alt="Keski-Suomi"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos5.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos5box';"/>
	<area href="#pos6" title="Pohjois-Savo" id="apos6" shape="poly" coords="166,303,156,291,144,295,136,259,138,242,147,235,171,250,179,251,187,279,178,282,178,290" alt="Pohjois-Savo"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos6.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos6box';"/>
	<area href="#pos7" title="Pohjois-Karjala" id="apos7" shape="poly" coords="229,273,201,245,176,241,173,246,179,249,188,280,180,284,193,298,199,319,208,316,225,289" alt="Pohjois-Karjala"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos7.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos7box';"/>
	<area href="#pos8" title="Etel&auml;-Savo" id="apos8" shape="poly" coords="143,340,136,332,140,327,143,322,137,309,146,302,145,295,155,293,165,304,170,303,180,287,190,297,198,319,190,329,176,330,171,334,152,335,157,343,150,344" alt="Etel&auml;-Savo"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos8.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos8box';"/>
	<area href="#pos9" title="Kymenlaakso" id="apos9" shape="poly" coords="141,370,150,371,162,368,205,319,197,321,190,330,177,332,173,336,153,335,158,343,150,346,140,339,133,346,136,358,143,364" alt="Kymenlaakso"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos9.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos9box';"/>
	<area href="#pos10" title="P&auml;ij&auml;t-H&auml;me" id="apos10" shape="poly" coords="115,332,125,329,125,324,131,321,138,326,134,333,137,337,131,345,135,360,122,360,115,349,119,341" alt="P&auml;ij&auml;t-H&auml;me"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos10.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos10box';"/>
	<area href="#pos11" title="It&auml;-Uusimaa" id="apos11" shape="poly" coords="117,379,116,370,121,369,124,361,138,362,141,365,139,371,142,375,128,382" alt="It&auml;-Uusimaa"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos11.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos11box';"/>
	<area href="#pos13" title="Pirkanmaa" id="apos13" shape="poly" coords="83,347,83,338,69,335,78,300,99,297,111,309,112,337,101,339,90,348" alt="Pirkanmaa"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos13.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos13box';"/>
	<area href="#pos15" title="Satakunta" id="apos15" shape="poly" coords="48,344,51,308,60,310,75,299,74,308,68,337,81,340,81,350,74,345,60,352,52,344" alt="Satakunta"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos15.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos15box';"/>
	<area href="#pos16" title="Kanta-H&auml;me" id="apos16" shape="poly" coords="80,354,84,349,92,350,102,340,115,338,116,343,113,350,118,357,102,365" alt="Kanta-H&auml;me"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos16.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos16box';"/>
	<area href="#pos12" title="Helsinki" id="apos12" shape="poly" coords="72,384,88,377,94,362,102,366,119,359,122,362,120,367,113,370,115,379,101,388,97,383,77,392" alt="Helsinki"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos12.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos12box';"/>
	<area href="#pos14" title="Varsinais-Suomi" id="apos14" shape="poly" coords="29,373,45,356,45,345,50,345,59,352,74,347,80,350,79,356,92,362,86,376,70,384,64,392,59,377,48,393,44,388,48,379,40,376,39,371,33,379,39,384,35,389,24,376" alt="Varsinais-Suomi"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos14.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos14box';"/>
	<area href="#pos17" title="Ahvenanmaa, &Aring;land" id="apos17" shape="poly" coords="9,370,18,366,25,370,19,378" alt="Ahvenanmaa, &Aring;land"
		onMouseOver="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos17.gif';" 
		onMouseOut="if(document.images) document.poskartta0.src='<?php bloginfo('template_directory'); ?>/images/poskartta/pos.gif';"
		onClick="location.hash='#pos17box';"/>
	</map>
</div> <!-- display inline -->
