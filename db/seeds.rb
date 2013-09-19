# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#==RISCOS OCUPACIONAIS==#

RiskCategory.create(:nome=>"Físicos")		#risk_category_id = 1
RiskCategory.create(:nome=>"Químicos")		#risk_category_id = 2
RiskCategory.create(:nome=>"Biológicos")	#risk_category_id = 3
RiskCategory.create(:nome=>"Mecânicos")		#risk_category_id = 4
RiskCategory.create(:nome=>"Ergonômicos")	#risk_category_id = 5

#Riscos Físicos
Risk.create(:risk_category_id=>1,:nome_risco=>"Ruído")
Risk.create(:risk_category_id=>1,:nome_risco=>"Radiação Ionizante")
Risk.create(:risk_category_id=>1,:nome_risco=>"Radiação Ionizante")
Risk.create(:risk_category_id=>1,:nome_risco=>"Radiação Não-ionizante")
Risk.create(:risk_category_id=>1,:nome_risco=>"Vibrações")
Risk.create(:risk_category_id=>1,:nome_risco=>"Frio")
Risk.create(:risk_category_id=>1,:nome_risco=>"Calor")
Risk.create(:risk_category_id=>1,:nome_risco=>"Umidade")
Risk.create(:risk_category_id=>1,:nome_risco=>"Pressões Anormais")
Risk.create(:risk_category_id=>1,:nome_risco=>"Radiofrequência")

#Riscos Químicos
Risk.create(:risk_category_id=>2,:nome_risco=>"Poeiras")
Risk.create(:risk_category_id=>2,:nome_risco=>"Fumos Metálicos")
Risk.create(:risk_category_id=>2,:nome_risco=>"Névoas")
Risk.create(:risk_category_id=>2,:nome_risco=>"Neblinas")
Risk.create(:risk_category_id=>2,:nome_risco=>"Gases")
Risk.create(:risk_category_id=>2,:nome_risco=>"Vapores")
Risk.create(:risk_category_id=>2,:nome_risco=>"Defensivos Agrícolas")
Risk.create(:risk_category_id=>2,:nome_risco=>"Subs. Compostas")
Risk.create(:risk_category_id=>2,:nome_risco=>"Produtos Químicos")
Risk.create(:risk_category_id=>2,:nome_risco=>"Óleos / Graxas / Solvestes")

#Riscos Biológicos
Risk.create(:risk_category_id=>3,:nome_risco=>"Vírus")
Risk.create(:risk_category_id=>3,:nome_risco=>"Fungos")
Risk.create(:risk_category_id=>3,:nome_risco=>"Bactérias")
Risk.create(:risk_category_id=>3,:nome_risco=>"Parasitas")
Risk.create(:risk_category_id=>3,:nome_risco=>"Protosoários")

#Riscos Mecânicos
Risk.create(:risk_category_id=>4,:nome_risco=>"Trabalho em Altura")
Risk.create(:risk_category_id=>4,:nome_risco=>"Ferramentas Inadequadas")
Risk.create(:risk_category_id=>4,:nome_risco=>"Máquinas / Equipamentos sem Proteção")
Risk.create(:risk_category_id=>4,:nome_risco=>"Eletricidade")
Risk.create(:risk_category_id=>4,:nome_risco=>"Iluninação Inadequada")
Risk.create(:risk_category_id=>4,:nome_risco=>"Probabilidade de Incêncio/Explosão")
Risk.create(:risk_category_id=>4,:nome_risco=>"Queda de Nível Diferente")
Risk.create(:risk_category_id=>4,:nome_risco=>"Queda de Materiais")
Risk.create(:risk_category_id=>4,:nome_risco=>"Arranjo Físico Inadequado")
Risk.create(:risk_category_id=>4,:nome_risco=>"Armazenamento Inadequado")
Risk.create(:risk_category_id=>4,:nome_risco=>"Animais Peçonhentos/insetos")

