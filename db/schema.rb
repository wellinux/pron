# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130910221710) do

  create_table "appointments", :force => true do |t|
    t.date    "data"
    t.string  "pa"
    t.integer "pulso"
    t.text    "anamnese"
    t.string  "conclusao"
    t.string  "status"
    t.string  "imc"
    t.string  "ordem_exame"
    t.string  "categoria_exame"
    t.integer "record_id"
    t.float   "peso"
    t.float   "altura"
    t.string  "secao"
    t.string  "funcao"
    t.text    "exame_fisico"
  end

  add_index "appointments", ["record_id"], :name => "index_appointments_on_record_id"

  create_table "asos", :force => true do |t|
    t.date     "data"
    t.integer  "appointment_id"
    t.string   "periodicidade"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.string   "grau_exposicao"
    t.text     "obs"
  end

  add_index "asos", ["appointment_id"], :name => "index_asos_on_appointment_id"

  create_table "attests", :force => true do |t|
    t.integer  "appointment_id"
    t.date     "data"
    t.string   "cid"
    t.integer  "quantidade_dias"
    t.date     "data_inicial"
    t.string   "local"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "attests", ["appointment_id"], :name => "index_attests_on_appointment_id"

  create_table "ckeditor_assets", :force => true do |t|
    t.string   "data_file_name",                  :null => false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    :limit => 30
    t.string   "type",              :limit => 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], :name => "idx_ckeditor_assetable"
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], :name => "idx_ckeditor_assetable_type"

  create_table "complementary_exams", :force => true do |t|
    t.integer  "appointment_id"
    t.date     "data"
    t.text     "descricao_resultado"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
    t.string   "imagem_file_name"
    t.string   "imagem_content_type"
    t.integer  "imagem_file_size"
    t.datetime "imagem_updated_at"
    t.integer  "exame_id"
  end

  add_index "complementary_exams", ["appointment_id"], :name => "index_complementary_exams_on_appointment_id"
  add_index "complementary_exams", ["exame_id"], :name => "index_complementary_exams_on_exame_id"

  create_table "declarations", :force => true do |t|
    t.integer  "appointment_id"
    t.date     "dia"
    t.string   "local"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.string   "hora_inicio"
    t.string   "hora_termino"
    t.text     "anotacoes"
  end

  add_index "declarations", ["appointment_id"], :name => "index_declarations_on_appointment_id"

  create_table "events", :force => true do |t|
    t.integer  "patient_id"
    t.datetime "start_at"
    t.datetime "end_at"
    t.boolean  "all_day"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "events", ["patient_id"], :name => "index_events_on_patient_id"

  create_table "exame_categories", :force => true do |t|
    t.string   "nome",       :limit => 100
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "exames", :force => true do |t|
    t.integer  "exame_category_id"
    t.string   "nome"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
  end

  add_index "exames", ["exame_category_id"], :name => "index_exames_on_exame_category_id"

  create_table "firms", :force => true do |t|
    t.string   "cnpj"
    t.string   "razao_social"
    t.string   "nome_fantasia"
    t.string   "frente_trabalho"
    t.string   "cnae"
    t.string   "atividade"
    t.string   "risco"
    t.string   "endereco"
    t.string   "bairro"
    t.string   "cidade"
    t.string   "uf"
    t.string   "cep"
    t.string   "telefone"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "functions", :force => true do |t|
    t.string   "funcao"
    t.integer  "firm_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "functions", ["firm_id"], :name => "index_functions_on_firm_id"

  create_table "occupational_risks", :force => true do |t|
    t.integer  "aso_id"
    t.integer  "risk_id"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
    t.integer  "risk_category_id"
  end

  add_index "occupational_risks", ["aso_id"], :name => "index_occupational_risks_on_aso_id"
  add_index "occupational_risks", ["risk_category_id"], :name => "index_occupational_risks_on_risk_category_id"
  add_index "occupational_risks", ["risk_id"], :name => "index_occupational_risks_on_risk_id"

  create_table "patients", :force => true do |t|
    t.string   "matricula"
    t.string   "nome"
    t.string   "nome_mae"
    t.string   "sexo"
    t.string   "documento"
    t.integer  "firm_id"
    t.integer  "section_id"
    t.integer  "function_id"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.date     "data_nascimento"
    t.string   "tipo_documento"
  end

  add_index "patients", ["firm_id"], :name => "index_patients_on_firm_id"
  add_index "patients", ["function_id"], :name => "index_patients_on_function_id"
  add_index "patients", ["matricula", "data_nascimento", "firm_id"], :name => "index_patients_on_matricula_and_data_nascimento_and_firm_id"
  add_index "patients", ["section_id"], :name => "index_patients_on_section_id"

  create_table "receituarios", :force => true do |t|
    t.integer  "appointment_id"
    t.text     "prescricao"
    t.string   "local"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  add_index "receituarios", ["appointment_id"], :name => "index_receituarios_on_appointment_id"

  create_table "recibos", :force => true do |t|
    t.date     "data"
    t.integer  "patient_id"
    t.decimal  "valor"
    t.string   "valor_extenso"
    t.text     "referente"
    t.boolean  "pj"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "recibos", ["patient_id"], :name => "index_recibos_on_patient_id"

  create_table "records", :force => true do |t|
    t.integer  "patient_id"
    t.date     "data"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "records", ["patient_id"], :name => "index_records_on_patient_id"

  create_table "risk_categories", :force => true do |t|
    t.string   "nome"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "risks", :force => true do |t|
    t.integer  "risk_category_id"
    t.string   "nome_risco"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

  add_index "risks", ["risk_category_id"], :name => "index_risks_on_risk_category_id"

  create_table "sections", :force => true do |t|
    t.string   "secao"
    t.integer  "firm_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "sections", ["firm_id"], :name => "index_sections_on_firm_id"

  create_table "solic_exames", :force => true do |t|
    t.integer  "appointment_id"
    t.string   "local"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  add_index "solic_exames", ["appointment_id"], :name => "index_solic_exames_on_appointment_id"

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "nome"
    t.string   "login"
    t.string   "crm"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
