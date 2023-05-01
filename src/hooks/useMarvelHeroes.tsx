import { useState, useEffect } from 'react';
import { MarvelHeroModel } from '../models/MarvelHeroModel';
import { api } from '../services/api';
import { ComicModel } from '../models/ComicModel';
import { AxiosError, AxiosResponse } from 'axios';

export const LIMIT = 4;

export function useMarvelHeroes() {
  const [heroes, setHeroes] = useState<MarvelHeroModel[]>([]);
  const [comics, setComics] = useState<ComicModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [searchResult, setSearchResult] = useState<MarvelHeroModel[]>([]);
  const [filterTimeout, setFilterTimeout] = useState<any>(null);
  const [apiError, setError] = useState<AxiosError | null>(null);


  const getMarvelHeroes = async () => {
    try {
      setLoading(true);

      const response = await api.get('/characters', {
        params: {
          limit: LIMIT,
          offset: offset,
        },
      });
      setHeroes(response.data.data.results);
      setTotal(response.data.data.total);

    } catch (error) {
      const axiosError = error as AxiosError;
      if (process.env.NODE_ENV !== 'test') {
        console.error(axiosError.response?.data);
      }
      setError(axiosError);
      setHeroes([]);
    } finally {
      setLoading(false);
    }
  };

  const searchMarvelHeroes = async (text: string) => {
    if (text.length < 1) {
      setSearchResult([]);
      return;
    }
    clearTimeout(filterTimeout);
    try {
        setLoading(true);
        setFilterTimeout(setTimeout(async () => {

          const response = await api.get('/characters', {
            params: {
              nameStartsWith: text,
              limit: 10,
            }
          });
          setSearchResult(response.data.data.results);
          setLoading(false);
        }, 1000));
    } catch (error) {
      const axiosError = error as AxiosError;
      if (process.env.NODE_ENV !== 'test') {
        console.error(axiosError.response?.data);
      }
      setError(axiosError);
      setLoading(false);
    }  
  };

  const getHeroComics = async (id: string) => {
    try {
      setLoading(true);
      const response = await api.get(`characters/${id}/comics`, {
        params: {
          limit: 100,
        }
      });
      setComics(response.data.data.results);
    }
    catch (error) {
      const axiosError = error as AxiosError;
      if (process.env.NODE_ENV !== 'test') {
        console.error(axiosError.response?.data);
      }
      setError(axiosError);
    } finally {
      setLoading(false);
    }
  }

  const resetError = () => {
    setError(null);
    getMarvelHeroes();
  }

  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      getMarvelHeroes();
    }
  }, [offset]);

  return {
    heroes,
    loading,
    offset,
    page,
    searchResult,
    apiError,
    total,
    comics,
    setOffset,
    getMarvelHeroes,
    searchMarvelHeroes,
    setPage,
    getHeroComics,
    resetError
  };
}
