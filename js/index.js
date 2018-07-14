// Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/img-1.jpg",
           "./img/img-2.jpg",
           "./img/img-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        //console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };
    window.addEventListener("load", preloader);
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    const btns = document.querySelectorAll("button");
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    const resources = {
        page1: {
            headingContent: "LED Lightbulbs",
            bodyText: "<p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p><p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p><p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>",
            imgUrl: "./img/img-1.jpg",
            imgAlt: ""
        },
        page2: {
            headingContent: "Solar Power",
            bodyText: "<p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.</p><p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p><p>Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.</p>",
            imgUrl: "./img/img-2.jpg",
            imgAlt: ""
        },
        page3: {
            headingContent: "Wind Power",
            bodyText: "<p>Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.</p><p>Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato.</p>",
            imgUrl: "./img/img-3.jpg",
            imgAlt: ""
        }
    };
    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    const container = document.querySelector(".container");

    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). */
    btns[0].setAttribute("id", "active-button");
    
    /*
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    container.innerHTML = `<h1>${resources.page1.headingContent}</h1>
     <img src="${resources.page1.imgUrl}" alt="${resources.page1.imgAlt}">
     <p>${resources.page1.bodyText}</p>`;
    
    /* 
    Start your handleSelection function here. */ 
     function handleSelection(e) {
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */
        for (let btn of btns) {
            if (btn.hasAttribute("id")) {
                btn.removeAttribute("id");
            }
        }

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
         e.target.setAttribute("id", "active-button");
    
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
        let btnLabel = e.target.textContent;
        switch (btnLabel) {
            case "LED Lightbulbs":
            container.innerHTML = `<h1>${resources.page1.headingContent}</h1>
                                    <img src="${resources.page1.imgUrl}" alt="${resources.page1.imgAlt}">
                                    <p>${resources.page1.bodyText}</p>`;
            break;
            case "Solar Power":
            container.innerHTML = `<h1>${resources.page2.headingContent}</h1>
                                    <img src="${resources.page2.imgUrl}" alt="${resources.page2.imgAlt}">
                                    <p>${resources.page2.bodyText}</p>`;
            break;
            case "Wind Power":
            container.innerHTML = `<h1>${resources.page3.headingContent}</h1>
                                    <img src="${resources.page3.imgUrl}" alt="${resources.page3.imgAlt}">
                                    <p>${resources.page3.bodyText}</p>`;
        }
        /* 
        Close your handleSelection function here. */  
     }
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 
for (let btn of btns) {
    btn.addEventListener("click", handleSelection);
}