class TrieNode {
    constructor() {
      this.children = {};
      this.isEnd = false;
    }
  }
  
  export class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word.toLowerCase()) {
        if (!node.children[char]) node.children[char] = new TrieNode();
        node = node.children[char];
      }
      node.isEnd = true;
    }
  
    search(prefix) {
      let node = this.root;
      const results = [];
      for (const char of prefix.toLowerCase()) {
        if (!node.children[char]) return results;
        node = node.children[char];
      }
      this._findAllWords(node, prefix, results);
      return results;
    }
  
    _findAllWords(node, prefix, results) {
      if (node.isEnd) results.push(prefix);
      for (const char in node.children) {
        this._findAllWords(node.children[char], prefix + char, results);
      }
    }
  }