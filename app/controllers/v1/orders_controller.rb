class V1::OrdersController < ApplicationController
	respond_to :json

	def index
		@orders = Order.order(id: :DESC)
		@orders_hash_array = []
		@orders.each do |order|
			order_hash = order.attributes
			order_hash.merge!(items: order.items)
			@orders_hash_array << order_hash
		end
	  respond_with @orders_hash_array
	end

	def show
		order = Order.find(params[:id])
		order_hash = order.attributes
		order_hash.merge!(items: order.items)
	  respond_with order_hash
	end

	def create
	  begin
	  	ActiveRecord::Base.transaction do 
	  		order = Order.create!(user_id: params[:user_id])
	  		form_params[:items].each do |item|
	  			order.items << Item.find(item[:id])
	  		end
	  		order.save!
	  	end
	  	# render json: { status: 200, order: order }.to_json
	  rescue ActiveRecord::RecordInvalid => exception 
	  	# render json: { error: exception.message, status: :internal_server_error }.to_json
	  end
	end

	def destroy
	  respond_with Order.destroy(params[:id])
	end

	def update
		binding.pry
		begin
	  	@order = Order.find(params[:id])
	  	#update userId if necessary 
	  	#update items
	  	@order.items.clear 
	  	form_params[:items].each do |item|
	  		@order.items << Item.find(item[:id])
	  	end
	  	@order.save!
	  	respond_with Order, json: @order
	  rescue ActiveRecord::RecordInvalid => exception
		end

	end

	private

	def form_params
	  params.require(:form).permit(:items => [:id, :name])
	end
end