(function(exports){

  function ViewList(list){
    this.viewlist = list
    console.log(this.viewlist);
  };

  ViewList.prototype.stringtoHTML = function(string){
    return "<ul><li><div>" + string + "</div></li></ul>"
  };

  ViewList.prototype.printlist = function(){
    var final_list = this.viewlist.list.map(function(note){
    return note.text}).join(",")
    return this.stringtoHTML(final_list);
    console.log(final_list);
  };



exports.ViewList = ViewList;
})(this);
