import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector(".form");
const input = form.querySelector("input[name='search-text']");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      message: "Please enter a search query!",
    });
    return;
  }
  
  
  clearGallery();
  showLoader();

 getImagesByQuery(query)
    .then(images => {
      hideLoader(); 

      if (images.length === 0) {
        iziToast.warning({
          message: "Sorry, there are no images matching your search query. Please try again!",
        });
        form.reset();
        return;
      }

      createGallery(images);
      form.reset();
    })
});

