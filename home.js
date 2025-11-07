
    function toggleMenu() {
      document.getElementById('mainNav').classList.toggle('show');
    }
 

    document.getElementById('bookingForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const carType = document.getElementById('car-type').value;
      const pickup = document.getElementById('pickup').value;
      const dropoff = document.getElementById('dropoff').value;

      const message = `🚗 *New Car Booking Request* 🚗%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Car Type:* ${carType}%0A
*Pick-up Date:* ${pickup}%0A
*Drop-off Date:* ${dropoff}`;

      // Replace this number with your actual WhatsApp number (with country code, no plus sign)
      const phoneNumber = "9950771298"
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

      window.open(whatsappURL, '_blank');
    });