require 'test_helper'

class FirmsControllerTest < ActionController::TestCase
  setup do
    @firm = firms(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:firms)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create firm" do
    assert_difference('Firm.count') do
      post :create, firm: { atividade: @firm.atividade, bairro: @firm.bairro, cep: @firm.cep, cidade: @firm.cidade, cnae: @firm.cnae, cnpj: @firm.cnpj, endereco: @firm.endereco, frente_trabalho: @firm.frente_trabalho, nome_fantasia: @firm.nome_fantasia, razao_social: @firm.razao_social, risco: @firm.risco, telefone: @firm.telefone, uf: @firm.uf }
    end

    assert_redirected_to firm_path(assigns(:firm))
  end

  test "should show firm" do
    get :show, id: @firm
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @firm
    assert_response :success
  end

  test "should update firm" do
    put :update, id: @firm, firm: { atividade: @firm.atividade, bairro: @firm.bairro, cep: @firm.cep, cidade: @firm.cidade, cnae: @firm.cnae, cnpj: @firm.cnpj, endereco: @firm.endereco, frente_trabalho: @firm.frente_trabalho, nome_fantasia: @firm.nome_fantasia, razao_social: @firm.razao_social, risco: @firm.risco, telefone: @firm.telefone, uf: @firm.uf }
    assert_redirected_to firm_path(assigns(:firm))
  end

  test "should destroy firm" do
    assert_difference('Firm.count', -1) do
      delete :destroy, id: @firm
    end

    assert_redirected_to firms_path
  end
end
