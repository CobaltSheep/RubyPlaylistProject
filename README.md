# README

To get started easily, you can try the Docker image that I maintain on Docker Hub.

```
docker run -p 3000:3000 tess1254/playlist 
```

Otherwise you can build the Docker image for this application yourself with:

```
docker build -t tess1254/playlist .
```

To start the project, make sure you are using at least Rails 5.2.3 and at least Ruby 2.3.7 and bundler 2.0.1.

Make sure you also do: "rake db:reset" to rest database values before you start the server. Then type rake db:setup and rake db:seed to add the values from the table. Once you are ready to start the server, types rails server to turn it on. It will most likely run at localhost:3000. 

I used RVM to get rails setup and I also used Homebrew as well as other packages.


-------------
The /songs route shows all the songs
The /playlists route shows all the playlists.

For both these routes, you can delete or create new songs/playlists and make edits.

The /songs/1.json or /songs/1 routes will show the song (or playlist if you just replace "songs" with "playlists")

Click on the yellow playlist box on the main page to show songs from the playlist. Click on the play button to start the song and pause to stop it.

**So far, there is no real function to add songs to a playlist, that is only done right now locally.

Issues:
As mentioned, adding songs to a playlist is only local.
Visuals are still a little glitchy in some areas and not 100% polished.
There is no function to manipulate playlists directly.

Looking Forward:
I hope to add more in dept playlist editing and customization.
Update HTML/CSS visuals to be more solid and more aesthetic. 
Add tags to songs for automated sorting and playlist creation.
Make user login accounts for protection. 

