class PagesController < ApplicationController
    def home
    end

    def numbers
        @amount = 1232.326
        @large_number = 123812930
        @phone = 2125551212
    end

    def text
        @numbers = (1..20).to_a.shuffle
        @story = 'A very very very very very very very long time ago in a galaxy far far far  far far far far far far far away'
        @friend_count = 1
        @enemy_count = 53453
    end

    def assets
    end

    def url
    end
end