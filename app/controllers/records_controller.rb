class RecordsController < InheritedResources::Base
  before_filter :authenticate_user!

	layout :resolve_layout  #O layout vai sair da decisão do método abaixo  

  # E este método  
  private  
    def resolve_layout  
      case action_name  
        when "create","show","edit"
          "relatorio"  
        else  
        	"application"  
      end  
  end
end
