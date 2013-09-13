set :application, "Prontusoft"
set :repository,  "git://github.com/wellinux/well.git"

set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`
set :deploy_to, "/apps/test"
role :web, "prontusoft.com"                          # Your HTTP server, Apache/etc
role :app, "prontusoft.com:64413"                          # This may be the same as your `Web` server
role :db,  "prontusoft.com", :primary => true # This is where Rails migrations will run
role :db,  "prontusoft.com"

set :user, "prontuso"
set :use_sudo, false

# Mais configurações
set :keep_releases, 5
set :ssh_options, {:forward_agent => true}
set :rails_env, "production"


# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end