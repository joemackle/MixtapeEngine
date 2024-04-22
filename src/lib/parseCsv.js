import Papa from 'papaparse';
import { playlist } from '$lib/stores.js';

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
          // using a subset of 25k rows
          let data = results.data.splice(0, 25000);

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

          let editPlaylist = [{ songName: "", artist: "", track_id: "" }]; editPlaylist.length = 0;
          data.splice(0, 10).forEach(row => { editPlaylist.push({ songName: row.track_name, artist: row.artists, track_id: row.track_id }); })
          playlist.set(editPlaylist);

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
