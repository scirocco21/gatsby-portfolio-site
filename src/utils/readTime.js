module.exports = {
  getWords(content) {
    const pattern = '\\w+';
    const reg = new RegExp(pattern, 'g');
    const removables = ['data', 'nodeType', 'value', 'text', 'paragraph', "type", "bold", "code", "heading",'content', 'marks',  'list', 'item', 'italic'];
    const words = JSON.stringify(content).match(reg);
    const countableWords = words.filter(word => removables.includes(word) === false);
    return countableWords
  },
  getReadTime(words) {
    const readTime = Math.ceil(words.length / 125);
    return `${readTime} - ${readTime + 1} minutes`;
  }
}
