document.addEventListener("DOMContentLoaded", function(event){
    var navmobilejs = document.getElementsByClassName("nav-burger");
    var navmobilejscontent = document.getElementsByClassName("nav-mobile-nav");
    var medwidthtablet = window.matchMedia("(max-width: 770px)");
    var medwidthcp = window.matchMedia("(max-width: 670px)");


    
    navmobilejs[0].addEventListener("click", function() {
        if (navmobilejscontent[0].style.maxHeight) {
            navmobilejscontent[0].style.maxHeight = null;
            navmobilejscontent[0].style.padding = "0px";
        } else {
             if (medwidthcp.matches) {
                navmobilejscontent[0].style.padding = "0px";
                navmobilejscontent[0].style.maxHeight = navmobilejscontent[0].scrollHeight + "px";
                navmobilejscontent[0].style.flexDirection = "column";
                navmobilejscontent[0].style.width = "30vw";
            } else if (medwidthtablet.matches) {
                navmobilejscontent[0].style.maxHeight = navmobilejscontent[0].scrollHeight + "px";
                navmobilejscontent[0].style.padding = "20px 30px 20px 30px";
                navmobilejscontent[0].style.flexDirection = "row";
                navmobilejscontent[0].style.width = "50vw";
            }
        }
    });

    const scrollingtext = document.querySelector('.slideshow-text');
    let scrollAmount = 0;

    setInterval(() => {
        
        scrollAmount += 5;

        if (scrollAmount >= scrollingtext.scrollWidth) {
            scrollAmount = 0;
        }
        scrollingtext.scrollLeft = scrollAmount;
    }, 20);

    const cardContainer = document.querySelector('.ag-grid');
    const scrollAmounta = 280;
    let scrollInterval;

    function startAutoscroll() {
        scrollInterval = setInterval(() => {
            if (cardContainer.scrollLeft + cardContainer.clientWidth >= cardContainer.scrollWidth) {
                
                console.log("reset");
                cardContainer.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                console.log("scroll");
                cardContainer.scrollBy({ left: scrollAmounta, behavior: "smooth" });
            }
        }, 3000);
    }

    function stopAutoscroll() {
        clearInterval(scrollInterval);
    }

    startAutoscroll();

    //Pause autoscroll on hover
    cardContainer.addEventListener('mouseenter', stopAutoscroll);
    cardContainer.addEventListener('mouseleave', startAutoscroll);
});

