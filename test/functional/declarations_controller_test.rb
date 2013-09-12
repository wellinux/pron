require 'test_helper'

class DeclarationsControllerTest < ActionController::TestCase
  setup do
    @declaration = declarations(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:declarations)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create declaration" do
    assert_difference('Declaration.count') do
      post :create, declaration: {  }
    end

    assert_redirected_to declaration_path(assigns(:declaration))
  end

  test "should show declaration" do
    get :show, id: @declaration
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @declaration
    assert_response :success
  end

  test "should update declaration" do
    put :update, id: @declaration, declaration: {  }
    assert_redirected_to declaration_path(assigns(:declaration))
  end

  test "should destroy declaration" do
    assert_difference('Declaration.count', -1) do
      delete :destroy, id: @declaration
    end

    assert_redirected_to declarations_path
  end
end
