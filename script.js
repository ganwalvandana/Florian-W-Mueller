
const body = document.getElementsByTagName("body");
const logo = document.getElementById("logo");
const cursor = document.getElementById('cursor');

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.display = "block";
})

logo.addEventListener("click",() => {
    // console.log("image clicked");
    setRandomBg();
});

const setRandomBg = () => {
    const imageCount = 8;
    let random = Math.floor(Math.random() * imageCount);
    document.body.style.backgroundImage=`url('images/bg${random}.jpg')`;

}

setRandomBg();