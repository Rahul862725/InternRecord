class CommentsController < ApplicationController
  before_action :find_message 
  before_action :find_comment, only: [:update, :destroy, :edit]
  before_action :authenticate_user! 

    def create
        @comment = @message.comments.create(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            redirect_to message_path(@message)
        else
            redirect_to 'new'
        end
    end
    def edit
    end

    def update
        if(@comment.update(comment_params))
            redirect_to message_path(@message)
        else
            render 'edit'
        end
    end
    def destroy
       @comment.destroy
       redirect_to message_path(@message)
    end
    private
    def comment_params
        params.require(:comment).permit(:content)
    end

    def find_message
        @message = Message.find(params[:message_id])
    end

    def find_comment
        @comment =@message.comments.find(params[:id])
    end
end
