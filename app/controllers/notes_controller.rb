class NotesController < ApplicationController

  def index
    @notes = Note.all
    render 'notes/index.json.jbuilder'
    # render json: @notes, status: :ok
  end

  def create
    @note = Note.create!(note_params)
    render json: @note, stauts: :ok
    #fuck around with the render part i feel like i never really got that
  end

  private

  def note_params
    params.require(:note).permit(:text)
  end

end
