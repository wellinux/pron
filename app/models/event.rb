class Event < ActiveRecord::Base
  belongs_to :patient

  attr_accessible :patient_id, :all_day, :end_at, :start_at

  has_event_calendar :start_at_field  => 'start_at'
end
