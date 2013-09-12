class CreateFirms < ActiveRecord::Migration
  def change
    create_table :firms, :force => true do |t|
      t.string :cnpj
      t.string :razao_social
      t.string :nome_fantasia
      t.string :frente_trabalho
      t.string :cnae
      t.string :atividade
      t.string :risco
      t.string :endereco
      t.string :bairro
      t.string :cidade
      t.string :uf
      t.string :cep
      t.string :telefone

      t.timestamps
    end
  end
end
