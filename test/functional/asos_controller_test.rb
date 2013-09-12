require 'test_helper'

class AsosControllerTest < ActionController::TestCase
  setup do
    @aso = asos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:asos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create aso" do
    assert_difference('Aso.count') do
      post :create, aso: { data: @aso.data }
    end

    assert_redirected_to aso_path(assigns(:aso))
  end

  test "should show aso" do
    get :show, id: @aso
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @aso
    assert_response :success
  end

  test "should update aso" do
    put :update, id: @aso, aso: { data: @aso.data }
    assert_redirected_to aso_path(assigns(:aso))
  end

  test "should destroy aso" do
    assert_difference('Aso.count', -1) do
      delete :destroy, id: @aso
    end

    assert_redirected_to asos_path
  end
end
