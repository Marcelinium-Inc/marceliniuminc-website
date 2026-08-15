fetch("../components/navbar/navbar.html")
    .then(response => response.text())
    .then(navbar => { 
            document.getElementById("navbar").innerHTML = navbar;
            })

fetch("../components/newsbox/newsbox.html")
    .then(response => response.text())
    .then(newsbox => {
        elements = document.querySelectorAll("#newsbox");
        elements.forEach(element => { element.innerHTML = newsbox;})
    })

fetch("../components/newsboxExtra/newsboxExtra.html")
    .then(response => response.text())
    .then(newsboxExtra => {
        elements = document.querySelectorAll("#newsboxExtra");
        elements.forEach(element => { element.innerHTML = newsboxExtra;})
    })

fetch("../components/releasebox/releasebox.html")
    .then(response => response.text())
    .then(releasebox => {
        elements = document.querySelectorAll("#releasebox");
        elements.forEach(element => { element.innerHTML = releasebox;})
    })

fetch("../components/creationsbox/creationsbox.html")
    .then(response => response.text())
    .then(creationsbox => {
        elements = document.querySelectorAll("#creationsbox");
        elements.forEach(element => { element.innerHTML = creationsbox;})
    })

fetch("../components/supportbox/supportbox.html")
    .then(response => response.text())
    .then(supportbox => {
        elements = document.querySelectorAll("#supportbox");
        elements.forEach(element => { element.innerHTML = supportbox;})
    })


fetch("../components/bottombar/bottombar.html")
    .then(response => response.text())
    .then(bottombar => { 
            document.getElementById("bottombar").innerHTML = bottombar;
            })