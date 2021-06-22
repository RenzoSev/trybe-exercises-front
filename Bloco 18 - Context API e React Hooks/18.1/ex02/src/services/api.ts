const genericFetch = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

type redditResponse = {
  data: {
    children: [{
      data: {
        title: string
      }
    }]
  }
};
type redditFetchType = (arg0: string) => Promise<redditResponse>;

export const redditAPI: redditFetchType = async (subreddit) => {
  const URL = `https://www.reddit.com/r/${subreddit}.json`;
  const posts = await genericFetch(URL);
  return posts;
};
