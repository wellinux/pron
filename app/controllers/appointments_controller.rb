class AppointmentsController < InheritedResources::Base
  respond_to :html, :xml, :json

  def new
    @appointment  = Appointment.new
    @exame       = Appointment.exames.all

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @appointment }
    end
  end

  def edit
    @appointment = Appointment.find(params[:id])
    authorize!  :edit, @appointment, 
                :message => "Você marcou essa Consulta como Concluída, portanto, não pode mais alterá-la."
  end

	layout :resolve_layout  #O layout vai sair da decisão do método abaixo  

    # E este método  
    private  
      def resolve_layout  
        case action_name  
          when "index", "new", "create","show","edit"  
            "relatorio"  
          else  
          "application"  
        end  
    end
end
