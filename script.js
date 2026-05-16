
let typed= new Typed('.text-change',{
    strings: [
        "Frontend Developer",
        "Web Designer",
        "Future MERN Developer"
    ],
       typeSpeed: 100,
    backSpeed: 50,
    backdelay: 2000,
    loop: true

})


emailjs.init("F2bhj-TjXO_CK2mT0");

const form = document.querySelector("#contactjs");
const p = document.querySelector(".showmessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_wqwvjba",
        "template_n3gwb1h",
        this
    )

    .then(() => { 
        p.innerHTML="Message Sent Successfully 😄";
        form.reset();
    })

    .catch((error) => {
        p.innerHTML="Failed to Send Message 😞";
        console.log(error);
    });

});



//    for checking



