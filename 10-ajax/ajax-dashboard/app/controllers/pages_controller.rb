class PagesController < ApplicationController
  def home
    @brother = %w[ Groucho Harpo Chico ].sample
    @time = Time.now
    @uptime = `uptime`
    @calls_on_hold = rand 1..10
    @bushfires = rand 50..10_000
  end
end
