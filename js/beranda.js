const Pembuka = document.createElement("h3");
Pembuka.innerText = "Peserta Joints Camp";
const targeth5 = document.getElementById("Pembuka");
targeth5.appendChild(Pembuka);

const bawah = document.getElementById("atas");
bawah.childNodes[0];
bawah.removeChild(bawah.childNodes[0]);

const form = document.getElementById("forum");
form.childNodes[1];
form.removeChild(form.childNodes[1]);
const newelm = document.createElement("p");
newelm.innerText = "Silahkan Isi Klik Tombol di Bawah Ini";
form.replaceChild(newelm, form.childNodes[1]);

const formCon = document.getElementById("form");
const hubungi = document.getElementById("hubungi"); //hubungi button
const contact = document.getElementById("contact-row");

function openForm(){
formCon.innerHTML = 
`<div class="col-md-7 aos-init" data-aos="fade-right" data-aos-duration="650">
<form action="" method="POST">
    <div class="form-floating mb-3">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Nama anda" required="">
       
    </div>
    <div class="form-floating mb-3">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="email@example.com" required="">
       
    </div>
    <div class="form-floating mb-3">
        <label for="subject">Subject</label>
        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subjek" required="">
       
    </div>
    <div class="form-floating mb-3">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" name="message" placeholder="Isi pesan" style="height: 120px;" required=""></textarea>
     
    </div>
    <button type="submit" name="submit" class="btn btn-primary mt-3 submit">
        Kirim
    </button>
</form>
</div>`;
contact.removeChild(hubungi);
}

const button = document.getElementById("submit")
button.addEventListener("click", () => console.log("CLICK"))