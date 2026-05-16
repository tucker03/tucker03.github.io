function alertHelloWorld() {
    alert("hello world");
}

const btn = document.getElementById("Bigger");
if (btn) {
    btn.addEventListener("click", alertHelloWorld);
    btn.addEventListener("click", makeBigger);
}


function makeBigger() {
    const text = document.getElementById("Text");
    if (text) {
        text.style.fontSize = "24pt";
    }
}

const fancyBtn = document.getElementById("fancy");
if (fancyBtn) {
    fancyBtn.addEventListener("change", alertHelloWorld);
    fancyBtn.addEventListener("change", FancyShymancy);
}

const boringBtn = document.getElementById("boring");
if (boringBtn) {
    boringBtn.addEventListener("change", alertHelloWorld);
    boringBtn.addEventListener("change", BoringBetty);
}

function FancyShymancy() {
    const text = document.getElementById("Text");
    if (text) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }
}

function BoringBetty() {
    const text = document.getElementById("Text");
    if (text) {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

const mooBtn = document.getElementById("Moo");
if (mooBtn) {
    mooBtn.addEventListener("click", alertHelloWorld);
    mooBtn.addEventListener("click", Moo);
}

function Moo() {
    const text = document.getElementById("Text");
    if (text) {
        text.value = text.value.toUpperCase();
        var parts = text.value.split(".");
        text.value = parts.join("-Moo.");
    }
}
