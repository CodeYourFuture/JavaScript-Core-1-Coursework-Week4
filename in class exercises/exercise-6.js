// Write a function called findChannelNumber which
// takes 2 parameters: (1) the array of channels and (2) a channel name
// returns the channel number if we can find the channel name in the array (assume channel number is index + 1)
// Otherwise, should return -1
// this function should not be case-sensitive
// Examples:

let channels = ["bbc1", "BBC2", "ITV", "channel4", "Channel5", "bbc3", "bbc4", "itv2", "ITV3", "itv4"];


const findChannelNumber = channels.find(channelName => findChannelNumber.indexOf(channelName)) 

//const result = channels.map(allChannelsNames => {

   // return allChannelsNames.toUpperCase();
//})
//console.log(result);

findChannelNumber("BBC3") // 6
findChannelNumber("bbc3") // 6
findChannelNumber("sky1") // -1
