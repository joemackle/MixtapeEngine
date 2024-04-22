import Papa from 'papaparse';

async function parseCsv(url, weights) {
  const startTime = performance.now();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch CSV: Server responded with " + response.status);
    }

    const csvText = await response.text();
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          let data = results.data;

          /* map: is an array method (takes in fucntion as parameter) that createa a new array.
          here we are taking in each element with "row", and taking in the 
          index of each element as "index". When we return, we are returning a new entery
          in the array. you can see here that each entery is an oject literal. key is 
          the index of the song && value is the score. the soring algorithms will sort the values. */

          // let data = results.data.map( (row, index) => {
          //   return {
          //     index: index,
          //     score: 0,
          //   }
          // });

          /* "data" array will look like this! Creating sorting algos based off this.
            [
              { index: 0, score: 6.7 },
              { index: 1, score: 4.3 },
              { index: 2, score: 5.9 }, ... 114,100 times
            ]
          */

          data.forEach(row => { // [ [1, 2, 3, 4, 5, 6, 7], [], [], ... 114,000] ]
            row.score = 0;
            row.score += row.danceability * weights.danceability;
            row.score += row.energy * weights.energy;
            row.score += row.speechiness * weights.speechiness;
            row.score += row.acousticness * weights.acousticness;
            row.score += row.instrumentalness * weights.instrumentalness;
            row.score += row.liveness * weights.liveness;
            row.score += row.valence * weights.valence;
          });

          data.sort((a, b) => b.score - a.score);

          const endTime = performance.now();
          const duration = (endTime - startTime).toFixed(2) + " ms";
          resolve({ data: data, duration: duration });
        },
        error: function (error) {
          reject(new Error("Parsing error: " + error.message));
        }
      });
    });
  } catch (error) {
    throw new Error("Error fetching or parsing CSV: " + error.message);
  }
}

export { parseCsv };