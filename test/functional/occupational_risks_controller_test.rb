require 'test_helper'

class OccupationalRisksControllerTest < ActionController::TestCase
  setup do
    @occupational_risk = occupational_risks(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:occupational_risks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create occupational_risk" do
    assert_difference('OccupationalRisk.count') do
      post :create, occupational_risk: { occupational_risk: @occupational_risk.occupational_risk }
    end

    assert_redirected_to occupational_risk_path(assigns(:occupational_risk))
  end

  test "should show occupational_risk" do
    get :show, id: @occupational_risk
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @occupational_risk
    assert_response :success
  end

  test "should update occupational_risk" do
    put :update, id: @occupational_risk, occupational_risk: { occupational_risk: @occupational_risk.occupational_risk }
    assert_redirected_to occupational_risk_path(assigns(:occupational_risk))
  end

  test "should destroy occupational_risk" do
    assert_difference('OccupationalRisk.count', -1) do
      delete :destroy, id: @occupational_risk
    end

    assert_redirected_to occupational_risks_path
  end
end
