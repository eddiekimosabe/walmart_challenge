class V1::ItemsController < ApplicationController
	respond_to :json

	def index
	  respond_with Item.order(name: :DESC)
	end

	def show
	  respond_with Item.find(params[:id])
	end

	def create
	  respond_with :api, Item.create(form_params)
	end

	def destroy
	  respond_with Item.destroy(params[:id])
	end

	def update
	  item = Item.find(params['id'])
	  item.update(form_params)
	  respond_with Item, json: item
	end

	private
	def form_params
	  params.require(:item).permit(:id, :name)
	end
end