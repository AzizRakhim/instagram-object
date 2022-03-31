// CREATING THE STORIES IN THE OBJECT

const elStoryList = document.querySelector(".story__list");

let a = 0;
function showIt(elStories, num){
  elStories.forEach((el, index) => {
    let elItem = document.createElement("li");
    elItem.className = "story__item col-4";
    elItem.setAttribute("data-bs-toggle", "modal");
    elItem.setAttribute("data-bs-target", `#staticBackdrop${a}`);
    elItem.innerHTML = `
      <div class="story__item-holder">
        <img src="${el.media[0]}" alt="random">
        <span class="story__box-shadow">
  
        </span>
      </div>
      <div class="story__info d-flex align-items-center">
        <span class="story__info-num d-flex align-items-center">
          <i class='bx bxs-heart'></i>
            ${el.likeNum}
        </span>
        <span class="story__info-num d-flex align-items-center">
          <i class='bx bxs-message-rounded-dots'></i>
          13
        </span>
      </div>
    `;
  
    let elModalHolder = document.createElement("div");
    elModalHolder.innerHTML = `
      <div class="modal fade" id="staticBackdrop${a}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <button type="button" class="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close">
              <i class='bx bx-x'></i>
            </button>
            <div class="modal-body d-flex p-0">
              <div class="modal-media-holder col-6">
                <img src="${el.media[0]}" alt="${el.title}">
              </div>
              <div class="modal-info col-6">
                <div class="modal-intro d-flex align-items-center justify-content-between">
                  <div class="modal-img-holder">
                    <img src="../media/najot-talim.jpg" alt="najot-logo">
                  </div>
                  <div class="modal-intro-info flex-grow-1 d-flex align-items-center">
                    <button class="modal-owner" type="button">
                      najottalim
                    </button>
                    <span class="modal-dot">
  
                    </span>
                    <button class="modal-owner follow" type="button">
                      Following
                    </button>
                  </div>
                  <div class="three-dot-modal-holder">
                    <button class="three-dot-btn">
                      <i class='bx bx-dots-horizontal-rounded' ></i>
                    </button>
                  </div>
                </div>
                <div class="modal-main-body d-flex">
                  <div class="modal-img-holder-two col-1">
                    <img src="../media/najot-talim.jpg" alt="najot-logo">
                  </div>
                  <div class="modal-main-desc">
                    <div class="modal-main-title">
                      <h2 class="modal-real-title">
                        <button class="modal-owner" type="button">
                          najottalim
                        </button>
                        ${el.title}
                      </h2>
                    </div>
                    <div class="modal-inner-body">
                      <p class="modal-real-text">
                        ${el.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="modal-main-footer">
                  <div class="modal-buttons-holder d-flex align-items-center justify-content-between">
                    <div class="three-btns">
                      <button class="three-btn" onclick="save(${el.id})">
                        <i class='bx bx-heart' ></i>
                      </button>
                      <button class="three-btn">
                        <i class='bx bx-message-rounded-dots'></i>
                      </button>
                      <button class="three-btn">
                        <i class='bx bxl-telegram' ></i>
                      </button>
                    </div>
                    <div class="bookmark">
                      <button class="bookmark-btn">
                        <i class='bx bx-bookmark'></i>
                      </button>
                    </div>
                  </div>
                  <div class="like-modal">
                    <span class="number-like">
                      ${el.likeNum} likes
                    </span>
                    <span class="time-publish">
                      22 hours ago
                    </span>
                  </div>
                </div>
                <div class="form-modal">
                  <form class="modal-form d-flex align-items-center">
                    <span class="smile d-flex align-items-center">
                      <i class='bx bx-smile' ></i>
                    </span>
                    <input class="modal-input flex-grow-1" type="text" name="post" id="post" placeholder="Add a comment..." required>
                    <button class="post-btn" type="submit">
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    a++;
  
    const elModalKeep = document.querySelector(".modal-container");
    elModalKeep.appendChild(elModalHolder);
  
    el.media.forEach((item) => {
      if(item.includes("mp4")){
        let elVideo = elItem.querySelector(".bxs-heart");
        elVideo.className = "bx bx-play";
  
        let elVideoIcon = document.createElement("span");
        elVideoIcon.className = "video-holder";
        elVideoIcon.innerHTML = `
          <i class='bx bx-play'></i>
        `;
        elItem.appendChild(elVideoIcon);
  
        let elImg = elModalHolder.querySelector(".modal-media-holder");
        elImg.innerHTML = `
          <video class="element-video" width="100%" height="600" controls>
            <source class="video-source" src="${item}" type="video/mp4">
  
            </source>
          </video>
        `;
      } 
    });

    if(num == 1){
      let elHeart = elModalHolder.querySelector(".bx-heart");
      elHeart.addEventListener("click", () => {
        elHeart.className = "bx bxs-heart";
        elHeart.style.color = "red";
      });
      elStoryList.appendChild(elItem);
    } else if(num == 2){
      elSavedList.appendChild(elItem);
      if(el.save == true){
        let elHeart = elModalHolder.querySelector(".bx-heart");
        elHeart.className = "bx bxs-heart";
        elHeart.style.color = "red";
      }
      elSavedList.appendChild(elItem);
    }
  });
}

showIt(elStories, 1);

// SAVING THE SELECTED STORIES

let elSavedThings = [];
let elRemoveHelper = [];

function save(idx){
  elStories.forEach((el) => {
    if(el.id == idx){
      elSavedThings.push(el);
      el.save = true;
    }
  });

  elSavedThings.forEach((el) => {
    let elArrTry = elSavedThings;
    let elArryReal = [];

    elArrTry.forEach((item) => {
      if(elArrTry != "") elArryReal.push(elArrTry[0]);
      elArrTry = elArrTry.filter((el) => {
        return elArrTry[0] != el;
      });
    });
    elSavedList.innerHTML = "";
    showIt(elArryReal, 2);
    elRemoveHelper = elArryReal;
  });
}

// CHOOSING THE CATEGORIES

let elSavedBtn = document.querySelector(".saved");
let elPost = document.querySelector(".post");
const elSavedList = document.querySelector(".saved-list");

elSavedBtn.addEventListener("click", () => {
  elStoryList.style.display = "none";
  elSavedList.style.display = "flex"
});

elPost.addEventListener("click", () => {
  elStoryList.style.display = "flex";
  elSavedList.style.display = "none";
});