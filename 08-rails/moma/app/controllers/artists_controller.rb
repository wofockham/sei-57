class ArtistsController < ApplicationController
    def index
        @artists = Artist.all
    end

    def show
        @artist = Artist.find params[:id]
    end

    def new
        @artist = Artist.new
    end

    def create
        artist = Artist.create artist_params
        redirect_to artist # GET to #show
    end

    def edit
        @artist = Artist.find params[:id]
    end

    def update
        artist = Artist.find params[:id]
        artist.update artist_params
        redirect_to artist
    end

    def destroy
        artist = Artist.find params[:id]
        artist.destroy
        redirect_to artists_path
    end

    private
    # strong params: a way to sanitise data from the form by ensuring it's on our safe list
    def artist_params
        params.require(:artist).permit(:name, :nationality, :dob, :period, :image)
    end
end