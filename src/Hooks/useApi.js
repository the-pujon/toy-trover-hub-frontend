import { useState } from 'react';
import toast from "react-hot-toast"

const useApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const jwtToken = localStorage.getItem('access-token')

  const apiUrl = `${import.meta.env.VITE_BASE_URL}/api`;
console.log(import.meta.env.VITE_BASE_URL)

  const headers = {
    'Content-Type': 'application/json',
    ...(jwtToken && { Authorization: `Bearer ${jwtToken}` }),
  };

  const fetchData = async (url, method, body = null, loadingId) => {
    setLoading(loadingId);
    setError(null);
    let loadingToast

    try {
      if (method === 'PUT' || method === 'POST' || method === 'DELETE') {
         loadingToast = toast.loading('Wait...', { position: 'top-right' });
      }

      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'HTTP error');
      }

      const result = await response.json();
      setData(result);

      switch (method ) {
        case 'PUT':
          toast.dismiss(loadingToast.id);
          toast.success('Successfully Updated!', { position: 'top-right', duration: 2000 });
          break;

        case 'POST':
          toast.dismiss(loadingToast.id);
          toast.success('Successfully Created!', { position: 'top-right', duration: 2000 });
          break;

        case 'DELETE':
          toast.dismiss(loadingToast.id);
          toast.success('Successfully Deleted!', { position: 'top-right', duration: 2000 });
          break;
        default:
          break;
      }

      return result; // Return the response
    } catch (error) {
      setError(error.message || 'Something went wrong.');

      if (method === 'PUT' || method === 'POST' || method === 'DELETE') {
        toast.dismiss(loadingToast.id);
        toast.error(`${error.message}`, { position: 'top-right', duration: 5000 });
      }
      throw error; // Re-throw the error to propagate it to the calling component
    } finally {
      setLoading(false);
    }
  };



  const get = (endpoint, loadingId) => fetchData(`${apiUrl}/${endpoint}`, 'GET',null, loadingId);

  const post = (endpoint, body, loadingId) => fetchData(`${apiUrl}/${endpoint}`, 'POST', body,loadingId);

  const put = (endpoint, body, loadingId) => fetchData(`${apiUrl}/${endpoint}`, 'PUT', body,loadingId);

  const del = (endpoint, loadingId) => fetchData(`${apiUrl}/${endpoint}`, 'DELETE',null, loadingId);

  return {
    data,
    error,
    loading,
    get,
    post,
    put,
    del,
  };
};

export default useApi;
