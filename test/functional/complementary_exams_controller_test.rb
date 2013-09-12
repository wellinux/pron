require 'test_helper'

class ComplementaryExamsControllerTest < ActionController::TestCase
  setup do
    @complementary_exam = complementary_exams(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:complementary_exams)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create complementary_exam" do
    assert_difference('ComplementaryExam.count') do
      post :create, complementary_exam: { data: @complementary_exam.data, descricao_resultado: @complementary_exam.descricao_resultado, imagem: @complementary_exam.imagem }
    end

    assert_redirected_to complementary_exam_path(assigns(:complementary_exam))
  end

  test "should show complementary_exam" do
    get :show, id: @complementary_exam
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @complementary_exam
    assert_response :success
  end

  test "should update complementary_exam" do
    put :update, id: @complementary_exam, complementary_exam: { data: @complementary_exam.data, descricao_resultado: @complementary_exam.descricao_resultado, imagem: @complementary_exam.imagem }
    assert_redirected_to complementary_exam_path(assigns(:complementary_exam))
  end

  test "should destroy complementary_exam" do
    assert_difference('ComplementaryExam.count', -1) do
      delete :destroy, id: @complementary_exam
    end

    assert_redirected_to complementary_exams_path
  end
end
