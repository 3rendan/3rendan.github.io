$(()=> {
  const makePlayer = (num) => ({ score: num})
  const player1 = makePlayer(0);
  const player2 = makePlayer(0);
  // start
  $('.gameState').text(`player1=${window.localStorage.player1}, player2=${window.localStorage.player2} `)
  //end
  const checkWin = (obj) => {
    window.localStorage.setItem (`player1`,`${player1.score}`);
      window.localStorage.setItem (`player2`,`${player2.score}`);
    return obj.score > 10
  }
  $('.field').text('This is correct');
const $field = $('.field');
$('#button1').on('click', (event) =>{
  $field.text('Add to P1');
  player1.score++;
  window.localStorage.setItem (`player1`,`${player1.score}`);
    window.localStorage.setItem (`player2`,`${player2.score}`);
    // start
    $('.gameState').text(`player1=${window.localStorage.player1}, player2=${window.localStorage.player2} `)
    //end
  $('.player1').text(`${player1.score}`)
  if (checkWin(player1)){
      $field.text('P1 Wins!!!');
    [player1, player2].forEach((player) => {
      player.score = 0
    })
  $('.player1').text(`${player1.score}`)
    $('.player2').text(`${player2.score}`)
  }
})
$('#button2').on('click', (event) =>{
  $field.text('Add to P2');
  player2.score++;
  window.localStorage.setItem (`player1`,`${player1.score}`);
    window.localStorage.setItem (`player2`,`${player2.score}`);
    // start
    // start
    $('.gameState').text(`player1=${window.localStorage.player1}, player2=${window.localStorage.player2} `)
    //end
    //end
  $('.player2').text(`${player2.score}`)
  if (checkWin(player2)){
      $field.text('P2 Wins!!!');
    [player1, player2].forEach((player) => {
      player.score = 0
    })
      $('.player1').text(`${player1.score}`)
  $('.player2').text(`${player2.score}`)
  }
})
})