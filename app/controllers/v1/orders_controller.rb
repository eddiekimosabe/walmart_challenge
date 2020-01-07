class V1::OrdersController < ApplicationController
	respond_to :json

	def index
	  respond_with Order.order(id: :DESC)
	end

	def show
	  respond_with Order.find(params[:id])
	end

	def create
	  respond_with :api, Order.create(form_params)
	end

	def destroy
	  respond_with Order.destroy(params[:id])
	end

	def update
	  order = Order.find(params['id'])
	  order.update(form_params)
	  respond_with Order, json: order
	end

	private

	def form_params
	  params.require(:order).permit(:id)
	end
end