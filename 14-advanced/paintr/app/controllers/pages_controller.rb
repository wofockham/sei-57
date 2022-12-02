class PagesController < ApplicationController
    def home
        render :home
    end

    def hamldemo
        @lucky = rand 1..40
    end
end
