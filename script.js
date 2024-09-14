function countdown(date, elementId) {
  const countdownDate = new Date(date).getTime(); // Assuming date is in UTC format

  const intervalId = setInterval(() => {
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const currentTime = new Date(now).getTime(); // Current time in IST

    const distance = countdownDate - currentTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML = `<span style="background-color: red; ">${days} Days</span> ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    if (distance < 0) {
      clearInterval(intervalId);
      document.getElementById(elementId).innerHTML = "EXPIRED";
    }
  }, 1000);
}

// Start countdowns
countdown("2024-09-18T04:30:00Z", "july-compartment-timer");
