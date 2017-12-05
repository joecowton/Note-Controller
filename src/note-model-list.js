function NoteList(){
  this.list = []
}

NoteList.prototype = {
  saveList: function(note){
    this.list.push(note)
    return this.list
  }

}
