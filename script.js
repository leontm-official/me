

//Konstante Variablen
const SliderImg = document.getElementById("slider-img");
const SliderTxt = document.getElementById("slider-txt");
const SliderRelated = document.getElementById("slider-related");
const scrollHeight = screen.height / 100; 
const scrollTriggerPoint1 = scrollHeight * 110;
const scrollTriggerPoint2 = scrollHeight * 230;
const scrollTriggerPoint3 = scrollHeight * 320;
//Variablen
let Slider_Index = 1;
let point1 = false;
let point2 = false;
let point3 = false;
var Email = { 
    send: function (a) { return new Promise(function (n, e) { 
        a.nocache = Math.floor(1e6 * Math.random() + 1), 
        a.Action = "Send"; 
        var t = JSON.stringify(a); 
        Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", 
        t, function (e) { n(e) }) }) }, 
        ajaxPost: function (e, n, t) { 
            var a = Email.createCORSRequest("POST", e); 
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
            a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) 
        }, 
        ajax: function (e, n) { 
            var t = Email.createCORSRequest("GET", e); 
            t.onload = function () { var e = t.responseText; null != n && n(e) }, 
            t.send() }, 
            createCORSRequest: function (e, n) { 
                var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t 
            }
    };
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//Funktionen
function Slider_IndexPlus() {
    Slider_Index = Slider_Index + 1;
    if (Slider_Index == "5") {
        Slider_Index = 1;
    }
};
function Slider_IndexMinus() {
    Slider_Index = Slider_Index - 1;
    if (Slider_Index == 0) {
        Slider_Index = 4;
    }
}
function AboutMe() {
    scrollTo(0, scrollHeight*85);
};
function Projects() {
    scrollTo(0, scrollHeight*150);
}
function Socials() {
    scrollTo(0, scrollHeight*327);
}
function ContactMe() {
    scrollTo(0, scrollHeight*500);
}
function ScrollWeiter() {
    scrollTo(0, scrollHeight* 85);
}
function ProjekteScroll() {
    scrollTo(0, scrollHeight*160);
}
function SprachenScroll() {
    scrollTo(0, scrollHeight*170);
}
function ErsterKontaktScroll() {
    scrollTo(0, scrollHeight*180);
}
function SpieleScroll() {
    scrollTo(0, scrollHeight*240)
}
function ErfolgeScroll() {
    scrollTo(0, scrollHeight*260)
}
function TwitchScroll() {
    scrollTo(0, scrollHeight* 330)
}
function DiscordScroll() {
    scrollTo(0, scrollHeight*350)
}
function InstagramScroll() {
    scrollTo(0, scrollHeight*370)
}
function TwitterScroll() {
    scrollTo(0, scrollHeight*390)
}
function YouTubeScroll() {
    scrollTo(0, scrollHeight* 410)
}
function SlideWeiter() {
    Slider_IndexPlus();
    if (Slider_Index == 1) {
        SliderImg.innerHTML = "<img class='slide-img' src='Leon™.png'>";
        SliderTxt.innerHTML = "Hey, ich bin der Leon™, ein deutscher Schüler der programmieren und Gamen liebt.";
        SliderRelated.innerHTML = "Artikel hierzu: <br><a onclick='AboutMeScroll()'>About Me</a>,<a onclick='GamingScroll()'>Gaming</a>";
    } else if (Slider_Index == 2) {
        SliderImg.innerHTML = "<img class='slide-img' src='Coding-Bild.jpg'>";
        SliderTxt.innerHTML = "Programmieren, also ich interresiere mich sehr für das Programmieren. Am liebsten Programmiere und Gestalte ich Websits wie diese. Was ich können wollen würde wäre das Programmieren von Desktop Anwendugen.";
        SliderRelated.innerHTML = "Artikel hierzu: <br><a onclick='ProgrammierenScroll()'>Programmieren und ich</a>,<a onclick='ProjekteScroll()'>Projekte</a>";
    } else if (Slider_Index == 3) {
        SliderImg.innerHTML = "<img class='slide-img' src='SocialMedia-Bild.jpg'>";
        SliderTxt.innerHTML = "Social Media und ich, das ist so ne Geschichte. Ich bin nicht sehr aktiv (persönlich) auf Social Media, aber ich habe großen Spaß am Moderieren verschiedener Chats oder Server.";
        SliderRelated.innerHTML = "Artikel hierzu: <br><a onclick='SocialMediaScroll()'>Social Media</a>, <a onclick='DiscordScroll()'>Discord</a>, <a onclick='TwitchScroll()'>Twitch</a>, <a href='https://linktr.ee/LeonTM>Mein LinkTree</a>";
    } else if (Slider_Index == 4) {
        SliderImg.innerHTML = "<img class='slide-img' src='Zocken-Bild.jpg'>";
        SliderTxt.innerHTML = "Wie gesagt, ich zocke auch gerne, am liebsten mit meinen Freunden. Das ganze natürlich nicht Competetiv (wäre schön), sondern nur zum Spaß. Ich spiele am liebsten Valorant und Brawl Stars aber auch andere Spiele.";
        SliderRelated.innerHTML = "Artikel hierzu: <br><a onclick='GamingScroll()'>Gaming</a>,<a onclick='ValorantScroll()'>Valorant</a>, <a onclick='BrawlStarsScroll()'>Brawl Stars</a>";
    }
}
function SlideZurück() {
    Slider_IndexMinus();
    if (Slider_Index == 1) {
        SliderImg.innerHTML = "<img class='slide-img' src='Leon™.png'>";
        SliderTxt.innerHTML = "Hey, ich bin der Leon™, ein deutscher Schüler der programmieren und Gamen liebt.";
        SliderRelated.innerHTML = "Artikel hierzu: <br><a onclick='AboutMeScroll()'>About Me</a>,<a onclick='GamingScroll()'>Gaming</a>";
    } else if (Slider_Index == 2) {
        SliderImg.innerHTML = "<img class='slide-img' src='Coding-Bild.jpg'>";
        SliderTxt.innerHTML = "Programmieren, also ich interresiere mich sehr für das Programmieren. Am liebsten Programmiere und Gestalte ich Websits wie diese. Was ich können wollen würde wäre das Programmieren von Desktop Anwendugen.";
        SliderRelated.innerHTML = "Artikel hierzu: <br><a onclick='ProgrammierenScroll()'>Programmieren und ich</a>,<a onclick='ProjekteScroll()'>Projekte</a>";
    } else if (Slider_Index == 3) {
        SliderImg.innerHTML = "<img class='slide-img' src='SocialMedia-Bild.jpg'>";
        SliderTxt.innerHTML = "Social Media und ich, das ist so ne Geschichte. Ich bin nicht sehr aktiv (persönlich) auf Social Media, aber ich habe großen Spaß am Moderieren verschiedener Chats oder Server.";
        SliderRelated.innerHTML = "Artikel hierzu: <br><a onclick='SocialMediaScroll()'>Social Media</a>, <a onclick='DiscordScroll()'>Discord</a>, <a onclick='TwitchScroll()'>Twitch</a>, <a href='https://linktr.ee/LeonTM>Mein LinkTree</a>";
    } else if (Slider_Index == 4) {
        SliderImg.innerHTML = "<img class='slide-img' src='Zocken-Bild.jpg'>";
        SliderTxt.innerHTML = "Wie gesagt, ich zocke auch gerne, am liebsten mit meinen Freunden. Das ganze natürlich nicht Competetiv (wäre schön), sondern nur zum Spaß. Ich spiele am liebsten Valorant und Brawl Stars aber auch andere Spiele.";
        SliderRelated.innerHTML = "Artikel hierzu: <br><a onclick='GamingScroll()'>Gaming</a>,<a onclick='ValorantScroll()'>Valorant</a>, <a onclick='BrawlStarsScroll()'>Brawl Stars</a>";
    }
}
document.documentElement.style.height = "300vh";

