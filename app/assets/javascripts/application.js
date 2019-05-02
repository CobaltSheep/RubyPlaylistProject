// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
jQuery(document).ready(function(){

    //$(".grid-item").css("background-color","rgba(235, 212, 80)");
    //$(".backbtn").css("background-color","rgba(235, 212, 80)");
    $( ".grid-item" ).click(function() {
        var playlistAPI = "/playlists/" + this.id + '.json';
        var node = $(this).find("div").html("<table></table>");
        node.append("<br><tr></tr>").append("<th>Name</th>").append("<th>Album</th>").append("<th>Genre</th>")
        $.getJSON( playlistAPI, function( data ) {
            console.log(data.songs);
            
            $.each( data.songs, function( i, song ) {
                node.append("<tr class='song'></tr>").append('<td>' + "'" + song.name + "'" + '</td>' + '<td>' + song.album + '</td>' + '<td>' + song.genre + '</td><td><audio controls><source src="' + song.url + '" type="audio/mpeg"></audio></td></tr>')
            });
        });
        //var a = new Audio(url);
        //a.play();


/*
            $.each( data.items, function( i, item ) {
            $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
            if ( i === 3 ) {
                return false;
            }
            });
        });
*/        
    });
});
