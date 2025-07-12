// লগইন ফাংশন
function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const found = users.find(u => u.username === user && u.password === pass);

    if (found) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("display-name").innerText = found.name;
        document.getElementById("login-error").innerText = "";
    } else {
        document.getElementById("login-error").innerText = "Invalid Credentials!";
        document.getElementById("login-error").style.color = "red";
    }
}

// UID প্রক্রিয়া করা (UID + Password ইনপুট থেকে)
function processUID() {
    const input = document.getElementById("uid-input").value.trim();
    if (!input) return alert("Please paste your UID list.");

    const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    let uidPassArr = lines.map(line => {
        const parts = line.split(/\s+/); // split by whitespace or tab
        return { uid: parts[0], pass: parts[1] || "" };
    });

    // ডুপ্লিকেট রিমুভ এবং ডুপ্লিকেট গণনা
    let uniqueMap = new Map();
    let duplicatesCount = 0;
    uidPassArr.forEach(item => {
        const key = item.uid + '|' + item.pass;
        if (uniqueMap.has(key)) {
            duplicatesCount++;
        } else {
            uniqueMap.set(key, item);
        }
    });

    const uniqueUIDPass = Array.from
