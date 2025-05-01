const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

/**
 * 
 * @param {Object} filters - { query, artistOrCulture, medium, title }
 */
export async function searchArtworks({ query = "", artistOrCulture = "", medium = "", title = "" }) {
  let searchUrl = `${BASE_URL}/search?hasImages=true`;

  if (query) searchUrl += `&q=${encodeURIComponent(query)}`;
  if (artistOrCulture) searchUrl += `&artistOrCulture=${encodeURIComponent(artistOrCulture)}`;
//   if (medium) searchUrl += `&medium=${encodeURIComponent(medium)}`;
  if (title) searchUrl += `&title=true`;

  try {
    const res = await fetch(searchUrl);
    const data = await res.json();

    const objectIDs = data.objectIDs?.slice(0, 20) || [];

    const artworks = await Promise.all(
      objectIDs.map(async (id) => {
        const detailRes = await fetch(`${BASE_URL}/objects/${id}`);
        return await detailRes.json();
      })
    );

    // filter added for valid images -- allows for artworks who HAVE and image to be displayed
    // otherwise no
    return artworks.filter((art) => art.primaryImageSmall);
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}

/**
 *  this will show random artworks using objectIDs
 * @param {number} count - number of random artworks to return
 */
export async function fetchRandomArtworks(count = 9) {
  try {
    const res = await fetch(`${BASE_URL}/objects`);
    const data = await res.json();
    const allIDs = data.objectIDs;
    const randomIDs = [];

    while (randomIDs.length < count && allIDs.length > 0) {
      const randomIndex = Math.floor(Math.random() * allIDs.length);
      const id = allIDs[randomIndex];
      if (!randomIDs.includes(id)) randomIDs.push(id);
    }

    const artworks = await Promise.all(
      randomIDs.map(async (id) => {
        const res = await fetch(`${BASE_URL}/objects/${id}`);
        return await res.json();
      })
    );

    // filter for artworks that include images and names ( maybe not names )
    return artworks.filter(
        (art) => art.primaryImageSmall);
  } catch (error) {
    console.error("Random fetch error:", error);
    return [];
  }
}

/**
 * fetch detailed info about a single artwork by object ID
 * @param {number} id - Met Museum object ID
 */
export async function fetchArtworkById(id) {
  try {
    const res = await fetch(`${BASE_URL}/objects/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch single artwork error:", error);
    return null;
  }
}

export async function fetchWikidataDescription(wikidataURL) {
    if (!wikidataURL) return null;
  
    const entityId = wikidataURL.split("/").pop(); // e.g., Q18338475
    const apiUrl = `https://www.wikidata.org/wiki/Special:EntityData/${entityId}.json`;
  
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
  
      const entity = data.entities[entityId];
      const description = entity?.descriptions?.en?.value;
  
      return description || null;
    } catch (error) {
      console.error("Wikidata fetch error:", error);
      return null;
    }
  }
  