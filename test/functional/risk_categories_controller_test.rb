require 'test_helper'

class RiskCategoriesControllerTest < ActionController::TestCase
  setup do
    @risk_category = risk_categories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:risk_categories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create risk_category" do
    assert_difference('RiskCategory.count') do
      post :create, risk_category: { nome: @risk_category.nome }
    end

    assert_redirected_to risk_category_path(assigns(:risk_category))
  end

  test "should show risk_category" do
    get :show, id: @risk_category
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @risk_category
    assert_response :success
  end

  test "should update risk_category" do
    put :update, id: @risk_category, risk_category: { nome: @risk_category.nome }
    assert_redirected_to risk_category_path(assigns(:risk_category))
  end

  test "should destroy risk_category" do
    assert_difference('RiskCategory.count', -1) do
      delete :destroy, id: @risk_category
    end

    assert_redirected_to risk_categories_path
  end
end
