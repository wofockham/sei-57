class DashboardController < ApplicationController
    def brother
        brother = %w[ Groucho Harpo Chico ].sample
        render :plain => brother
    end

    def time
        render :plain => Time.now
    end

    def uptime
        render :plain => `uptime`.chomp
    end

    def info
        brother = %w[ Groucho Harpo Chico ].sample
        time = Time.now.to_s
        uptime = `uptime`

        render :json => {
            :brother => brother,
            :time => time,
            :uptime => uptime,
            :calls => rand(1..10),
            :bushfires => rand(50..10_000),
            :butterflies => Butterfly.all
        }
    end
end
