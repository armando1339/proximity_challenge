class SessionsController < ApplicationController

  def show
    @user = User.find params.fetch(:id)
  end

  def new; end

  def create
    @user = User.find_by email: session_params.fetch(:email)

    if @user&.valid_password? session_params.fetch(:password)
      session[:user_id] = @user.id

      redirect_to session_url(@user), notice: "Session was successfully created."
    else
      redirect_to new_session_url, notice: "Email and Password don't match."
    end
  end

  def destroy
    session.delete(:user_id)

    redirect_to new_session_url, notice: "Session was successfully destroyed."
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