// getting 1% of screen height

document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop >= scrollTriggerPoint1) {
    if (point1 == false){
        point1 = true;
        point1F();
    };
  }
});
document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop >= scrollTriggerPoint2) {
        if (point2 == false) {
            point2 = true;
            point2F();
        }
    }
});
document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop >= scrollTriggerPoint3) {
        if (point3 == false) {
            point3 = true;
            point3F();
        }
    }
})

function point1F() {
    console.log("Animation1 startet...");
    document.getElementById("InnerSection1").classList.remove("hide");
    document.getElementById("InnerSection2").classList.remove("hide");
    document.getElementById("InnerSection3").classList.remove("hide");
    document.getElementById("InnerSection1").classList.add("getInLinks");
    document.getElementById("InnerSection2").classList.add("getInRechts");
    document.getElementById("InnerSection3").classList.add("getInLinks");
}
function point2F() {
    console.log("Animation2 startet...");
    document.getElementById("InnerSection4").classList.remove("hide");
    document.getElementById("InnerSection5").classList.remove("hide");
    document.getElementById("InnerSection4").classList.add("getInRechts");
    document.getElementById("InnerSection5").classList.add("getInLinks");
}
function point3F() {
    console.log("Animation3 startet...");
    document.getElementById("InnerSection6").classList.remove("hide");
    document.getElementById("InnerSection7").classList.remove("hide");
    document.getElementById("InnerSection8").classList.remove("hide");
    document.getElementById("InnerSection9").classList.remove("hide");
    document.getElementById("InnerSection10").classList.remove("hide");
    document.getElementById("InnerSection6").classList.add("getInLinks");
    document.getElementById("InnerSection7").classList.add("getInRechts");
    document.getElementById("InnerSection8").classList.add("getInLinks");
    document.getElementById("InnerSection9").classList.add("getInRechts");
    document.getElementById("InnerSection10").classList.add("getInLinks");
}
function writing() {
    let Text = document.getElementById("email-body").value;
    if (Text.length == 500) {
        document.getElementById("email-erfolg").innerHTML = "Du kannst nur 500 Zeichen schreiben.";
        setTimeout(()=>document.getElementById("email-erfolg").innerHTML = "", 5000);
    }

}
function SendEmail() {
    if (document.getElementById("email-adresse").value.match(validRegex)) {
        console.log("Email ist richtig!");
        if (document.getElementById("email-body").value == "") {
            EmailSenden();
        } else {
            document.getElementById("email-erfolg").innerHTML = "Sie müssen eine Nachricht angeben!"
        }
    } else {
        console.log("Email ist falsch");
        document.getElementById("email-erfolg").innerHTML = "Ihre Email stimmt nicht!";
    }
}
function EmailSenden() {
    if (document.getElementById)
    Email.send({
        SecureToken: "cf0c347d-87f7-4da7-a0b7-5b91649eb49d",
        To : 'leon.cool.item@gmail.com',
        From : document.getElementById("email-adresse").value,
        Subject : "Neues Kontakt Formular",
        Body : document.getElementById("email-body").value
    })
    .then(message => alert(message))
} 
function WebsiteStart() {
    document.getElementById("InnerSection1").classList.add("hide");
    document.getElementById("InnerSection2").classList.add("hide");
    document.getElementById("InnerSection3").classList.add("hide");
    document.getElementById("InnerSection4").classList.add("hide");
    document.getElementById("InnerSection5").classList.add("hide");
    document.getElementById("InnerSection6").classList.add("hide");
    document.getElementById("InnerSection7").classList.add("hide");
    document.getElementById("InnerSection8").classList.add("hide");
    document.getElementById("InnerSection9").classList.add("hide");
    document.getElementById("InnerSection10").classList.add("hide");
    document.getElementById("slider").classList.add("hide");
    document.getElementById("btnWeiter").classList.add("hide");
    setTimeout(()=> {
        document.getElementById("slider").classList.remove("hide");
        document.getElementById("btnWeiter").classList.remove("hide");
        document.getElementById("meB").classList.add("hide");
    }, 30000);
}  
WebsiteStart();