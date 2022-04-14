class User < ApplicationRecord

  def valid_password?(user_password)
    password.eql? user_password
  end
end
