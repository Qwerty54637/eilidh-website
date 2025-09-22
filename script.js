document.getElementById("focused").click();
document.getElementById("focused").focus();

function mediaSelect(selected) {
    let medias = document.querySelectorAll(".media"); 
    medias.forEach(item => {
        if (selected == "all" || item.classList.contains(selected)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
        })
}

function set_current_media(code,img_no){
        current_media = [code,img_no];
}

function roleSelect(role) {
        let tiles = document.querySelectorAll(".tile"); 
        tiles.forEach(item => {
            if (role == "all" || item.classList.contains(role)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
            })
}

function next_slide(){
    let code = current_media[0];
    let img_no = current_media[1];
    let x = (img_no + 1) % max_index[code];
    set_current_media(code,x);
    updateExpandedImage(code,x);
}

function previous_slide(){
    let code = current_media[0];
    let img_no = current_media[1];
    let x = img_no - 1;
    if (x < 0) {x += max_index[code]};
    set_current_media(code,x);
    updateExpandedImage(code,x);
}

window.onkeyup = function (event) {
    if (event.keyCode == 27) {
        unexpand();
    } else if (event.keyCode == 37) {
        previous_slide();
    } else if (event.keyCode == 39) {
        next_slide();
    }
}

function phoneMenu(){
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
        x.className += " phone";
        document.getElementById("menuIcon").className = "fa fa-times"
    } else {
        x.className = "navbar";
        document.getElementById("menuIcon").className = "fa fa-bars"
    }
}

function unexpand() {
    // deactivate overlay:
    document.querySelector('.expanded-tile').classList.remove('active');
    document.querySelector('.expand-overlay').classList.remove('active');
    document.querySelector('.left-button').classList.remove('active');
    document.querySelector('.right-button').classList.remove('active');
    document.querySelector('.close-button').classList.remove('active');
    document.querySelector('.expanded-video').classList.remove('active');
    document.getElementById("video").pause();
}

function expand(code, img_no) {
    document.querySelector('.expand-overlay').classList.add('active');
    set_current_media(code, img_no);
    updateExpandedImage(code, img_no)
    document.querySelector('.expanded-tile').classList.add('active');
    document.querySelector('.left-button').classList.add('active');
    document.querySelector('.right-button').classList.add('active');
    document.querySelector('.close-button').classList.add('active');
}