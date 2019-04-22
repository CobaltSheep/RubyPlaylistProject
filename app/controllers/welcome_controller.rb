class WelcomeController < ApplicationController
  def index
    @playlists = Playlist.all
  end

  def specify

  end
end
