// CREATING THE STORIES IN THE OBJECT

const elStoryList = document.querySelector(".story__list");
let a = 0;
let b = 0;
function showIt(elStories, num){
  elStories.forEach((el, index) => {
    let elItem = document.createElement("li");
    elItem.className = "story__item col-4";
    elItem.setAttribute("data-bs-toggle", "modal");
    elItem.setAttribute("data-bs-target", `#exampleModal${a}`);
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
      <div class="modal fade" id="exampleModal${a}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <button type="button" class="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close">
              <i class='bx bx-x'></i>
            </button>
            <div class="modal-body d-flex p-0">
              <div class="everything-holder col-6">

              </div>
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
                      <button class="three-btn">
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
                      <button class="bookmark-btn" onclick="save(${el.id})">
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
      } else if(el.media.length > 1){
        let elImg = elModalHolder.querySelector(".modal-media-holder");
        elImg.innerHTML = `
        <div id="carouselExampleControls${b}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${el.media[0]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
            <div class="carousel-item">
              <img src="${el.media[1]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
            <div class="carousel-item">
              <img src="${el.media[2]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
            <div class="carousel-item">
              <img src="${el.media[3]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
            <div class="carousel-item">
              <img src="${el.media[4]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
            <div class="carousel-item">
              <img src="${el.media[5]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
            <div class="carousel-item">
              <img src="${el.media[6]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
            <div class="carousel-item">
              <img src="${el.media[7]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
            <div class="carousel-item">
              <img src="${el.media[8]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
            <div class="carousel-item">
              <img src="${el.media[9]}" class="d-block w-100 h-100" alt="${el.title}">
            </div>
          </div>
          <button class="carousel-control-prev carousel-button" type="button" data-bs-target="#carouselExampleControls${b}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"><i class='bx bx-chevron-left'></i></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next carousel-button" type="button" data-bs-target="#carouselExampleControls${b}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true">
            <i class='bx bx-chevron-right' ></i></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        `;
        b++;
      }
    });

    if(num == 1){
      let elBookmark = elModalHolder.querySelector(".bx-bookmark");
      elBookmark.addEventListener("click", () => {
        elBookmark.className = "bx bxs-bookmark";
        elBookmark.style.color = "black";
      });
      elStoryList.appendChild(elItem);
    } else if(num == 2){
      let elBookmark = elModalHolder.querySelector(".bx-bookmark");
      elBookmark.className = "bx bxs-bookmark";
      elBookmark.style.color = "black";
      elSavedList.appendChild(elItem);
    }
  });
}

showIt(elStories, 1);

// SAVING THE SELECTED STORIES

let elSavedThings = [];

function save(idx){
  elStories.forEach((el) => {
    if(el.id == idx){
      elSavedThings.push(el);
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
  });
}

// CHOOSING THE CATEGORIES

let elSavedBtn = document.querySelector(".saved");
let elPost = document.querySelector(".post");
const elSavedList = document.querySelector(".saved-list");

elSavedBtn.addEventListener("click", () => {
  elStoryList.style.display = "none";
  elSavedList.style.display = "flex";
  elPost.classList.remove("active");
  elSavedBtn.classList.add("active");
});

elPost.addEventListener("click", () => {
  elStoryList.style.display = "flex";
  elSavedList.style.display = "none";
  elPost.classList.add("active");
  elSavedBtn.classList.remove("active");
});

// WORKING WITH THE HERO SLIDE

let elHeroLeft = document.querySelector("#left");
let elHeroRight = document.querySelector("#right");
let elHeroList = document.querySelector(".hero__slider-list");
let keepCount = 0;
let elImgLength = elHeroList.querySelectorAll("li");

elHeroLeft.addEventListener("click", () => {
  keepCount--;

  moveIt();
});

elHeroRight.addEventListener("click", () => {
  keepCount++;

  moveIt();
});

function moveIt() {
  if(keepCount > elImgLength.length - 7){
    keepCount = 0;
  } else if(keepCount < 0){
    keepCount = elImgLength.length - 7;
  }
  elHeroList.style.transform = `translateX(${-keepCount * 127}px)`;
}
