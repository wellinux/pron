require 'test_helper'

class SolicExamesControllerTest < ActionController::TestCase
  setup do
    @solic_exame = solic_exames(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:solic_exames)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create solic_exame" do
    assert_difference('SolicExame.count') do
      post :create, solic_exame: { local: @solic_exame.local }
    end

    assert_redirected_to solic_exame_path(assigns(:solic_exame))
  end

  test "should show solic_exame" do
    get :show, id: @solic_exame
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @solic_exame
    assert_response :success
  end

  test "should update solic_exame" do
    put :update, id: @solic_exame, solic_exame: { local: @solic_exame.local }
    assert_redirected_to solic_exame_path(assigns(:solic_exame))
  end

  test "should destroy solic_exame" do
    assert_difference('SolicExame.count', -1) do
      delete :destroy, id: @solic_exame
    end

    assert_redirected_to solic_exames_path
  end
end
