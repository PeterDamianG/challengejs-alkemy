/** @module Hooks */
import { useState, useEffect } from 'react';
/**
 * useFetch Hook - Hooks to fetching data from externals origins.
 * @name useFetch
 * @async
 * @function useFetch
 * @param {string} url - URL to fetching.
 * @param {object} [options=null] - Header and/or Body to set POST/PATCH/PUT.
 * @example
 * const { response, error, loading } = useFetch('http://time.com/api/v1/argentina');
 * if (loading) {
 *   return <h4>LOADING</h4>
 * }
 * if (error) {
 *   return <h4>ERROR</h4>
 * }
 * if (response) {
 *   return <p>Argentine have UTC-5</p>
 * }
 * @returns {Promise} Object Promise with four attributes {error, loading, response}
 */
const useFetch = (url, options = null) => {
  // States.
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  // Effect to set collaterals.
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, { ...options, signal });
        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
    return function cleanup() {
      abortController.abort();
    };
  }, []);
  // Return Object.
  return {
    response,
    error,
    loading,
  };
};

export default useFetch;
