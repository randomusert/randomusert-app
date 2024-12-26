function askNotificationPermission() {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications.");
      return;
    }
    Notification.requestPermission().then((permission) => {
      // set the button to shown or hidden, depending on what the user answers
      notificationBtn.style.display = permission === "granted" ? "none" : "block";
    });
  }

function createNotification() {
    const text = `hi!`;
    const notification = new Notification("notification", { body: text, icon: img });
}