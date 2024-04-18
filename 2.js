const imageWrappers = document.querySelectorAll(".imageWrapper");
const btns = document.querySelectorAll(".chevron");
const imageList = ["1", "2", "3", "4"];
let index = 0;

btns.forEach((button) => {
    button.addEventListener("click", function () {
        if (button.classList.contains("chevron-left")) {
            index--;
            if (index < 0) {
                index = imageList.length - 1;
            }
        } else {
            index++;
            if (index === imageList.length) {
                index = 0;
            }
        }
        imageWrappers.forEach((wrapper, i) => {
            wrapper.style.transition = "transform 0.5s ease-in-out";
            wrapper.style.transform = `translateX(-${index * 1130 + i * 1130}px)`; // Adjust according to container width
        });
    });
});
