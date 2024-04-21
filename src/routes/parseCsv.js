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

          data.sort((a, b) => b.score - a.score);

          const endTime = performance.now();
          const duration = (endTime - startTime).toFixed(2) + " ms";
          resolve({ data: data, duration: duration });
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
