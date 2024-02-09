// Countdown function
function countdown(date, elementId) {
    const countdownDate = new Date(date + "+05:30").getTime();
  
    const intervalId = setInterval(() => {
      const now = new Date().getTime() + (5.5 * 60 * 60 * 1000); // IST offset in milliseconds
      const distance = countdownDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById(elementId).innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  
      if (distance < 0) {
        clearInterval(intervalId);
        document.getElementById(elementId).innerHTML = "EXPIRED";
      }
    }, 1000);
  }
  
  // Start countdowns
  countdown("2024-02-27T10:30:00", "chemistry-timer");
  countdown("2024-03-04T10:30:00", "physics-timer");
  countdown("2024-03-09T10:30:00", "maths-timer");
  countdown("2024-03-19T10:30:00", "biology-timer");
  