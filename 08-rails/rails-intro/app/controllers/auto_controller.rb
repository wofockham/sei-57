class AutoController < ApplicationController
    def color
    end

    def engine
        # rails will implicitly render a view with the same name as the action,
        # unless you tell it to render something else.
        # in this case, it will render engine.html.erb
    end
end