// Replace this with the hotel's real booking email before publishing.
const HOTEL_BOOKING_EMAIL = "hotel@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

const checkin = document.querySelector('input[name="checkin"]');
const checkout = document.querySelector('input[name="checkout"]');
const today = new Date();
const todayISO = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
checkin.min = todayISO;
checkout.min = todayISO;
checkin.addEventListener("change", () => {
  checkout.min = checkin.value || todayISO;
  if (checkout.value && checkin.value && checkout.value <= checkin.value) {
    checkout.value = "";
  }
});

document.getElementById("booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name");
  const checkIn = form.get("checkin");
  const checkOut = form.get("checkout");
  if (checkOut <= checkIn) {
    document.getElementById("form-status").textContent = "Check-out date must be after check-in date.";
    return;
  }
  const subject = encodeURIComponent("Hotel booking enquiry - " + name);
  const body = encodeURIComponent(
    "Booking enquiry\n\nName: " + name +
    "\nCheck-in: " + checkIn +
    "\nCheck-out: " + checkOut +
    "\nAdults: " + form.get("adults") +
    "\nChildren: " + form.get("children") +
    "\nRoom type: " + form.get("room") +
    "\nContact: " + form.get("contact") +
    "\n\nPlease confirm availability and total price."
  );
  document.getElementById("form-status").textContent = "Opening your email app to send the booking enquiry. This does not confirm a reservation.";
  window.location.href = "mailto:" + HOTEL_BOOKING_EMAIL + "?subject=" + subject + "&body=" + body;
});
