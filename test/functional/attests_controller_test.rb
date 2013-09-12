require 'test_helper'

class AttestsControllerTest < ActionController::TestCase
  setup do
    @attest = attests(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:attests)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create attest" do
    assert_difference('Attest.count') do
      post :create, attest: { data: @attest.data, local: @attest.local, periodo: @attest.periodo }
    end

    assert_redirected_to attest_path(assigns(:attest))
  end

  test "should show attest" do
    get :show, id: @attest
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @attest
    assert_response :success
  end

  test "should update attest" do
    put :update, id: @attest, attest: { data: @attest.data, local: @attest.local, periodo: @attest.periodo }
    assert_redirected_to attest_path(assigns(:attest))
  end

  test "should destroy attest" do
    assert_difference('Attest.count', -1) do
      delete :destroy, id: @attest
    end

    assert_redirected_to attests_path
  end
end
