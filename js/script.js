window.addEventListener("load", () => {
    //Declaretion of all Variable
    let menu_btn = document.querySelector(".menu_btn");

    //Scrolled Top bar Effect
    let top_bar = document.querySelector(".top_bar");
    window.addEventListener("scroll", () => {
        top_bar.classList.toggle("scrolled_top_bar", window.scrollY > 0);
    });
    if (window.scrollY > 0) {
        top_bar.classList.toggle("scrolled_top_bar");
    }




    //-----Scrolled Skills bar Effect-----//
    window.addEventListener("scroll", () => {


        let tech_skills = document.querySelector(".tech_skills");
        let progress_field = document.querySelectorAll(".progress_field");
        const tech_skills_position = tech_skills.getBoundingClientRect().top;
        const screen_position = window.innerHeight;

        //Technical Skills Bar
        if (tech_skills_position < screen_position) {
            for (let i = 0; i < 5; i++) {
                progress_field[i].classList.add("field");
            }

        } else {
            for (let i = 0; i < 5; i++) {
                progress_field[i].classList.remove("field");
            }
        }

        //Professional Skills Bar
        let pro_skills = document.querySelector(".pro_skills");
        var circle = document.querySelectorAll(".circle");
        const pro_skills_position = pro_skills.getBoundingClientRect().top;

        // if (pro_skills_position + 110 < screen_position) {

        //     circle[0].classList.add("c1");
        //     circle[1].classList.add("c2");
        //     circle[2].classList.add("c3");
        //     circle[3].classList.add("c4");


        // } else {
        //     circle[0].classList.remove("c1");
        //     circle[1].classList.remove("c2");
        //     circle[2].classList.remove("c3");
        //     circle[3].classList.remove("c4");
        // }




        // function start_anim() {

        //     var speed = 500;
        //     var count = [];
        //     var increment = [];
        //     var x = [];
        //     for (let i = 0; i < 4; i++) {
        //         var percentage = document.querySelectorAll(".percentage");
        //         x[i] = percentage[i].getAttribute("data-target");
        //         increment[i] = Math.round(speed / x);
        //         // console.log(x[i]);
        //         count[i] = 0;

        //     }

        //     var start = setInterval(() => {

        //         for (let i = 0; i < 4; i++) {
        //             // console.log(x[i]);
        //             count[i]++;

        //             if (count[i] == 50) {
        //                 count[i] = x[i];
        //                 clearInterval(start);
        //             }
        //             percentage[i].innerHTML = count[i] + "%";
        //         }


        //     }, 24);
        // }
        const single_box_2 = document.querySelectorAll(".single_box_2");
        var position = [];
        let u = ["c0", "c1", "c2", "c3"];
        for (let i = 0; i < 4; i++) {
            position[i] = single_box_2[i].getBoundingClientRect().top;
            if (position[i] < screen_position) {
                // start_anim();
                circle[i].classList.add(u[i]);
            } else {
                circle[i].classList.remove(u[i]);

            }

        }
        // console.log(position[0])






        // $('.percentage').counterUp({
        //     delay: 3000,
        //     time: 1000
        // });
    });


    //Responsive Menu Button Effect
    menu_btn.addEventListener("click", () => {
        let nav = document.querySelector("nav");
        let li_menu = document.querySelectorAll("nav ul li a");
        for (let i = 0; i < li_menu.length; i++) {
            li_menu[i].addEventListener("click", () => {
                menu_btn.classList.remove("toggled_menu_btn");
                nav.classList.remove("toggled_nav");


            });
        }

        menu_btn.classList.toggle("toggled_menu_btn");
        nav.classList.toggle("toggled_nav");
    })

})