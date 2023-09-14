function sendMessage(name, email, subject, content){
    const userRequest = [
        {
            name: name,
            email: email,
            subject: subject,
            content: content
        }
    ]

    console.log(userRequest);


    this.name.value = ''
}

module.exports = { sendMessage };