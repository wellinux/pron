class CalendarController < ApplicationController
  before_filter :authenticate_user!


  def index
    @month = (params[:month] || (Time.zone || Time).now.month).to_i
    @year = (params[:year] || (Time.zone || Time).now.year).to_i

    @shown_month = Date.civil(@year, @month)

    @event_strips = Event.event_strips_for_month(@shown_month)
  end

  layout :resolve_layout  #O layout vai sair da decisão do método abaixo  

  # E este método  
  private  
    def resolve_layout  
      case action_name  
        when "index", "new", "create","show","edit"  
          "agenda"  
        else  
        "application"  
      end  
  end
  
end
