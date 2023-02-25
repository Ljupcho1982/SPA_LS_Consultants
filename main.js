window.onload = function () {
  homePage();
  const navLinks = document.querySelectorAll("#link li");

  navLinks.forEach((obj) => {
    obj.addEventListener("click", pageLoad);
  });
};

function pageLoad() {
  switch (this.textContent) {
    case "Home":
      homePage(this);
      break;
    case "About Us":
      AboutUs(this);
      break;
    case "Our Team":
      ourTeam(this);
      break;
    case "Services":
      services(this);
      break;
    case "Contact US":
      ContactUS(this);

    default:
      break;
  }
}

//home Page

function homePage() {
  document.getElementById("container").innerHTML = " ";
  document.getElementById("container").innerHTML = `
   
  <div>
  <img src="./images/hero.jpg" alt="" style="height: 100%; width: 100%" />
</div>
  
 
    `;
}

//homePage();

function AboutUs() {
  document.getElementById(
    "container"
  ).innerHTML = `<marquee width="60%" direction="down" height="400px">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur laudantium autem voluptatum nisi magni nobis voluptatem similique illo dolore dignissimos ullam corrupti animi, labore consectetur explicabo qui id porro..
    </marquee> `;
}

function services() {
  document.getElementById("container").innerHTML = `
    
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/photovoltaic.jpeg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      
        <p>Foto Voltaici.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/National-Windmill-Day-min.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
        <p>Veternici.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/hydro.jpeg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
       
        <p>Hidro Centrali</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    
    `;
}

function ourTeam() {
  myObj = [
    {
      name: "Ljupcho Shemov",

      Position: "CEO",

      Projects: ".........",
    },
    {
      name: "Vasko Grkov",

      Position: "CEE",

      Projects: ".........",
    },
  ];
  document.getElementById("container").innerHTML = "";
  myObj.forEach((element) => {
    document.getElementById("container").innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${element.Position}</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">${element.Projects}</a>
      
    </div>
  </div>
 
    `;
  });
}

//Contact Page

function ContactUS() {
  document.getElementById("container").innerHTML = `<!--Section: Contact v.2-->
<section class="mb-4">

    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
            <form>

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control">
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control">
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" id="submitBtn">Send</a>
            </div>
            <div class="status"></div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
        <!--Grid column-->

    </div>

</section>
<!--Section: Contact v.2-->  `;
}

document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let jObject = {
      fname: document.getElementById("name").value,
      lname: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
    };
    let jString = JSON.stringify(jObject);
    localStorage.setItem("user", jString);
  });
