import { useQuery } from "react-query";
import React from "react";

import useNewWord from "../Store/newWord";

/**
 * Results component fetches and displays the definition of a word using the Dictionary API.
 *
 * This component:
 * - Uses the `useNewWord` hook to get the current word from the state.
 * - Uses the `useQuery` hook from `react-query` to fetch the word's definition from the Dictionary API.
 * - Displays a loading message while the data is being fetched.
 * - Displays an error message if the fetch fails.
 * - Displays the word and its meanings if the fetch is successful.
 * - Displays a "No results found" message if no data is returned.
 *
 * @component
 * @example
 * return (
 *   <Results />
 * )
 */
function Results() {
  const word = useNewWord((state) => state.word);

  const { data, isLoading, error, isError } = useQuery(
    ["word", word],
    async () => {
      const response = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word,
      );
      const result = await response.json();
      return result;
    },
    {
      enabled: !!word,
    },
  );
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data && data.length > 0 ? (
        <div>
          <h2>{data[0].word}</h2>
          <div>
            {data[0].meanings.map((meaning, index) => (
              <div key={index}>
                <h4>{meaning.partOfSpeech}</h4>
                {meaning.definitions.map((definition, defIndex) => (
                  <div key={defIndex}>
                    <p>{definition.definition}</p>
                    {definition.example && <p>{definition.example}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ color: "orange" }}>No results found</div>
      )}
    </div>
  );
}

export default Results;
