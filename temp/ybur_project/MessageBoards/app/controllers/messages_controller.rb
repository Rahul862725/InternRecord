class MessagesController < ApplicationController
    before_action :find_message, only: [:edit, :update, :show, :destroy]
    before_action :authenticate_user!, except: [:index,:show]
    def index
        @message = Message.all
    end

    def new 
        @message = current_user.messages.build
    end
    
   
    def create
        @message = current_user.messages.build(message_params)
        if @message.save
            redirect_to  root_path
        else
            render 'new'
        end
    end

    def show 
         
    end

    def edit
      
    end

    def update
       if @message.update(message_params)
        redirect_to message_path
       else
        redirect_to root_path
       end
    end

    def destroy
        @message.destroy
        redirect_to root_path
    end
    
    private
    def message_params
        params.require(:message).permit(:title, :description)
    end
    def find_message
        @message = Message.find(params[:id])
    end
end
