import { createContext, ReactNode, useEffect, useState } from 'react';
import { getHourMinSec } from '../../helper/getData';
import { redditAPI } from '../../services/api';

type postsType = [
  {
    data: {
      title: string;
    };
  }
];

type RedditContextProps = {
  children: ReactNode;
};

type RedditContextTypes = {
  loading: boolean;
  posts: postsType | [];
  fetchReddit: () => Promise<void>;
  hour: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const RedditContext = createContext({} as RedditContextTypes);

export function RedditContextProvider({ children }: RedditContextProps) {
  const [loading, setLoading] = useState(false),
    [selectedCategory, setSelectedCategory] = useState('frontend'),
    [posts, setPosts] = useState<postsType | []>([]),
    [hour, setHour] = useState('');

  const fetchReddit = async () => {
    setLoading(true);
    const { data } = await redditAPI(selectedCategory);
    setPosts(data.children);
    setLoading(false);
    setHour(getHourMinSec());
  };

  useEffect(() => {
    fetchReddit();
  }, []);

  return (
    <RedditContext.Provider
      value={{ loading, posts, fetchReddit, hour, setSelectedCategory }}
    >
      {children}
    </RedditContext.Provider>
  );
}
