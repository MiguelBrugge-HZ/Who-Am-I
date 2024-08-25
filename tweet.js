export function tweet(profilepic, username, handle, text, tweetKey) {
    return `
      <div class="tweet text-white w-100 p-3 py-1 mb-2" data-tweet="${tweetKey}">
          <div class="d-flex gap-2">
              <img src="${profilepic}" alt="${username}'s profile picture" height="45" width="45" class="rounded-pill">
              <div class="w-100">
                  <div class="d-flex gap-2 w-100">
                      <p class="m-0 fw-bold">${username} <i class="fa-solid fa-circle-check text-primary"></i></p>
                      <p class="m-0 text-secondary">${handle}</p>
                      <p class="m-0 text-secondary">- 10 u</p>
                      <i class="ms-auto fa-solid fa-ellipsis text-secondary my-auto"></i>
                  </div>
                  <p>${text}</p>
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
  }
  