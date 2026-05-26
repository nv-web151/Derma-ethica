// PROMENA BOJA POZADINE

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "green";
  document.body.className = `theme-${savedTheme}`;

  const themeButtons = document.querySelectorAll(".theme-btn");

  themeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const theme = this.getAttribute("data-theme");

      document.body.className = `theme-${theme}`;

      localStorage.setItem("theme", theme);
    });
  });

  // VALIDACIJA KONTAKT FORME

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Molimo Vas da popunite sva polja!");
        return;
      }

      if (!phone || phone.length < 9) {
        alert(
          "Molimo Vas unesite validan broj telefona (samo cifre, minimum 9)!",
        );
        return;
      }

      const emailProvera = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailProvera.test(email)) {
        alert("Molimo Vas unesite ispravnu email adresu!");
        return;
      }

      if (message.length < 10) {
        alert("Poruka mora imati najmanje 10 karaktera!");
        return;
      }

      alert("Poruka uspešno poslata!");
      contactForm.reset();
    });
  }

  // PRAVLJENJE REZERVACIJA

  const reservationForm = document.getElementById("reservationForm");

  if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const clientName = document.getElementById("clientName").value.trim();
      const treatment = document.getElementById("treatment").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      if (!clientName || !treatment || !date || !time) {
        alert("Molimo Vas da popunite sva polja!");
        return;
      }

      const reservationsContainer = document.getElementById(
        "reservationsContainer",
      );

      const noReservations =
        reservationsContainer.querySelector(".no-reservations");

      if (noReservations) {
        noReservations.remove();
      }

      const reservationCard = document.createElement("div");

      reservationCard.className = "reservation-card";

      const dateObj = new Date(date);
      const formattedDate = dateObj.toLocaleDateString("sr-RS", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      reservationCard.innerHTML = `  
    <h4>Rezervacija</h4>
    <p><strong>Klijent:</strong> ${clientName}</p>
    <p><strong>Tretman:</strong> ${treatment}</p>
    <p><strong>Datum:</strong> ${formattedDate}</p>
    <p><strong>Vreme:</strong> ${time}</p>
    `;

      reservationsContainer.appendChild(reservationCard);

      reservationForm.reset();

      alert("Rezervacija uspešno kreirana!");
    });
  }

  // SHOW / HIDE DUGME

  const toggleInfo = document.getElementById("toggleInfo");

  const additionalInfo = document.getElementById("additionalInfo");

  if (toggleInfo && additionalInfo) {
    toggleInfo.addEventListener("click", function () {
      if (
        additionalInfo.style.display === "none" ||
        additionalInfo.style.display === ""
      ) {
        additionalInfo.style.display = "block";
        toggleInfo.textContent = "Sakrij informacije";
      } else {
        additionalInfo.style.display = "none";
        toggleInfo.textContent = "Prikaži više informacija";
      }
    });
  }

  // NAVIGACIONI MENI

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  // VALIDACIJA DATUMA

  const dateInput = document.getElementById("date");

  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];

    dateInput.setAttribute("min", today);
  }
});
