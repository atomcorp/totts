$(document).ready(function() {
  
  var arsePoints = 59
  var tottPoints = 53
  var remainingGames = 10
  var origRemainingGames = remainingGames
  var maxPoints = remainingGames * 3
  var invalidPoints = maxPoints - 1
  var arseFix = ['Tottenham','Chelsea','Swansea','Man City','Everton','West Ham','Hull','Newcastle','West Brom','Norwich'];
  var tottFix = ['Chelsea','Arsenal','Southampton','Liverpool','Sunderland','West Brom','Fulham','Stoke','West Ham','Aston Villa'];
  var a = 'away';
  var h = 'home';
  var arseLoc =  [a,a,h,h,a,h,a,h,h,a];
  var tottLoc =  [a,h,h,a,h,a,h,a,a,h];
  var opt = '<option value="3">Win</option><option value="1">Draw</option><option value="0">Lose</option>'
  var arseRemainGames = arseFix.length;
  var tottRemainGames = tottFix.length;
  var arseMaxPoints = (arseRemainGames * 3) + arsePoints
  var tottMaxPoints = (tottRemainGames * 3) + tottPoints  
/*   
  sets arsenal and totts fixtures
 */  
  function arseFixList() {
  
    var i = 0;
	while ( i < arseRemainGames) {
    $('#games ol.arseFix').append('<li>'+arseFix[i]+'<select class="'+arseLoc[i]+' '+arseFix[i].toLowerCase()+'">'+opt+'</select></li>');
 	i++;
	} // end while
  } // end areFixList
  
  function tottFixList() {
    var i = 0;
	while ( i < tottRemainGames) {
    $('#games ol.tottFix').append('<li>'+tottFix[i]+'<select class="'+arseLoc[i]+' '+tottFix[i].toLowerCase()+'">'+opt+'</select></li>');
 	i++;
	} // end while
  } // end areFixList  
  
  arseFixList();
  tottFixList();
  

  // var paraLoop = '<p>'remainingGames'</p>'
  function tottBehind() {

    var j = tottRemainGames ;
	alert(j);
	var x = tottMaxPoints;
	var z = arsePoints;
	while (x > z || j == 0) {       
	  x = (j * 3) + tottPoints;
	  j--;
	  var i = remainingGames - j;
	  $('#text').html('At least '+i+' games. If Arsenal and Tottenham win all their games.');
    }	
  }; // end tottBehind
  
  function pointsToWin() {
    var i = (tottMaxPoints-arsePoints)+1;
	if (
	  i == invalidPoints
	) {
	  i = i + 1
	}    
	$('.pToWin').html(i+' points to win if Totts and Arsenal win all their games.');
  } // end pointsToWin
  
    $('.arse').html(arseMaxPoints+' Arsenals Max Possible Points');
	$('.tott').html(tottMaxPoints+' Tottenham Max Possible Points');
	$('.tott').html(tottMaxPoints+' Tottenham Max Possible Points');
	
  function leastPossWin() {
    var i = (arseMaxPoints - tottMaxPoints);
    j = arseMaxPoints + i;
    if (
	  j == invalidPoints
	) {
	  i = i + 1
	} 
	$('.leastWin').html('Arsenal need at least '+i+' points if Tottenham win all there games.');
  }  // end leastPointsWin
  
  function pointsDiff() {
    var outcome = '' 
	var i = arsePoints - tottPoints
    if ( arsePoints > tottPoints
	  ) {
		outcome = 'ahead';
	  } else if (
	    arsePoints < tottPoints
	  ) {
	    outcome = 'behind';
		i = Math.abs(i);
	  }
	var p = $('.pAhead').html('Arsenal are '+ i + ' point(s) ' + outcome + '.')
  } // end pointsDiff

  $('.tottenham').blur(function() { // sets totts vs arse option box //
    var i = parseInt($('.tottenham').val(),10);	
	if ( i == 3 ) {
	    $('.arsenal').val("0");
	} else if ( i == 0 ) {
	    $('.arsenal').val("3");
	} else { 
	    $('.arsenal').val("1"); 
	}	
  });
  
  function prediction() {
   
   /* works out scores */
   
   var zA = 0;
   var zT = 0;
   
    $('.arseFix option:selected').each(function() {
	  var x = parseInt($(this).val(),10);
	  zA += x
	});
	
	$('.tottFix option:selected').each(function() {
	  var x = parseInt($(this).val(),10);
	  zT += x
	});

		
	// works out table //
	
    var team1 = $('.team1');
	var team2 = $('.team2');
	var arseTotal = zA+arsePoints;
	var tottTotal = zT+tottPoints;
	
	if (arseTotal >= tottTotal) {
	  team1.html('Arsenal');
	  $('.points1').html(arseTotal);
	  team2.html('Tottenham');
	  $('.points2').html(tottTotal);
	} else if (tottTotal > arseTotal)	{
	  team1.html('Tottenham');
	  $('.points1').html(tottTotal);
	  team2.html('Arsenal');
	  $('.points2').html(arseTotal);
	}
	
    var j = remainingGames;
	var x = tottMaxPoints;
	var z = arsePoints;

  } // end prediction
  
  $('#submit').click(function() {
  prediction();
  });
  
  pointsDiff();

	
  if  (  
        arsePoints > tottPoints
    )
      { 
	    tottBehind(); 
		pointsToWin();
		leastPossWin()
    } else if (
	   arsePoints == tottPoints
	) {
	  $('#text').html('It\'s neck and neck!');
	}  else {
	$('#text').html('Come On Arsenal!.');
	$('.arse').html(arseMaxPoints+' Arsenals Max Possible Points');
	$('.tott').html(tottMaxPoints+' Tottenham Max Possible Points');
	}
  
});