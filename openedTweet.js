export function openedTweet(data, tweet) {

    const questionUser = data.users[tweet.user];

    return `
        <div class="d-flex gap-4 text-white w-100 align-items-center ps-2 py-1">
            <i id="open-back" class="arrow-back p-3 rounded-pill fa-solid fa-arrow-left"></i>
            <p class="m-0 fs-5 fw-bold">Plaatsen</p>
        </div>
        <div class="text-white w-100 p-3 py-1">
            <div class="d-flex gap-2 mb-3">
                <img src="${questionUser.profilepic}" alt="${questionUser.username}'s profile picture" height="45" width="45" class="rounded-pill">
                <div class="w-100">
                    <div class="d-flex gap-2 w-100">
                        <p class="m-0 fw-bold">${questionUser.username} <i class="fa-solid fa-circle-check text-primary"></i></p>
                        <i class="ms-auto fa-solid fa-ellipsis text-secondary my-auto"></i>
                    </div>
                    <p class="m-0 text-secondary">${questionUser.handle}</p>
                </div>
            </div>
            <p>${tweet.text}</p>
            <p class="text-secondary">10:13 a.m. - 25 aug. 2024 - <b class="text-white">69</b> Weergaven</p>
            <hr>
            <div class="d-flex justify-content-between text-secondary w-100">
                <div class="d-flex gap-1 align-items-center">
                    <i class="fa-regular fa-comment"></i>
                    <span>421</span>
                </div>
                <div class="d-flex gap-1 align-items-center">
                    <i class="fa-solid fa-retweet"></i>
                    <span>142</span>
                </div>
                <div class="d-flex gap-1 align-items-center">
                    <i class="fa-regular fa-heart"></i>
                    <span>342K</span>
                </div>
                <div class="d-flex gap-1 align-items-center">
                    <i class="fa-regular fa-bookmark"></i>
                    <span>132</span>
                </div>
                <div class="d-flex gap-1 align-items-center">
                    <i class="fa-regular fa-circle-down"></i>
                </div>
            </div>
            <hr>
            <div class="d-flex gap-3 align-items-center py-2">
                <img src="${data.users[`user2`].profilepic}" alt="${questionUser.username}'s profile picture" height="45" width="45" class="rounded-pill">
                <input class="m-0 fs-5 text-white bg-transparent border-0" placeholder="Je antwoord plaatsen"></input>
                <button id="reply-button" class="ms-auto text-center bg-primary rounded-pill border-0 fw-bold py-2 px-4 text-white opacity-50">Beantwoorden</button>
            </div>
            <hr>
        </div>
        ${tweet.replies.map(reply => {
            const replyUser = data.users[reply.user];
            return `
            <div class="tweet text-white w-100 p-3 py-1 mb-2" data-tweet="${tweet}">
                <div class="d-flex gap-2">
                    <img src="${replyUser.profilepic}" alt="${replyUser.username}'s profile picture" height="45" width="45" class="rounded-pill">
                    <div class="w-100">
                        <div class="d-flex gap-2 w-100">
                            <p class="m-0 fw-bold">${replyUser.username} <i class="fa-solid fa-circle-check text-primary"></i></p>
                            <p class="m-0 text-secondary">${replyUser.handle}</p>
                            <p class="m-0 text-secondary">- 10 u</p>
                            <i class="ms-auto fa-solid fa-ellipsis text-secondary my-auto"></i>
                        </div>
                        <p>${reply.text}</p>
                        <div class="d-flex justify-content-between text-secondary w-100">
                            <div class="d-flex gap-1 align-items-center">
                                <i class="fa-regular fa-comment"></i>
                                <span>421</span>
                            </div>
                            <div class="d-flex gap-1 align-items-center">
                                <i class="fa-solid fa-retweet"></i>
                                <span>142</span>
                            </div>
                            <div class="d-flex gap-1 align-items-center">
                                <i class="fa-regular fa-heart"></i>
                                <span>342K</span>
                            </div>
                            <div class="d-flex gap-1 align-items-center">
                                <i class="fa-solid fa-chart-column"></i>
                                <span>4M</span>
                            </div>
                            <div class="d-flex gap-3 mt-1">
                                <i class="fa-regular fa-bookmark"></i>
                                <i class="fa-regular fa-circle-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join('')}
    `;
}
