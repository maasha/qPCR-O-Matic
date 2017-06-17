const os = require('os');
const path = require('path');
const fs = require('fs');

/**
 * Max number of elements on the history array.
 * @type {Number}
 */
const MAX_LENGTH = 50;

/**
 * Method that returns the path to the history file.
 * @return {String} Full path to the history file.
 */
function historyFilePath() {
  const homedir = os.homedir();
  return path.join(homedir, '.rpncalc_history.json');
}

/**
 * Class for loading and saving history and supporting undo.
 * @type {Class}
 */
class History {
  /**
   * Constructor for History.
   * @param {Array} history History array.
   * @param {Number} maxLength Maximum length of history ary.
   */
  constructor(history, maxLength) {
    /**
     * Array for storing a list of stacks each representing a historic state.
     * @type {Array}
     */
    this.ary = history || [];
    this.maxLength = maxLength || MAX_LENGTH;
  }

  /**
   * Return last element on the history array or an empty array if empty
   * history.
   * @return {Object} History array element.
   */
  last() {
    if (this.ary.length === 0) {
      return [];
    }

    return this.ary[this.ary.length - 1];
  }

  /**
   * Pop and return the last element from the history array. Return empty array
   * if no elements.
   * @return {Object} History array element.
   */
  pop() {
    if (this.ary.length === 0) {
      return [];
    }

    return this.ary.pop();
  }

  /**
   * Push a given element onto the history array.
   * @param  {Stack} elem Stack element.
   * @return {this}
   */
  push(elem) {
    this.ary.push(elem);

    if (this.ary.length > this.maxLength) {
      this.ary.shift();
    }

    return this;
  }

  /**
   * Load the history from the history file.
   * @return {this}
   */
  load() {
    const file = historyFilePath();

    if (!fs.existsSync(file)) {
      return this;
    }

    const json = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(json);

    this.ary = data;

    return this;
  }

  /**
   * Save the history in JSON format to the history file.
   * @return {this}
   */
  save() {
    if (this.ary.length === 0) {
      return this;
    }

    const json = JSON.stringify(this.ary, null, 2);

    fs.writeFile(historyFilePath(), json, (err) => {
      if (err) {
        console.log(err);
      }
    });

    return this;
  }
}

export default History;
