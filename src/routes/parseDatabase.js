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
          const data = results.data;

          data.forEach(row => {
            row.score = 0;
            row.score += row.dancability * weights[0];
            row.score += row.energy * weights[1];
            row.score += row.speechiness * weights[2];
            row.score += row.acousticness * weights[3];
            row.score += row.instrumentalness * weights[4];
            row.score += row.liveness * weights[5];
            row.score += row.valence * weights[6];
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
