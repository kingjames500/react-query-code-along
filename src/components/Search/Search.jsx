import { useState } from "react";
import "./Search.css";
import useNewWord from "../Store/newWord";
function Search() {
  // State to hold the input word
  const [word, setWordInput] = useState("");

  // Custom hook to set the new word in the global state
  const inputWord = useNewWord((state) => state.setWord);

  // Function to handle the word search
  const handleWordSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    inputWord(word); // Update the global state with the input word
  };
  return (
    <div>
      <div className="form-group">
        <img src="" alt="" />
        <label htmlFor="word" className="label-form-group">
          <input
            type="text"
            className="input-form-group"
            placeholder="enter a word"
            value={word}
            onChange={(e) => setWordInput(e.target.value)}
          />
        </label>
        <label htmlFor="" className="form-group-label">
          <button onClick={handleWordSearch}>Search</button>
        </label>
      </div>
    </div>
  );
}

export default Search;
