require 'test_helper'

class ReceituariosControllerTest < ActionController::TestCase
  setup do
    @receituario = receituarios(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:receituarios)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create receituario" do
    assert_difference('Receituario.count') do
      post :create, receituario: { local: @receituario.local, prescricao: @receituario.prescricao }
    end

    assert_redirected_to receituario_path(assigns(:receituario))
  end

  test "should show receituario" do
    get :show, id: @receituario
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @receituario
    assert_response :success
  end

  test "should update receituario" do
    put :update, id: @receituario, receituario: { local: @receituario.local, prescricao: @receituario.prescricao }
    assert_redirected_to receituario_path(assigns(:receituario))
  end

  test "should destroy receituario" do
    assert_difference('Receituario.count', -1) do
      delete :destroy, id: @receituario
    end

    assert_redirected_to receituarios_path
  end
end