#Riscos Ergonômicos
Risk.create(:risk_category_id=>5,:nome_risco=>"Movimentos Repetitivos")
Risk.create(:risk_category_id=>5,:nome_risco=>"Postura Inadequada")
Risk.create(:risk_category_id=>5,:nome_risco=>"Levantamento/Transporte manual de Pesos")
Risk.create(:risk_category_id=>5,:nome_risco=>"Exigência de Produtividade")
Risk.create(:risk_category_id=>5,:nome_risco=>"Rítmo Excessivo")
Risk.create(:risk_category_id=>5,:nome_risco=>"Trabalho em turno e Noturno")
Risk.create(:risk_category_id=>5,:nome_risco=>"Jornada Prolongada")
Risk.create(:risk_category_id=>5,:nome_risco=>"Monotonia e Repetitividade")
Risk.create(:risk_category_id=>5,:nome_risco=>"Mobiliário Inadequado")
Risk.create(:risk_category_id=>5,:nome_risco=>"Esforço Físico Intenso")

#==EXAMES==#

ExameCategory.create(:nome=>"Laboratoriais")		#exame_category_id = 1
ExameCategory.create(:nome=>"Imagens")				#exame_category_id = 2
ExameCategory.create(:nome=>"Provas Funcionais")	#exame_category_id = 3

#Esames Laboratoriais
Exame.create(:exame_category_id=>1,:nome=>"Isento de Exames Complementares")
Exame.create(:exame_category_id=>1,:nome=>"Hemograma Completo")
Exame.create(:exame_category_id=>1,:nome=>"Colinesterase Plasmática")
Exame.create(:exame_category_id=>1,:nome=>"Sumário de Urina")
Exame.create(:exame_category_id=>1,:nome=>"Parasitológico de Fezes")
Exame.create(:exame_category_id=>1,:nome=>"Glicemia de Jejum")
Exame.create(:exame_category_id=>1,:nome=>"Contagem de Plaquetas")
Exame.create(:exame_category_id=>1,:nome=>"Colesterol Total")
Exame.create(:exame_category_id=>1,:nome=>"HDL Colesterol")
Exame.create(:exame_category_id=>1,:nome=>"LDL Colesterol")
Exame.create(:exame_category_id=>1,:nome=>"Triglicerídeos")
Exame.create(:exame_category_id=>1,:nome=>"HB Glicosada")
Exame.create(:exame_category_id=>1,:nome=>"Ácido Úrico")
Exame.create(:exame_category_id=>1,:nome=>"Uréia")
Exame.create(:exame_category_id=>1,:nome=>"Creatinina Sérica")
Exame.create(:exame_category_id=>1,:nome=>"Fosfatase Alcalina")
Exame.create(:exame_category_id=>1,:nome=>"Bilirrubinas")
Exame.create(:exame_category_id=>1,:nome=>"TGO")
Exame.create(:exame_category_id=>1,:nome=>"TGP")
Exame.create(:exame_category_id=>1,:nome=>"Urocultura c/ Antibiograma")
Exame.create(:exame_category_id=>1,:nome=>"Prova de Atividades Reumáticas")
Exame.create(:exame_category_id=>1,:nome=>"PSA Total")
Exame.create(:exame_category_id=>1,:nome=>"Metahemoglobina urina/sangue")
Exame.create(:exame_category_id=>1,:nome=>"Zincoprotoporfirina")
Exame.create(:exame_category_id=>1,:nome=>"Chumbo na urina")
Exame.create(:exame_category_id=>1,:nome=>"Cromo urina")
Exame.create(:exame_category_id=>1,:nome=>"Carboxihemoglobina no Sangue")
Exame.create(:exame_category_id=>1,:nome=>"Acido Mandélico na urina")
Exame.create(:exame_category_id=>1,:nome=>"Fenol na urina")
Exame.create(:exame_category_id=>1,:nome=>"Fluoreto na Urina")
Exame.create(:exame_category_id=>1,:nome=>"Mercúrio na Urina")
Exame.create(:exame_category_id=>1,:nome=>"Metahemoglobina no sangue")
Exame.create(:exame_category_id=>1,:nome=>"Acido Hipurico na urina")
Exame.create(:exame_category_id=>1,:nome=>"Acidometilhipurico na urina")