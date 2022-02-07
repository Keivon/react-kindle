import "./sidebar.scss";

function Sidebar() {

  const nav = document.querySelector(".nav-container");

  if (nav) {
    const toggle = nav.querySelector(".nav-toggle");
  
    if (toggle) {
      toggle.addEventListener("click", () => {
        if (nav.classList.contains("is-active")) {
          nav.classList.remove("is-active");
        } else {
          nav.classList.add("is-active");
        }
      });
  
      nav.addEventListener("blur", () => {
        nav.classList.remove("is-active");
      });
    }
  }

  return (
    <div class="nav-container" tabindex="0">
      <div class="nav-toggle"></div>

      <nav class="nav-items">
        <a class="nav-item" href="#">
          Яблоко
        </a>
        <a class="nav-item" href="#">
          Вишня
        </a>
        <a class="nav-item" href="#">
          Арбуз
        </a>
      </nav>
    </div>
  );
}


