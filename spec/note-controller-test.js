
  var assert = {
    isTrue: function(describe, assertionToCheck){
      if (!assertionToCheck){
        throw new Error("assertion failed: " + assertionToCheck + "is not truthy");
      } else{
        console.log('is true')
      }
    },

    isContained: function(describe, id, expected){
      if (document.getElementById(id) === expected){
        throw new Error(describe + "is not contained");
      } else{
        console.log('is true')
      }
    }
  };


  var noteController = new NoteController();

  function testsInstance(){
    if(typeof noteController !== 'object'){
      throw new Error("Help")
    } else {
      console.log("noteController is an instance of NoteController")
    }
  }


  function testSwitchHTML () {
    noteController.addNote('hi')
    if(noteController.switchHTML() !== `<ul><li><div><a href="#1">hi</a></div></li></ul>`){
      throw new Error('oh no!')  } else {
        console.log("note added as html")
      }
  }


  testSwitchHTML();
  testsInstance();
