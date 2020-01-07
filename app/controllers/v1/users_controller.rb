class V1::UsersController < ApplicationController
	respond_to :json

	def index
	  respond_with User.order(name: :DESC)
	end

	def show
	  respond_with User.find(params[:id])
	end

	def create
		binding.pry
	  respond_with :api, User.create(form_params)
	end

	def destroy
	  respond_with User.destroy(params[:id])
	end

	def update
	  user = User.find(params['id'])
	  user.update(form_params)
	  respond_with User, json: user
	end

	private

	def form_params
	  params.require(:form).permit(
	    :name
	  )
	end
end