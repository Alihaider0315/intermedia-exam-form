function getForm() {
    var imageInput = document.getElementById("uplodimage");
    var fullnameInput = document.getElementById("name");
    var fathernameInput = document.getElementById("father");
    var dateInput = document.getElementById("date");
    var addressInput = document.getElementById("address");
    var emailInput = document.getElementById("mail");
    var contectInput = document.getElementById("contect");
    var cnicInput = document.getElementById("nic");
    var nationalityInput = document.getElementById("national");
    var postcodeInput = document.getElementById("post");
    var selectInput = document.getElementById("droppop");
    var numInput = document.getElementById("num");
    var bordInput = document.getElementById("bord");
    var rollnoInput = document.getElementById("rollno");
    var yearInput = document.getElementById("year");
    var fileInput = document.getElementById("choose");
    var filedInput = document.getElementById("choose1");
    var fulfileInput = document.getElementById("choose2");
    var suboneInput = document.getElementById("urdu");
    var subtwoInput = document.getElementById("essy");
    var subthreeInput = document.getElementById("tong");
    var subfourInput = document.getElementById("histroy");
    var subfiveInput = document.getElementById("eng");
    var subsixInput = document.getElementById("adv");
    var subsevenInput = document.getElementById("islamiyat");
    var subeightInput = document.getElementById("civics");
    var subnightInput = document.getElementById("account");
    var subtenInput = document.getElementById("commerce");
    var sub11tInput = document.getElementById("eco");
    var sub12Input = document.getElementById("math");



    var a = imageInput.value;
    var b = fullnameInput.value;
    var c = fathernameInput.value;
    var d = dateInput.value;
    var e = addressInput.value;
    var f = emailInput.value;
    var g = contectInput.value;
    var h = cnicInput.value;
    var i = nationalityInput.value;
    var j = postcodeInput.value;
    var k = selectInput.value;
    var l = numInput.value;
    var m = bordInput.value;
    var n = rollnoInput.value;
    var o = yearInput.value;
    var p = fileInput.value;
    var q = filedInput.value;
    var r = suboneInput.value;
    var s = subtwoInput.value;
    var t = subthreeInput.value;
    var u = subfourInput.value;
    var v = subfiveInput.value;
    var w = subsixInput.value;
    var x = subsevenInput.value;
    var y = subeightInput.value;
    var z = subnightInput.value;
    var ab = subtenInput.value;
    var ac = sub11tInput.value;
    var ad = sub12Input.value;

    document.write(a, b, c, d, e, f, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, ab, ac, ad,);
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function subonly(checkbox) {
    var checkboxes = document.getElementsByName('checked')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
