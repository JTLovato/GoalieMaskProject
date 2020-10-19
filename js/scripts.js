
  const d = new Date();
  const day = d.getDay();
  const daily = document.getElementById("daily");
  const randomGoalie = document.getElementById("randomGoalie");

// Creating the daily goalie content.
  function dailyContent() {
    if (day === 0) {
        daily.innerHTML = `
        <h5 class="card-title-top">Sunday Brunch</h5>
        <img class="card-img-top" src="img/weiman.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Tyler Weiman</h5>
        <p class="card-text">Despite only playing 40 minutes in the NHL, Weiman made the most of it, stopping every shot he saw.</p>
        <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=55478" target="_blank" class="btn btn-primary">Read More</a>
        `;
    } else 
    if (day === 1) {
        daily.innerHTML = `
        <h5 class="card-title-top">Motivation Monday</h5>
        <img class="card-img-top" src="img/harding.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Josh Harding</h5>
        <p class="card-text">Diagnosed with MS in 2012, Harding finished the year 13-12-4.</p>
        <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=62561" target="_blank" class="btn btn-primary">Read More</a>
        `;
    } else 
    if (day === 2) {
        daily.innerHTML = `
        <h5 class="card-title-top">Travel Tuesday</h5>
        <img class="card-img-top" src="img/lundqvist.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Henrik Lundqvist</h5>
        <p class="card-text">King Henrik backstopped Team Sweden to 2006 Winter Olympic Gold.</p>
        <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=51269" target="_blank" class="btn btn-primary">Read More</a>
        `;
    } else 
    if (day === 3) {
        daily.innerHTML = `
        <h5 class="card-title-top">Woman Crush Wednesday</h5>
        <img class="card-img-top" src="img/leonoff.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Jaime Leonoff</h5>
        <p class="card-text">Leonoff signed with the Connecticut Whale in 2015, going 7-3-0.</p>
        <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=203263" target="_blank" class="btn btn-primary">Read More</a>
        `;
    } else 
    if (day === 4) {
        daily.innerHTML = `
        <h5 class="card-title-top">Throwback Thursday</h5>
        <img class="card-img-top" src="img/palmateer_throwback.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Mike Palmateer</h5>
        <p class="card-text">Palmateer rocked this bucket for seven years playing for the maple Leafs.</p>
        <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=4121" target="_blank" class="btn btn-primary">Read More</a>
        `;
    } else if (day === 5) {
        daily.innerHTML = `
        <h5 class="card-title-top">Flashback Friday</h5>
        <img class="card-img-top" src="img/brodeur.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Martin Brodeur</h5>
        <p class="card-text">Arguably the greatest goaltender ever, Brodeur wore this mask for most of this career.</p>
        <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=587" target="_blank" class="btn btn-primary">Read More</a>
        `;
    } else {
        daily.innerHTML = `
        <h5 class="card-title-top">Saturday Shootout</h5>
        <img class="card-img-top" src="img/miller.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Ryan Miller</h5>
        <p class="card-text">Miller is second on the NHL's all time shootout wins list, with 59 wins.</p>
        <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=45065" target="_blank" class="btn btn-primary">Read More</a>
        `;
    }
  }

  dailyContent();


//   Creating random goalie mask when site is opened

function randomGoalieCard() {
    let n = Math.floor(Math.random() * 7) + 1;
     if (n === 1) {
        randomGoalie.innerHTML = `
        <img class="card-img-top" src="img/kolzig.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Olaf Kolzig</h5>
          <p class="card-text">Kolzig's nickname, "Godzilla", is well represented on this mask, featuring the gold and silver Kaiju.</p>
          <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=2774" target="_blank" class="btn btn-primary">Read More</a>
          `
    } else if (n === 2) {
        randomGoalie.innerHTML = `
        <img class="card-img-top" src="img/luongo.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Roberto Luongo</h5>
          <p class="card-text">Backstopping the Canucks to the Finals in 2011, Luongo went 15-10 in the playoffs.</p>
          <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=26791" target="_blank" class="btn btn-primary">Read More</a>

          `
} else if (n === 3) {
    randomGoalie.innerHTML = `
               <img class="card-img-top" src="img/giguere-avalanche.jpg" alt="Card image cap">
               <div class="card-body">
                 <h5 class="card-title">J.S. Giguere</h5>
                 <p class="card-text">Signing with the Avalanche in 2011, Giguere would wear this lid for three years.</p>
                 <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=16003" target="_blank" class="btn btn-primary">Read More</a>
      `
} else if (n === 4) {
    randomGoalie.innerHTML = `
    <img class="card-img-top" src="img/subban.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Malcolm Subban</h5>
      <p class="card-text">Before being traded to Chicago, Subban put up a record of 31-21-7 in Vegas</p>
      <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=124602" target="_blank" class="btn btn-primary">Read More</a>
      `
} else if (n === 5) {
    randomGoalie.innerHTML = `
    <img class="card-img-top" src="img/turco.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Marty Turco</h5>
      <p class="card-text">Believeing gargoyles were protectors might explain why Turco had them on every mask he wore.</p>
      <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=22022" target="_blank" class="btn btn-primary">Read More</a>
      `
} else if (n === 6) {
    randomGoalie.innerHTML = `
    <img class="card-img-top" src="img/theodore.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Jose Theodore</h5>
      <p class="card-text">Showcasing gargoyles watching over the Montreal skyline, Theodore wore this mask for 10 years.</p>
      <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=14080" target="_blank" class="btn btn-primary">Read More</a>
      `
} else if (n === 7) {
    randomGoalie.innerHTML = `
    <img class="card-img-top" src="img/kipper.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Miikka Kiprusoff</h5>
      <p class="card-text">Kipper's play and the flaming skulls made his mask iconic during his time in Calgary. </p>
      <a href="https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=15587" target="_blank" class="btn btn-primary">Read More</a>
      `}
      console.log(n);
}

randomGoalieCard();


// creating random mask when button is clicked
let r = document.getElementById("randomer");

r.addEventListener("click", () => {
    randomGoalieCard();
    console.log("test");
});



// Search function 

function filterSearch() {
    var input, filter, con, card, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    con = document.getElementById("news-container");
    card = con.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
        a = card[i].getElementsByTagName("h3")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter)===0) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}