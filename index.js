function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

      const rankedLists = document.querySelectorAll('.ranked-list');
      const firstList = rankedLists[0];
      const secondList = rankedLists[1];
      
function increaseRankBy(n) {
  
}