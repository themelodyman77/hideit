var vp_check_mobile = window.matchMedia("(max-width:1023px)");
if(vp_check_mobile.matches)     // checks for mobile viewport
{
    // Navbar for mobiles
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const miniNav = document.getElementById('mini-nav');
    menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    });
    function mini_nav_closer()
    {
        miniNav.style.display = 'none';
        document.getElementById("mini-nav").style.transform = "translateY(0)";
    }
    function mini_nav_opener()
    {
        if (miniNav.style.display === 'flex') {
        document.getElementById("mini-nav").style.transform = "translateY(-100%)";
        document.getElementById("mini-nav").style.transition = "ease 0.8s";
        setTimeout(function ()
        {
            mini_nav_closer();//reset transform property else error occurs
        },800);
        } else {
        miniNav.style.display = 'flex';
        }
    }
    menuBtn.addEventListener('click', mini_nav_opener);  

    // Feedback function mobile
    document.getElementById("feedback-click1").addEventListener("click", function()
    {
        document.getElementById("feedback-click1").style.display = "none";
        navbar.classList.toggle('active');
        mini_nav_closer();
        document.getElementById("inp-form").style.display = "inline";
        document.getElementById("close_btn_feedback").style.display = "block";
        document.getElementById("close_btn_feedback").addEventListener("click",function()
        {
            console.log("inside");
            document.getElementById("feedback-click1").style.display = "inline";
            document.getElementById("inp-form").style.transform = "translateX(-500px)";
            document.getElementById("inp-form").style.transition = "ease 1s";
            setTimeout(function ()
            {
                document.getElementById("inp-form").style.display = "none";
                document.getElementById("inp-form").style.transform = "translateX(0)"; // reset transform property
            },500);
            document.getElementById("close_btn_feedback").style.display = "none";
        });
    });

    // About for mobiles
    for(var i=0;i<document.getElementsByClassName("ab-child").length;i++)
    {
        console.log("IM in1");
        var temp = document.getElementsByClassName("ab-child")[i];
        if(temp.classList[0] == "initial")
        {
            console.log("IM in");
            document.getElementById("description_about1").style.display = "none";
            document.getElementById("description_about2").style.display = "none";
            document.getElementById("description_about3").style.display = "none";
            document.getElementById("description_about4").style.display = "none";
        }
    }
    //we hide the emoji on click
    document.getElementById("hobbies").addEventListener("click", (event) =>
    {
        console.log("hobbies clicked");
        document.getElementById("chess-queen").style.display = "none";
        document.getElementById("description_about1").style.display = "inline";
        document.onclick = function(div)
        {
            if(div.target.id !== 'hobbies')
            {
                console.log("yup_unclick0");
                document.getElementById("chess-queen").style.display = "inline";
                document.getElementById("description_about1").style.display = "none";
            }
        };
    });
    document.getElementById("favourites").addEventListener("click", (event) =>
    {
        console.log("heart clicked");
        document.getElementById("heart").style.display = "none";
        document.getElementById("description_about2").style.display = "inline";
        document.onclick = function(div)
        {
            if(div.target.id !== 'favourites')
            {
                console.log("yup_unclick1");
                document.getElementById("heart").style.display = "inline";
                document.getElementById("description_about2").style.display = "none";
            }
        };
    });
    document.getElementById("education").addEventListener("click", (event) =>
    {
        console.log("school clicked");
        document.getElementById("school").style.display = "none";
        document.getElementById("description_about3").style.display = "inline";
        document.onclick = function(div)
        {
            if(div.target.id !== 'education')
            {
                console.log("yup_unclick2");
                document.getElementById("school").style.display = "inline";
                document.getElementById("description_about3").style.display = "none";
            }
        };
    });
    document.getElementById("acheivements").addEventListener("click", (event) =>
    {
        console.log("trophy clicked");
        document.getElementById("trophy").style.display = "none";
        document.getElementById("description_about4").style.display = "inline";
        document.onclick = function(div)
        {
            if(div.target.id !== 'acheivements')
            {
                console.log("yup_unclick3");
                document.getElementById("trophy").style.display = "inline";
                document.getElementById("description_about4").style.display = "none";
            }
        };
    });
}
else{
    // Aside button
    function openpg()
    {
        document.getElementById("circle").style.display = "inline-block";
        document.getElementById("info").style.display = "none";
    }
    function closepg() {
        document.getElementById("circle").style.display = "none";
        document.getElementById("info").style.display = "inline";
    }

    // Feedback function computer
    document.getElementById("feedback-click").addEventListener("click", function()
    {
        document.getElementById("feedback-click").style.display = "none";
        document.getElementById("inp-form").style.display = "inline";
        document.getElementById("close_btn_feedback").style.display = "block";
        document.getElementById("close_btn_feedback").addEventListener("click",function()
        {
            console.log("inside");
            document.getElementById("feedback-click").style.display = "inline";
            document.getElementById("inp-form").style.transform = "translateX(-500px)";
            document.getElementById("inp-form").style.transition = "ease 1s";
            setTimeout(function ()
            {
                document.getElementById("inp-form").style.display = "none";
                document.getElementById("inp-form").style.transform = "translateX(0)"; // reset transform property
            },500);
            document.getElementById("close_btn_feedback").style.display = "none";
        });
    });

    // About page
    for(var i=0;i<document.getElementsByClassName("ab-child").length;i++)
    {
        console.log("IM in1");
        var temp = document.getElementsByClassName("ab-child")[i];
        if(temp.classList[0] == "initial")
        {
            console.log("IM in");
            document.getElementById("description_about1").style.display = "none";
            document.getElementById("description_about2").style.display = "none";
            document.getElementById("description_about3").style.display = "none";
            document.getElementById("description_about4").style.display = "none";
        }
    }
    document.getElementById("hobbies").addEventListener("mouseover", (event) =>
    {
        var temp_text = "description_about1";
        document.getElementById(temp_text).style.display = "inline";
    });
    document.getElementById("hobbies").addEventListener("mouseleave", (event) =>
    {
        var temp_text = "description_about1";
        document.getElementById(temp_text).style.display = "none";
    });
    document.getElementById("favourites").addEventListener("mouseover", (event) =>
    {
        var temp_text = "description_about2";
        document.getElementById(temp_text).style.display = "inline";
    });
    document.getElementById("favourites").addEventListener("mouseleave", (event) =>
    {
        var temp_text = "description_about2";
        document.getElementById(temp_text).style.display = "none";
    });
    document.getElementById("education").addEventListener("mouseover", (event) =>
    {
        var temp_text = "description_about3";
        document.getElementById(temp_text).style.display = "inline";
    });
    document.getElementById("education").addEventListener("mouseleave", (event) =>
    {
        var temp_text = "description_about3";
        document.getElementById(temp_text).style.display = "none";
    });
    document.getElementById("acheivements").addEventListener("mouseover", (event) =>
    {
        var temp_text = "description_about4";
        document.getElementById(temp_text).style.display = "inline";
    });
    document.getElementById("acheivements").addEventListener("mouseleave", (event) =>
    {
        var temp_text = "description_about4";
        document.getElementById(temp_text).style.display = "none";
    });
}
