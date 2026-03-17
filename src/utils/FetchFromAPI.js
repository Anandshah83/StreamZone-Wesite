import axios from 'axios';

// Vite only exposes env vars prefixed with VITE_.
// Configure values in .env (or .env.local) using these keys.
export const BASE_URL = import.meta.env.VITE_RAPIDAPI_BASE_URL || 'https://www.googleapis.com/youtube/v3';

const options = {
  params: {
    maxResults: 50,
    key: import.meta.env.VITE_RAPIDAPI_KEY || '',
  },
};

export const fetchFromAPI = async (url) => {
  if (!options.params.key) {
    console.warn('FetchFromAPI is missing a RapidAPI key. Set VITE_RAPIDAPI_KEY in your .env file.');
  }

  try {
    const fullUrl = `${BASE_URL}/${url}`;
    const { data } = await axios.get(fullUrl, options);

    // Debug help: show when the API returns no items.
    console.debug('FetchFromAPI:', fullUrl, '->', (data?.items?.length ?? 'no items'));

    return { items: data.items ?? [], error: null };
  } catch (error) {
    const status = error?.response?.status;
    const message = error?.response?.data?.message || error.message;

    console.error('FetchFromAPI error:', { status, message, url, error });

    // If the API is blocked by subscription/rate limits, return demo data so the UI still renders.
    const { demoVideoItems } = await import('./constants');

    return {
      items: demoVideoItems,
      error: null, // Error ko hata diya taaki API fail hone par UI crash na ho aur Demo Videos dikhe
    };
  }
};
