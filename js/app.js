$( document ).ready(function() {
    let intro =`Hello,\xa0I'm\xa0`;
    let newIntro = '';
    let name = "Whithedel\xa0Carre";
    let newName = '';
    let aboutMe = "I'm\xa0a\xa0full-stack\xa0web\xa0developer."
    let newAboutMe = '';
    let aboutHtml = `<h1>What\xa0is\xa0Lorem\xa0Ipsum?</h1>
			<p\xa0class="lead">Lorem\xa0Ipsum\xa0is\xa0simply\xa0dummy\xa0text\xa0of\xa0the\xa0printing\xa0and\xa0typesetting\xa0industry.</p>
            <a\xa0href="#contact"\xa0class="btn\xa0btn-secondary\xa0btn-md">Secondary</a>`
            
    for (const data of intro) {
        newIntro +=  `<span class="captionH1 animated infinite fast">${data}</span>`
    }
    for (const data of name) {
        newName += ` <span class="captionH1 highlight animated infinite fast">${data}</span>`
    }
    for (const data of aboutMe) {
        newAboutMe += `<span class="captionH1 animated infinite fast">${data}</span>`
    }

    $("#part1").html(newIntro + newName +".");
    $("#part2").html(newAboutMe);
    // $("#aboutSection").html(aboutHtml);

    addAnimationOnHover("animated","tada")
    // console.log(addAnimationOnHover)

    // Setting up tooltips
    $(function () {$('[data-toggle="tooltip"]').tooltip()})

});
    // $(".captionH1").hover(
    //     function(){ $(this).addClass('bounce') },
    //     function(){ $(this).removeClass('bounce') }
    // )
// add animation 
const addAnimationOnHover = (targetClass,classToBeAdded) => {
    $(`.${targetClass}`).hover(
        function(){ $(this).addClass(`${classToBeAdded}`) },
        function(){ $(this).removeClass(`${classToBeAdded}`) }
    )
}