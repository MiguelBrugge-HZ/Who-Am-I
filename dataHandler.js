import { tweet } from './tweet.js';
import { openedTweet } from './openedTweet.js';

const feed = document.getElementById('feed');

fetch('data.json')
.then(response => response.json())
.then(data => {

    function timeline() {
        feed.innerHTML = '';
        for (const tweetKey in data.tweets) {
            const tweetData = data.tweets[tweetKey];

            const mainUser = data.users[tweetData.user];

            if (mainUser) {
                const tweetHTML = tweet(
                    mainUser.profilepic,
                    mainUser.username,
                    mainUser.handle,
                    tweetData.text,
                    tweetKey
                );

                feed.innerHTML += tweetHTML;
            } else {
                console.error(`User ${tweetData.user} not found.`);
            }
        }
    }

    timeline();

    feed.addEventListener('click', event => {
        const target = event.target.closest('.tweet');
        if (target) {
            const tweetId = target.dataset.tweet;
            const tweetData = data.tweets[tweetId];

            if (tweetData) {
                feed.innerHTML = openedTweet(data, tweetData);

                const openBack = document.getElementById('open-back');
                if (openBack) {
                    openBack.addEventListener('click', () => {
                        timeline();
                    }, { once: true });
                }
            } else {
                console.error(`Tweet ${tweetId} not found.`);
            }
        }
    });
})
.catch(error => console.error('Error fetching data:', error));