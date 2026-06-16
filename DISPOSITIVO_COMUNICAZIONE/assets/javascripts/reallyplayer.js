/*! Downloaded from https://deltarune.com/assets/javascripts/reallyplayer.js on 16/06/2026. All rights resereved, code belonging
 to Fangamer and Toby Fox, and to their respective owners. USP claim no ownership or rights. 
 Unminified for readability.*/

$(document).on('click', '.really-player:not(.playing) .play-button', function() {
  var reallyplayer = $(this).closest('.really-player');
  var players = reallyplayer.find('audio');
  var playerToPlay = Math.floor( Math.random() * ( 1 + players.length - 1 ) );
  players[playerToPlay].play();
});

$(document).on('click', '.really-player.playing .play-button', function() {
  var reallyplayer = $(this).closest('.really-player');
  var players = reallyplayer.find('audio');
  players.each(function() {
    $(this)[0].pause();
  });
});

$(document).on('input change', '.really-player .volume', function() {
  var reallyplayer = $(this).closest('.really-player');
  var newvolume = $(this).volume = $(this).val() / 100.0;
  var players = reallyplayer.find('audio');
  players.each(function() {
    $(this)[0].volume = newvolume;
  });
});

$('.really-player audio').each(function() {
  $(this)[0].addEventListener('play', function() {
    $('.really-player.playing').each(function() {
      $(this).find('audio')[0].pause();
    });
    $(this).closest('.really-player').addClass('playing');
    $(this).closest('.really-player-container').addClass('playing');
  });
  $(this)[0].addEventListener('pause', function() {
    $(this).closest('.really-player').removeClass('playing');
    $(this).closest('.really-player-container').removeClass('playing');
  });
});
