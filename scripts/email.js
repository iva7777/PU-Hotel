sendContactEmail = () => {
    let names = document.getElementById("names").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hotel.pu@gmail.com",
        Password : "86C392C1E52066917734D958F3C50797ED66",
        To : 'hotel.pu@gmail.com',
        From : "hotel.pu@gmail.com",
        Subject : "Ново съобщение",
        Body : `<html><h2></h2><strong>Съобщение от ${names} - ${email}</strong><br></br>${message}</html>`
    }).then(
    message => { 
        console.log(message);
        window.location.href = 'contacts.html';
    }
    );
    
}

sendReservationEmail = () => {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let checkIn = document.getElementById("check-in").value;
    let checkOut = document.getElementById("check-out").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hotel.pu@gmail.com",
        Password : "86C392C1E52066917734D958F3C50797ED66",
        To : email,
        From : "hotel.pu@gmail.com",
        Subject : "Ново съобщение",
        Body : `<html><h2>Здравей, ${name} ${surname}</h2><br><br>Ние се радваме, че избрахте Хотел ПУ. Избрахте периода <b>${checkIn} - ${checkOut}</b>. Молим да запомните вашата парола, защото ще ви трябва за отключване на стаята.<br><br><b>Желаем ви лек престой.</b><br><b>Екипът на Хотел ПУ</b></html>`
    }).then(
    message => {
        console.log(message);
        window.location.href = 'index.html';
    }
    );
}