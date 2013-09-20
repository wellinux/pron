Prontusoft::Application.routes.draw do

  get "page/:id" => "page#index", :as => :page

  root to: "page#index"

  resources :exame_categories do
    resources :exames
  end
  resources :exames

  resources :events

  # get "calendar#index"

  match '/calendar(/:year(/:month))' => 'calendar#index', :as => :calendar, :constraints => {:year => /\d{4}/, :month => /\d{1,2}/}

  mount Ckeditor::Engine => '/ckeditor'

  devise_for :users

  devise_for :users do
    get "/users/sign_out" => "devise/sessions#destroy", :as => :destroy_user_session
  end

  resources :firms do
    resources :patients
    resources :functions
    resources :sections
  end
  resources :sections
  resources :functions

  resources :patients do 
    resources :records
    resources :functions
    resources :sections
    resources :events    
    resources :recibos
  end
  resources :recibos

  resources :records do
    resources :appointments
  end

  resources :appointments do
    resources :complementary_exams
    resources :asos
    resources :declarations
    resources :attests
    resources :solic_exames
    resources :receituarios
  end
  resources :receituarios
  resources :solic_exames

  resources :complementary_exams
  resources :declarations

  resources :asos do
    resources :occupational_risks
  end

  resources :users

  resources :risk_categories do
    resources :risks
  end

  #:only => [:create, :update], :module => :risk_categories

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'

end