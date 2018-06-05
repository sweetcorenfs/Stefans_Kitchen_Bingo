var triggeredonce = 0;
var headerText = "Küchenbrigade Bingo";
var footerText = "<a href='https://www.twitch.tv/Stefans_Kitchen'><img src='img/Combo_Purple_RGB.png'></a> <a href='https://discord.gg/rvue6sm'><img src='img/discord.png'></a>";
var winText = "Bingo!";
var winText2 = "MultiBingo!";
var clickSnd = new Audio("audio/click.mp3");
var winSnd = new Audio("audio/win.mp3");

var JSONBingo = {"squares": [
		{"square": "Salexa ist bockig"},
		{"square": "Pfannen gefummel"},
		{"square": "Ofen vorgeheizt ?"},
		{"square": "Mauli kommt zum Einsatz"},
		{"square": "Brick kommt zum Einsatz"},
		{"square": "Katze plant überfall"},
		{"square": "Möhren ?<br>Nicht da!"},
		{"square": "Salexa wirft mit Kulis"},
		{"square": "Stefan kramt den V-Hobel hervor"},
		{"square": "Stefan bringt Salexa zur Weißglut"},
		{"square": "MacQuyver Style"},
		{"square": "Geschmack weggeschnitten"},
		{"square": "PSCHT!<br>Das muss so!"},
		{"square": "Windows will ein Update machen"},
		{"square": "Kamera fällt aus"},
		{"square": "Stefan lässt beim wegräumen etwas fallen"},
		{"square": "Eine Zutat flieht"},
		{"square": "Katze bettelt um Aufmerksamkeit"},
		{"square": "Stefan hat eine Zutat vergessen"},
		{"square": "zuwenig von Zutat vorhanden"},
		{"square": "Stefan zeigt Maurerdecollete"},
		{"square": "Stefan lässt Salexa nicht ausreden"},
		{"square": "Stefan vergisst die Schürze"},
		{"square": "Stefan niest"},
		{"square": "Salexa niest"},
		{"square": "Stefan rülpst"},
		{"square": "Eine Katze jammert laut"},
		{"square": "Salexa will Kuchen"},
		{"square": "Salexa benutzt die Mittelfingerfunktion"},
		{"square": "Stefan schafft die vorgegebene Zeit"},
		{"square": "Stefan missbraucht den Eierschneider"},
		{"square": "der Eierschneider wird mal zum Eierschneiden benutzt"},
		{"square": "Wasser kocht nicht"},
		{"square": "Schneebesen fällt auseinander"},
		{"square": "3kg Gewürz sind nicht genug!"},
		{"square": "Stefan schneidet sich"},
		{"square": "Etwas geht kaputt"},
		{"square": "Shu Shu !"},
		{"square": "Aaaaaaalaaaaarm!<br>Katze auf der Arbeitsfläche"},
		{"square": "Pizza"},
		{"square": "Stefan verzieht das Gesicht nachdem er probiert hat"},
		{"square": "Stefan wäscht ab"},
		{"square": "Stefan MUSS unbedingt umrühren"}
	]
};
