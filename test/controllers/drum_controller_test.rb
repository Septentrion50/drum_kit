require 'test_helper'

class DrumControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get drum_index_url
    assert_response :success
  end

end
