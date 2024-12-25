let dueDateDom = document.querySelector(".list-info-v > li:nth-child(5) > span:nth-child(2)");
const daysUntil = Math.ceil((new Date(dueDateDom.innerHTML.split('/').reverse().join('-')) - new Date()) / (1000 * 60 * 60 * 24)) + 1;

const daysUntilDom = Object.assign(document.createElement('span'), { innerHTML: ` (${daysUntil} days)` });
dueDateDom.append(daysUntilDom);

const bandwidthLimitRaw = document.querySelector("#bandwidth > ul:nth-child(1) > ul:nth-child(3) > li:nth-child(1) > span:nth-child(2)").innerHTML;
const bandwidthLimit = Number.parseFloat(bandwidthLimitRaw.substring(0, bandwidthLimitRaw.indexOf(" ")));

const bandwidthUsedRaw = document.querySelector("#bandwidth > ul:nth-child(1) > ul:nth-child(3) > li:nth-child(2) > span:nth-child(2)").innerHTML;
const bandwidthUsed = Number.parseFloat(bandwidthUsedRaw.substring(0, bandwidthUsedRaw.length - 2));

const totalBandwidthLeft = bandwidthLimit - (bandwidthLimit * (bandwidthUsed / 100));

const bandLeft = Object.assign(document.createElement('li'), { innerHTML: `
    <span class="list-info-title">Bandwidth (Datatraffic) left</span>
    <span class="list-info-text">${totalBandwidthLeft} TB</span>
` });

const bandLeftPerDay = Object.assign(document.createElement('li'), { innerHTML: `
    <span class="list-info-title">Bandwidth (Datatraffic) left per day</span>
    <span class="list-info-text">${(totalBandwidthLeft / daysUntil).toFixed(2)} TB</span>
` });

document.querySelector("#bandwidth > ul:nth-child(1) > ul:nth-child(3)").append(bandLeft, bandLeftPerDay);