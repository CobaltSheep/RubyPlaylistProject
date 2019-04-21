json.extract! song, :id, :name, :album, :genre, :created_at, :updated_at
json.url song_url(song, format: :json)
