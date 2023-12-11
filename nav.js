document.addEventListener("DomContentLoaded", function () {
    const navBarToggle = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navBarDefault = document.querySelector("#navbar-default"); /*NavBar Variables ends here**/

    
    navbarToggle.addEventListener("click", () => {
      console.log('navBar clicked')
      navbarContent.classList.toggle("hidden");
    });
  });