class OccupationalRisksController < InheritedResources::Base

  respond_to :html, :xml, :json

	def create
    @risk_category = RiskCategory.find(params[:risk_category_id])
    @occupational_risk = @risk_category.occupational_risks.create(params[:occupational_risk])
    redirect_to risk_category_path(@risk_category)
   end

   def destroy
    @risk_category = RiskCategory.find(params[:risk_category_id])
    @occupational_risk = @risk_category.occupational_risks.find(params[:id])
    @occupational_risk.destroy
    redirect_to risk_category_path(@risk_category)
  end
  
end
