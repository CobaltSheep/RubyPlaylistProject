# README
To start the project, make sure you are using at least Rails 5.2.3 and at least Ruby 2.3.7.

Make sure you also do: "rake db:reset" to rest database values before you start the server. Once you are ready to start the server, types rails server to turn it on. It will most likely run at localhost:3000. 

I used RVM to get rails setup and I also 


-------------
The /songs route shows all the songs
The /playlists route shows all the playlists.

For both these routes, you can delete or create new songs/playlists and make edits.

The /songs/1.json or /songs/1 routes will show the song (or playlist if you just replace "songs" with "playlists")

Click on the yellow playlist box on the main page to show songs from the playlist.

**currently there is a bug where if you click repeatedly the songs stack on. Also, when you click it plays an audio file of a horse, which is a proof of concept for sound playing in the future, but does not have any real functionality currently. 

So far, there is no real function to add songs to a playlist, that is only done right now locally.

Issues:
As mentioned, the playlist boxes are still in the works, and clicking repeatedly makes more songs appear.
Visuals are still a little glitchy in some areas.
There is no function to add songs or manipulate playlists directly.

Looking Forward:
I hope to add more in dept playlist editing and customization.
Update HTML/CSS visuals to be more solid and more aesthetic. 
Add tags to songs for automated sorting and playlist creation.
Make user login accounts for protection. 

