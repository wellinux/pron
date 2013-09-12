module ApplicationHelper

	def valor_monetario(number)
	  number_to_currency number,
	    unit: "R$",
	    separator: ",",
	    delimiter: ".",
	    precision: 2
	end

end
