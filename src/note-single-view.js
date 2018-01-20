(function(exports) {

  function NoteSingleView(note){
    this.note = note;
  };

  NoteSingleView.prototype.renderHTML = function () {
    return `<div>${this.note.text()}</div>`;
  };

  exports.NoteSingleView = NoteSingleView;

})(this);
