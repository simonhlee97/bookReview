function importData() {
    d3.json("../data/sendgrid.json", function (mail) {
        console.log(mail);
    })
}