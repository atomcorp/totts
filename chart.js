$(document).ready(function() {

  var oA = "<div class=”arse match”>" 
  var oT = "<div class=”arse points”>"
  var pA = "<div class=”totts match”>"
  var pT = "<div class=”totts points”>" 
  var c = "</div>"
  var arse = [   [1,0  ],   [2,3  ],   [3,6  ],   [4,9  ],   [5,12  ],   [6,15  ],   [7,16  ],   [8,19  ],   [9,22  ],   [10,25  ],   [11,25  ],   [12,28  ],   [13,31  ],   [14,34  ],   [15,35  ],   [16,35  ],   [17,36  ],   [18,39  ],   [19,42  ],   [20,45  ],   [21,48  ],   [22,51  ],   [23,52  ],   [24,55  ],   [25,55  ],   [26,56  ],   [27,59  ],   [28,59  ] ];
  var tott = [   [1,3  ],   [2,6  ],   [3,6  ],   [4,9  ],   [5,12  ],   [6,13  ],   [7,13  ],   [8,16  ],   [9,19  ],   [10,20  ],   [11,20  ],   [12,20  ],   [13,21  ],   [14,24  ],   [15,27  ],   [16,27  ],   [17,30  ],   [18,31  ],   [19,34  ],   [20,37  ],   [21,40  ],   [22,43  ],   [23,43  ],   [24,44  ],   [25,47  ],   [26,50  ],   [27,50  ],   [28,53  ] ];
  var tottResults = [   ["<div class='arse match'>Fulham 1 Arsenal 3</div>","<div class='arse points'>3 points</div>","<div class='totts match'>Tottenham 1 Swansea 0</div>","<div class='totts points'>6 points</div>"  ],   ["<div class='arse match'>Arsenal 1 Tottenham 0</div>","<div class='arse points'>6 points</div>","<div class='totts match'>Arsenal 1 Tottenham 0</div>","<div class='totts points'>6 points</div>"  ],   ["<div class='arse match'>Sunderland 1 Arsenal 3</div>","<div class='arse points'>9 points</div>","<div class='totts match'>Tottenham 2 Norwich 0</div>","<div class='totts points'>9 points</div>"  ],   ["<div class='arse match'>Arsenal 3 Stoke 1</div>","<div class='arse points'>12 points</div>","<div class='totts match'>Cardiff 0 Tottenham 1</div>","<div class='totts points'>12 points</div>"  ],   ["<div class='arse match'>Swansea 1 Arsenal 2</div>","<div class='arse points'>15 points</div>","<div class='totts match'>Tottenham 1 Chelsea 1</div>","<div class='totts points'>13 points</div>"  ],   ["<div class='arse match'>West Brom 1 Arsenal 1</div>","<div class='arse points'>16 points</div>","<div class='totts match'>Tottenham 0 West Ham 3</div>","<div class='totts points'>13 points</div>"  ],   ["<div class='arse match'>Arsenal 4 Norwich 1</div>","<div class='arse points'>19 points</div>","<div class='totts match'>Aston Villa 0 Tottenham 2</div>","<div class='totts points'>16 points</div>"  ],   ["<div class='arse match'>Crystal Palace 0 Arsenal 2</div>","<div class='arse points'>22 points</div>","<div class='totts match'>Tottenham 1 Hull 0</div>","<div class='totts points'>19 points</div>"  ],   ["<div class='arse match'>Arsenal 2 Liverpool 0</div>","<div class='arse points'>25 points</div>","<div class='totts match'>Everton 0 Tottenham 0</div>","<div class='totts points'>20 points</div>"  ],   ["<div class='arse match'>Man United 1 Arsenal 0</div>","<div class='arse points'>25 points</div>","<div class='totts match'>Tottenham 0 Newcastle 1</div>","<div class='totts points'>20 points</div>"  ],   ["<div class='arse match'>Arsenal 2 Southampton 0</div>","<div class='arse points'>28 points</div>","<div class='totts match'>Man City 6 Tottenham 0</div>","<div class='totts points'>20 points</div>"  ],   ["<div class='arse match'>Cardiff 0 Arsenal 3</div>","<div class='arse points'>31 points</div>","<div class='totts match'>Tottenham 2 Man United 2</div>","<div class='totts points'>21 points</div>"  ],   ["<div class='arse match'>Arsenal 2 Hull 0</div>","<div class='arse points'>34 points</div>","<div class='totts match'>Fulham 1 Tottenham 2</div>","<div class='totts points'>24 points</div>"  ],   ["<div class='arse match'>Arsenal 1 Everton 1</div>","<div class='arse points'>35 points</div>","<div class='totts match'>Sunderland 1 Tottenham 2</div>","<div class='totts points'>27 points</div>"  ],   ["<div class='arse match'>Man City 6 Arsenal 3</div>","<div class='arse points'>35 points</div>","<div class='totts match'>Tottenham 0 Liverpool 5</div>","<div class='totts points'>27 points</div>"  ],   ["<div class='arse match'>Arsenal 0 Chelsea 0</div>","<div class='arse points'>36 points</div>","<div class='totts match'>Southampton 2 Tottenham 3</div>","<div class='totts points'>30 points</div>"  ],   ["<div class='arse match'>West Ham 1 Arsenal 3</div>","<div class='arse points'>39 points</div>","<div class='totts match'>Tottenham 1 West Brom 1</div>","<div class='totts points'>31 points</div>"  ],   ["<div class='arse match'>Newcastle 0 Arsenal 1</div>","<div class='arse points'>42 points</div>","<div class='totts match'>Tottenham 3 Stoke 0</div>","<div class='totts points'>34 points</div>"  ],   ["<div class='arse match'>Arsenal 2 Cardiff 0</div>","<div class='arse points'>45 points</div>","<div class='totts match'>Man United 1 Tottenham 2</div>","<div class='totts points'>37 points</div>"  ],   ["<div class='arse match'>Aston Villa 1 Arsenal 2</div>","<div class='arse points'>48 points</div>","<div class='totts match'>Tottenham 2 Crystal Palace 0</div>","<div class='totts points'>40 points</div>"  ],   ["<div class='arse match'>Arsenal 2 Fulham 0</div>","<div class='arse points'>51 points</div>","<div class='totts match'>Swansea 1 Tottenham 3</div>","<div class='totts points'>43 points</div>"  ],   ["<div class='arse match'>Southampton 2 Arsenal 2</div>","<div class='arse points'>52 points</div>","<div class='totts match'>Tottenham 1 Man City 5</div>","<div class='totts points'>43 points</div>"  ],   ["<div class='arse match'>Arsenal 2 Crystal Palace 0</div>","<div class='arse points'>55 points</div>","<div class='totts match'>Hull 1 Tottenham 1</div>","<div class='totts points'>44 points</div>"  ],   ["<div class='arse match'>Liverpool 5 Arsenal 1</div>","<div class='arse points'>55 points</div>","<div class='totts match'>Tottenham 1 Everton 0</div>","<div class='totts points'>47 points</div>"  ],   ["<div class='arse match'>Arsenal 0 Man United 0</div>","<div class='arse points'>56 points</div>","<div class='totts match'>Newcastle 0 Tottenham 4</div>","<div class='totts points'>50 points</div>"  ],   ["<div class='arse match'>Arsenal 4 Sunderland 1</div>","<div class='arse points'>59 points</div>","<div class='totts match'>Norwich 1 Tottenham 0</div>","<div class='totts points'>50 points</div>"  ],   ["<div class='arse match'>Stoke 1 Arsenal 0</div>","<div class='arse points'>59 points</div>","<div class='totts match'>Tottenham 1 Cardiff 0</div>","<div class='totts points'>53 points</div>"  ] ];
  var red = "#ED1B24";
  var blue = "#122040";
  
  
$.plot($("#placeholder"), [ arse, tott ], {  
  series: {
    lines: {show:true},
    points: {show:true}
	
  },
  colors: [red, blue],
  grid: {
    hoverable:true,
	clickable:true
  }

  } // end options
 
  ); // end plot
  
  $("<div id='tooltip'></div>").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");
  
  $("#placeholder").bind("plothover", function (event, pos, item) {
    if (item) {
					var x = item.datapoint[0],
						y = item.datapoint[1];

					$("#tooltip").html(tottResults[x-1])
						.css({top: item.pageY+5, left: item.pageX+5})
						.fadeIn(200);
				} else {
					$("#tooltip").hide();
				}
  });

});