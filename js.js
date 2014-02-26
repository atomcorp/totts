$(document).ready(function() {
  
  var arsePoints = 59
  var tottPoints = 50
  var remainingGames = 11
  var origRemainingGames = remainingGames
  var maxPoints = remainingGames * 3
  var arseMaxPoints = (remainingGames * 3) + arsePoints
  var tottMaxPoints = (remainingGames * 3) + tottPoints
  var invalidPoints = maxPoints - 1

  
  // var paraLoop = '<p>'remainingGames'</p>'
  function tottBehind() {

    var j = remainingGames;
	var x = tottMaxPoints;
	while (x > arsePoints || j == 0) {       
	  j--;
	  x = (j * 3) + tottPoints;
	  var i = remainingGames - j;
	  $('#text').html(i+' games. If Arsenal and Tottenham win all their games.');
    }	
  }; // end tottBehind
  
  function pointsToWin() {
    var i = (tottMaxPoints-arsePoints);
	if (
	  i == invalidPoints
	) {
	  i = i + 1
	}    
	$('.pToWin').html(i+' points to win!');
  } // end pointsToWin
  
    $('.arse').html(arseMaxPoints+' Arsenals Max Possible Points');
	$('.tott').html(tottMaxPoints+' Tottenham Max Possible Points');
	$('.tott').html(tottMaxPoints+' Tottenham Max Possible Points');
	
  function leastPossWin() {
    var i = arseMaxPoints - tottMaxPoints;
	alert(i);
    if (
	  i == invalidPoints
	) {
	  i = i + 1
	} 
	$('.leastWin').html('Arsenal need at least '+i+' points');
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
  }; // end pointsDiff
  
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