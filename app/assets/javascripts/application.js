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

    $(".grid-item").css("background-color","rgba(235, 212, 80)");
    $( ".grid-item" ).click(function() {
        var playlistAPI = "/songs/" + this.id + '.json';
        var node = $(this);
        $.getJSON( playlistAPI, function( data ) {
            console.log(data.name);
            var editedAPI = "/playlists/" + this.id + '.json';
            window.location.href = editedAPI
            /*
            node.append('<table></table>').append("<tr></tr>").append('<li>' + "'" + data.name + "'" + " " + data.album + " " + data.genre + '</li>')
            $("li").css("font-size", "10px")
            $("li").css("list-style-type", "none")
            .append('<li>' + data.name + '</li>');*/
        });
    $( ".backbtn" ).click(function() {
        window.location.href = "/"
    });
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
