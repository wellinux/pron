class SolicExamesController < InheritedResources::Base
	layout :resolve_layout  #O layout vai sair da decisão do método abaixo  

  # E este método  
  private  
    def resolve_layout  
      case action_name  
        when "show"  
          "relatorio"  
        else  
        	"application"  
      end  
  end
end
