class PageController < ApplicationController
	def index
    render params[:id]
  end
end
