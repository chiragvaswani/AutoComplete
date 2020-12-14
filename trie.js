function makeNode(ch) {
  this.ch = ch;
  this.isTerminal = false;
  this.map = {}; // store a mapping from character
  this.words = []; // list of words
}

function add(str, i, root) {
  if (i === str.length) {
    root.isTerminal = true;
    return;
  }

  if (!root.map[str[i]])
    // check if the character we want to add already exists
    root.map[str[i]] = new makeNode(str[i]);

  root.words.push(str); // add the word to the list
  add(str, i + 1, root.map[str[i]]);
}

function search(str, i, root) {
  if (i === str.length) return root.words
  if (!root.map[str[i]]) return []
  return search(str, i+, root.map[str[i]])
}
