function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_gcwzll4"
    const templateID = "template_hfn35i8"

    emailjs.send(serviceID,templateID,params)
    .then(
    res => {
            document.getElementById("name").value = ''
            document.getElementById("email").value = ''
            document.getElementById("message").value = ''
            console.log(res)
            alert('Your message has been sent sucessfully')

        })
    .catch((err) => console.log(err))
}

function sendBookingTravel(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        travel: document.getElementById("travel").dataset.value
    };
    const serviceID = "service_gcwzll4"
    const templateID = "template_86ja7l6"

    emailjs.send(serviceID,templateID,params)
    .then(
    res => {
            document.getElementById("name").value = ''
            document.getElementById("email").value = ''
            document.getElementById("travel").value = ''
            console.log(res)
            alert('Your message has been sent sucessfully')
            location='/pricing.html'
        })
    .catch((err) => console.log(err))
}

