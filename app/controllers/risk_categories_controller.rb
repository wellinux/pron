class RiskCategoriesController < InheritedResources::Base
	def new
    @risk_category = RiskCategory.new
    @risk_category.risks.build
  end
end
