
    const options = (phone, service, message ) => ({
        method: 'POST',
        headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': `${process.env.BREVO_API_KEY}`
        },
        body: JSON.stringify({
        sender: {email: 'elfaresservices11@gmail.com', name: 'Ann'},
        params: {FNAME: 'Joe', LNAME: 'Doe'},
        to: [{email: 'elfaresservices11@gmail.com', name: 'elfares services'}],
        htmlContent: `<!DOCTYPE html> <html> <body> <h1>Hey elfaresserice,</h1> there is a new customer wants to contact you: </br> Phone Numer: ${phone}, </br> service: ${service}, </br> Message: ${message} </br> Regareds </body> </html>`,
        subject: 'A new customer registered',
    
        })
    });
  
export const sendEmail = (phone, service, message )=> fetch('https://api.brevo.com/v3/smtp/email', options(phone, service, message))
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));