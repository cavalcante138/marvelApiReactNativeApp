import { renderHook, act } from '@testing-library/react-hooks';
import { LIMIT, useMarvelHeroes } from './useMarvelHeroes';
import { api } from '../services/api';
import { MarvelHeroModel } from '../models/MarvelHeroModel';
import { ComicModel } from '../models/ComicModel';

jest.mock('../services/api');

const mockedApi = api as jest.Mocked<typeof api>;

const mockHeroesData: MarvelHeroModel[] = [
    {
    id: 1017100,
    name: "A-Bomb (HAS)",
    description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/523bc4b9cb581",
      extension: "jpg"
    }
    },
    {id: 1009144,
    name: "A.I.M.",
    description: "AIM is a terrorist organization bent on destroying the world.",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
      extension: "jpg"
    }
    },
    {id: 1010699,
    name: "Aaron Stack",
    description: "",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      extension: "jpg"
    }
    },
    {id: 1009146,
    name: "Abomination (Emil Blonsky)",
    description: "Formerly known as Emil Blonsky, a spy of Soviet Yugoslav origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
      extension: "jpg"
    }
    },
]

const mockComicsData: ComicModel[] = [
  {
    id: 1,
    title: "Spider man 0",
    description: "First Spider Man magazine",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
      extension: "jpg"
    }
  },
  {
    id: 2,
    title: "Spider man 2",
    description: "Second Spider Man magazine",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
      extension: "jpg"
    }
  },
  {
    id: 3,
    title: "Spider man 3",
    description: "Third Spider Man magazine",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
      extension: "jpg"
    }
  },
]

describe('useMarvelHeroes Hook', () => {

  it('should fetch Marvel heroes', async () => {
    mockedApi.get.mockResolvedValue({
      data: {
        data: {
          results: mockHeroesData,
          total: mockHeroesData.length,
        },
      },
    });

    const { result } = renderHook(() => useMarvelHeroes());

    await act(async () => {
      result.current.getMarvelHeroes();
    });

    expect(result.current.heroes).toEqual(mockHeroesData);

  });

  it('should handles a server error with status code 500', async () => {
    mockedApi.get.mockRejectedValueOnce({
      response: {
        data: {
          code: 500,
          status: 'Internal Server Error',
        },
      },
    });

    const { result } = renderHook(() => useMarvelHeroes());

    await act(async () => {
      result.current.getMarvelHeroes();
    });

    expect(result.current.apiError).toBeTruthy();

  });

  it('should search and update Marvel heroes based on the given text', async () => {
    const searchText = 'A';
    mockedApi.get.mockResolvedValueOnce({
      data: {
        data: {
          results: mockHeroesData,
        },
      },
    });

    const { result, waitForNextUpdate } = renderHook(() => useMarvelHeroes());

    await act(async () => {
      result.current.searchMarvelHeroes(searchText);
    });

    await waitForNextUpdate();
    expect(result.current.searchResult).toEqual(mockHeroesData);

  });

  it('should fetch Marvel comics', async () => {
    mockedApi.get.mockResolvedValue({
      data: {
        data: {
          results: mockComicsData,
          total: mockComicsData.length,
        },
      },
    });

    const { result } = renderHook(() => useMarvelHeroes());

    await act(async () => {
      result.current.getHeroComics("1");
    });

    expect(result.current.comics).toEqual(mockComicsData);

  });



});
