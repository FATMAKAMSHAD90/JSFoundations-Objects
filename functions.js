/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = require("./channels.json");
// console.log(channels[0]);
/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  return channel.name;
}

// Your code here

//console.log(getChannelName(channels[0]));

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  return channel.videos.length;
  // Your code here
}
// console.log(numberOfVideos(channels[0]))

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  return channel.videos.some((element) => element.title === videoTitle);

  // Your code here
}
//console.log(channelHasVideo("The Universal S", channels[0]));
// console.log(channelHasVideo("The Universal S", channels[1]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  return channels.find((element) => element.name === channelName);
}
// Your code here

// console.log(getChannelByName("PowerfulJRE", channels))

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  return channels.find((element) =>
    element.videos.some((element) => element.title === videoTitle)
  );

  // Your code here
}
// console.log(getChannelByVideoTitle("The Universal S", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  return channels.filter(
    (element) =>
      element.description.includes(query) || element.name.includes(query)
  );
  // Your code here
}
console.log(searchChannels("the", channels));

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
