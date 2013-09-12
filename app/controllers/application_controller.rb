class ApplicationController < ActionController::Base
	before_filter :authenticate_user!
	
	protect_from_forgery

	rescue_from CanCan::AccessDenied do |exception|
    redirect_to record_path(@appointment.record.id), :alert => exception.message
  end

	before_filter :set_locale

	private

	def set_locale
	if lang = request.env['HTTP_ACCEPT_LANGUAGE']
		lang = lang[/^[a-z]{2}/]
			lang = :"pt-BR" if lang == "pt"
	end
		I18n.locale = params[:locale] || lang
	end
end
