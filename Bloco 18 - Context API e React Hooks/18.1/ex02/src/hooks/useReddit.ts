import { useContext } from "react";
import { RedditContext } from "../store/context/RedditContext";

export function useReddit() {
  const value = useContext(RedditContext);
  return value;
}