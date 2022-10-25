class PlanetsController < ApplicationController
    def index
        @planets = Planet.all
    end

    def show
        @planet = Planet.find params[:id]
    end

    def new
    end

    def create
        # TODO: rewrite this as a single Planet.create
        planet = Planet.new
        planet.name = params[:name]
        planet.image = params[:image]
        planet.orbit = params[:orbit]
        planet.diameter = params[:diameter]
        planet.mass = params[:mass]
        planet.moons = params[:moons]
        planet.save
        redirect_to planet_path(planet.id)
    end

    def edit
        @planet = Planet.find params[:id]
    end

    def update
        planet = Planet.find params[:id]
        planet.name = params[:name]
        planet.image = params[:image]
        planet.orbit = params[:orbit]
        planet.diameter = params[:diameter]
        planet.mass = params[:mass]
        planet.moons = params[:moons]
        planet.save
        redirect_to planet_path(planet.id)
    end
end
