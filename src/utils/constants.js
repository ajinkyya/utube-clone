export const GOOGLE_API_KEY = "AIzaSyAiLXbNhj0nroHOy5RBGIiOspBnx0G1iuA";
//AIzaSyDWPq_w0_uVejy_MPuXReLG7VXXY4NuZpM

export const YOUTUBE_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
// GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://clients1.google.com/complete/search?client=firefox&ds=yt&q="
  );

export const VIDEO_INFO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const CHANNEL_INFO_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const OFFSET_LIVE_CHAT = 20;

// CORS Proxy
// https://proxy.cors.sh/
// https://corsproxy.io/?

// Search Url
//  https://clients1.google.com/complete/search?client=firefox&ds=yt&q=
//  http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=

export function capitalizeTheFirstLetterOfEachWord(words) {
  var separateWord = words.toLowerCase().split(" ");
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
}
