require 'test_helper'

class ExameCategoriesControllerTest < ActionController::TestCase
  setup do
    @exame_category = exame_categories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:exame_categories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create exame_category" do
    assert_difference('ExameCategory.count') do
      post :create, exame_category: { nome: @exame_category.nome }
    end

    assert_redirected_to exame_category_path(assigns(:exame_category))
  end

  test "should show exame_category" do
    get :show, id: @exame_category
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @exame_category
    assert_response :success
  end

  test "should update exame_category" do
    put :update, id: @exame_category, exame_category: { nome: @exame_category.nome }
    assert_redirected_to exame_category_path(assigns(:exame_category))
  end

  test "should destroy exame_category" do
    assert_difference('ExameCategory.count', -1) do
      delete :destroy, id: @exame_category
    end

    assert_redirected_to exame_categories_path
  end
end
