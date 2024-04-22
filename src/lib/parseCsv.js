import Papa from 'papaparse';

async function parseCsv(url, weights, sortingAlgorithm) {
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
        complete: function(results) {
          let data = results.data;

          data.forEach(row => {
            row.score = 0;
            row.score += row.danceability * weights.danceability;
            row.score += row.energy * weights.energy;
            row.score += row.speechiness * weights.speechiness;
            row.score += row.acousticness * weights.acousticness;
            row.score += row.instrumentalness * weights.instrumentalness;
            row.score += row.liveness * weights.liveness;
            row.score += row.valence * weights.valence;
          });

          sortingAlgorithm(data);

          const endTime = performance.now();
          const duration = ((endTime - startTime) * 0.001).toFixed(2) + " s";
          resolve({ data: data.splice(0, 10), duration: duration });
        },
        error: function(error) {
          reject(new Error("Parsing error: " + error.message));
        }
      });
    });
  } catch (error) {
    throw new Error("Error fetching or parsing CSV: " + error.message);
  }
}

export { parseCsv };
