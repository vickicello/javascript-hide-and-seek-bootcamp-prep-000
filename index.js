function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

      
function increaseRankBy(n) {
      var rankedList = document.querySelectorAll('.ranked-list');
      for (let i = 0; i < rankedList.length; i++) {
        let children = rankedList[i].children;
      for (let i = 0; i < children.length; i++) {
        children[a].innerHTML = parseInt(children[a].innerHTML) + n;
      }
    }
}