import { create } from "zustand";

/**
 * A module that manages a word state.
 *
 * @module newWord
 * @param {Function} set - A function to update the state.
 * @returns {Object} An object with properties and methods to manage the word state.
 * @property {string} word - The current word state.
 * @property {Function} setWord - A function to update the word state.
 * @function setWord
 * @param {string} wordNew - The new word to set.
 * @description Updates the word state if the new word is not an empty string or whitespace.
 */
const newWord = function (set) {
  return {
    word: "",

    setWord: function (wordNew) {
      if (state.word === " ") return;
      if (state.word.trim() === " ") return;

      set(function (state) {
        return {
          word: wordNew,
        };
      });
    },
  };
};

const useNewWord = create(newWord);

export default useNewWord;
