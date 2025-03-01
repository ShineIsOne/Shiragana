const hiraganaQuestions = [
    { character: 'あ', answer: 'a' },
    { character: 'い', answer: 'i' },
    { character: 'う', answer: 'u' },
    { character: 'え', answer: 'e' },
    { character: 'お', answer: 'o' },
    { character: 'か', answer: 'ka' },
    { character: 'き', answer: 'ki' },
    { character: 'く', answer: 'ku' },
    { character: 'け', answer: 'ke' },
    { character: 'こ', answer: 'ko' },
    { character: 'さ', answer: 'sa' },
    { character: 'し', answer: 'shi' },
    { character: 'す', answer: 'su' },
    { character: 'せ', answer: 'se' },
    { character: 'そ', answer: 'so' },
    { character: 'た', answer: 'ta' },
    { character: 'ち', answer: 'chi' },
    { character: 'つ', answer: 'tsu' },
    { character: 'て', answer: 'te' },
    { character: 'と', answer: 'to' },
    { character: 'が', answer: 'ga' },
    { character: 'ぎ', answer: 'gi' },
    { character: 'ぐ', answer: 'gu' },
    { character: 'げ', answer: 'ge' },
    { character: 'ご', answer: 'go' },
    { character: 'ざ', answer: 'za' },
    { character: 'じ', answer: 'ji' },
    { character: 'ず', answer: 'zu' },
    { character: 'ぜ', answer: 'ze' },
    { character: 'ぞ', answer: 'zo' },
    { character: 'だ', answer: 'da' },
    { character: 'ぢ', answer: 'ji' },
    { character: 'づ', answer: 'zu' },
    { character: 'で', answer: 'de' },
    { character: 'ど', answer: 'do' },
    { character: 'な', answer: 'na' },
    { character: 'に', answer: 'ni' },
    { character: 'ぬ', answer: 'nu' },
    { character: 'ね', answer: 'ne' },
    { character: 'の', answer: 'no' },
    { character: 'は', answer: 'ha' },
    { character: 'ひ', answer: 'hi' },
    { character: 'ふ', answer: 'fu' },
    { character: 'へ', answer: 'he' },
    { character: 'ほ', answer: 'ho' },
    { character: 'ば', answer: 'ba' },
    { character: 'び', answer: 'bi' },
    { character: 'ぶ', answer: 'bu' },
    { character: 'べ', answer: 'be' },
    { character: 'ぼ', answer: 'bo' },
    { character: 'ぱ', answer: 'pa' },
    { character: 'ぴ', answer: 'pi' },
    { character: 'ぷ', answer: 'pu' },
    { character: 'ぺ', answer: 'pe' },
    { character: 'ぽ', answer: 'po' },
    { character: 'ま', answer: 'ma' },
    { character: 'み', answer: 'mi' },
    { character: 'む', answer: 'mu' },
    { character: 'め', answer: 'me' },
    { character: 'も', answer: 'mo' },
    { character: 'ら', answer: 'ra' },
    { character: 'り', answer: 'ri' },
    { character: 'る', answer: 'ru' },
    { character: 'れ', answer: 're' },
    { character: 'ろ', answer: 'ro' },
    { character: 'や', answer: 'ya' },
    { character: 'ゆ', answer: 'yu' },
    { character: 'よ', answer: 'yo' },
    { character: 'わ', answer: 'wa' },
    { character: 'を', answer: 'wo' },
    { character: 'ん', answer: 'n' },
    { character: 'きゃ', answer: 'kya' },
    { character: 'きゅ', answer: 'kyu' },
    { character: 'きょ', answer: 'kyo' },
    { character: 'しゃ', answer: 'sha' },
    { character: 'しゅ', answer: 'shu' },
    { character: 'しょ', answer: 'sho' },
    { character: 'ちゃ', answer: 'cha' },
    { character: 'ちゅ', answer: 'chu' },
    { character: 'ちょ', answer: 'cho' },
    { character: 'にゃ', answer: 'nya' },
    { character: 'にゅ', answer: 'nyu' },
    { character: 'にょ', answer: 'nyo' },
    { character: 'ひゃ', answer: 'hya' },
    { character: 'ひゅ', answer: 'hyu' },
    { character: 'ひょ', answer: 'hyo' },
    { character: 'みゃ', answer: 'mya' },
    { character: 'みゅ', answer: 'myu' },
    { character: 'みょ', answer: 'myo' },
    { character: 'りゃ', answer: 'rya' },
    { character: 'りゅ', answer: 'ryu' },
    { character: 'りょ', answer: 'ryo' },
    { character: 'ぎゃ', answer: 'gya' },
    { character: 'ぎゅ', answer: 'gyu' },
    { character: 'ぎょ', answer: 'gyo' },
    { character: 'じゃ', answer: 'ja' },
    { character: 'じゅ', answer: 'ju' },
    { character: 'じょ', answer: 'jo' },
    { character: 'びゃ', answer: 'bya' },
    { character: 'びゅ', answer: 'byu' },
    { character: 'びょ', answer: 'byo' },
    { character: 'ぴゃ', answer: 'pya' },
    { character: 'ぴゅ', answer: 'pyu' },
    { character: 'ぴょ', answer: 'pyo' },
];

let remainingQuestions = [...hiraganaQuestions].sort(() => Math.random() - 0.5);
let answeredHiragana = new Set();
let score = 0;

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const feedbackElement = document.getElementById("feedback");
const unlockedCharacters = document.getElementById("unlocked-characters");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const scoreElement = document.getElementById("score");
const quizPopup = document.getElementById("quizPopup");
const finishVideo = document.getElementById("finishVideo");

function playSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

function updateScore() {
    scoreElement.textContent = `Soal: ${score}/104`;
}

function resetQuiz() {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        answeredHiragana.clear();
        remainingQuestions = [...hiraganaQuestions].sort(() => Math.random() - 0.5);
        score = 0;
        updateScore();
        unlockedCharacters.innerHTML = "";
        feedbackElement.textContent = "";
        quizPopup.classList.remove("show");
        loadQuestion();
        document.body.classList.remove("fade-out");
        document.body.classList.add("fade-in");
    }, 500);
}

function loadQuestion() {
    if (answeredHiragana.size === 104) {
        document.getElementById("popupTitle").textContent = "Kuis Selesai";
        document.getElementById("popupSubtitle").textContent = "by Shine";
        quizPopup.classList.add("show");
        finishVideo.play();
    }

    if (remainingQuestions.length === 0 && answeredHiragana.size < 104) {
        remainingQuestions = hiraganaQuestions.filter(q => !answeredHiragana.has(q.character)).sort(() => Math.random() - 0.5);
    }

    questionElement.classList.remove("fade-in");
    questionElement.classList.add("fade-out");
    setTimeout(() => {
        let nextQuestion = remainingQuestions.pop();
        questionElement.textContent = nextQuestion.character;
        questionElement.dataset.answer = nextQuestion.answer;
        questionElement.classList.remove("fade-out");
        questionElement.classList.add("fade-in");
        answerInput.value = "";
        feedbackElement.style.opacity = "0";
        answerInput.focus();
    }, 500);
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questionElement.dataset.answer;

    // Cek apakah sedang dalam mode Fun
    if (funModeButton.classList.contains("active") || document.querySelector(".filter-btn.fun-mode")) {
        if (userAnswer === correctAnswer) {
            playSound(correctSound); // Tambahkan efek suara benar
            feedbackElement.textContent = "Benar!";
            feedbackElement.style.color = "green";
        } else {
            playSound(wrongSound); // Tambahkan efek suara salah
            feedbackElement.textContent = `Salah! Jawaban yang benar adalah ${correctAnswer}.`;
            feedbackElement.style.color = "red";
        }
        
        feedbackElement.style.opacity = "1";
    
        setTimeout(() => {
            feedbackElement.style.opacity = "0";
            loadFunMode(); // Lanjut ke soal berikutnya tanpa skor
        }, 1000);
    
        return; // Langsung keluar dari fungsi, tidak mengupdate skor atau mengakhiri kuis
    }    

    // Mode kuis biasa (hitung skor dan cek apakah kuis selesai)
    if (userAnswer === correctAnswer) {
        score++;
        updateScore();
        feedbackElement.textContent = "Benar!";
        feedbackElement.style.color = "green";
        playSound(correctSound);
        answeredHiragana.add(questionElement.textContent);
        updateUnlockedCharacters();
        setTimeout(() => { feedbackElement.style.opacity = "0"; loadQuestion(); }, 1000);
    } else {
        feedbackElement.textContent = `Salah! Jawaban yang benar adalah ${correctAnswer}.`;
        feedbackElement.style.color = "red";
        playSound(wrongSound);
        setTimeout(() => { feedbackElement.style.opacity = "0"; loadQuestion(); }, 1000);
    }

    feedbackElement.style.opacity = "1";
}

function updateUnlockedCharacters() {
    unlockedCharacters.innerHTML = "";
    answeredHiragana.forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("unlocked-item");
        unlockedCharacters.appendChild(span);
    });
}

document.getElementById("resetButton").addEventListener("click", resetQuiz);

answerInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkAnswer();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    loadQuestion();
    questionElement.style.opacity = "1";
});

// Event listener untuk reset otomatis setelah video selesai
finishVideo.addEventListener("ended", function() {
    resetQuiz();
});

// Tambahkan event listener untuk tombol-tombol filter
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Hapus class active dari semua tombol
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Tambahkan class active ke tombol yang diklik
        this.classList.add('active');
        
        // Terapkan filter sesuai dengan data-group tombol
        const group = this.getAttribute('data-group');
        applyHiraganaFilter(group);
    });
});

// Fungsi untuk menerapkan filter hiragana
function applyHiraganaFilter(group) {
    let filteredQuestions = [];
    
    // Filter berdasarkan kelompok yang dipilih
    switch(group) {
        case "all":
            filteredQuestions = [...hiraganaQuestions];
            break;
        case "basic":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['あ', 'い', 'う', 'え', 'お'].includes(q.character));
            break;
        case "k":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご'].includes(q.character));
            break;
        case "s":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['さ', 'し', 'す', 'せ', 'そ', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ'].includes(q.character));
            break;
        case "t":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど'].includes(q.character));
            break;
        case "n":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['な', 'に', 'ぬ', 'ね', 'の'].includes(q.character));
            break;
        case "h":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['は', 'ひ', 'ふ', 'へ', 'ほ', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'].includes(q.character));
            break;
        case "m":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['ま', 'み', 'む', 'め', 'も'].includes(q.character));
            break;
        case "y":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['や', 'ゆ', 'よ'].includes(q.character));
            break;
        case "r":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['ら', 'り', 'る', 'れ', 'ろ'].includes(q.character));
            break;
        case "w":
            filteredQuestions = hiraganaQuestions.filter(q => 
                ['わ', 'を', 'ん'].includes(q.character));
            break;
    }
    
    // Simpan grup aktif untuk referensi di fungsi lain
    currentGroup = group;
    
    // Reset dan mulai quiz dengan soal yang difilter
    remainingQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);
    answeredHiragana.clear();
    score = 0;
    updateScore();
    unlockedCharacters.innerHTML = "";
    feedbackElement.textContent = "";
    
    // Load soal berikutnya
    loadQuestion();
}

// Tambahkan variabel untuk melacak grup yang aktif
let currentGroup = "all";

// Modifikasi fungsi updateScore
function updateScore() {
    let totalQuestions;
    
    // Menghitung jumlah pertanyaan berdasarkan filter aktif
    switch(currentGroup) {
        case "basic": totalQuestions = 5; break;
        case "k": totalQuestions = 10; break;
        case "s": totalQuestions = 10; break;
        case "t": totalQuestions = 10; break;
        case "n": totalQuestions = 5; break;
        case "h": totalQuestions = 15; break;
        case "m": totalQuestions = 5; break;
        case "y": totalQuestions = 3; break;
        case "r": totalQuestions = 5; break;
        case "w": totalQuestions = 3; break;
        default: totalQuestions = 104; break;
    }
    
    scoreElement.textContent = `Soal: ${score}/${totalQuestions}`;
}

// Modifikasi fungsi loadQuestion
function loadQuestion() {
    // Jika semua pertanyaan sudah dijawab dari grup yang aktif
    let totalQuestionsInGroup;
    switch(currentGroup) {
        case "basic": totalQuestionsInGroup = 5; break;
        case "k": totalQuestionsInGroup = 10; break;
        case "s": totalQuestionsInGroup = 10; break;
        case "t": totalQuestionsInGroup = 10; break;
        case "n": totalQuestionsInGroup = 5; break;
        case "h": totalQuestionsInGroup = 15; break;
        case "m": totalQuestionsInGroup = 5; break;
        case "y": totalQuestionsInGroup = 3; break;
        case "r": totalQuestionsInGroup = 5; break;
        case "w": totalQuestionsInGroup = 3; break;
        default: totalQuestionsInGroup = 104; break;
    }
    
    if (answeredHiragana.size >= totalQuestionsInGroup) {
        document.getElementById("popupTitle").textContent = "Kuis Selesai";
        document.getElementById("popupSubtitle").textContent = "by Shine";
        quizPopup.classList.add("show");
        finishVideo.play();
        return;
    }

    // Jika tidak ada pertanyaan tersisa tetapi belum semua dijawab
    if (remainingQuestions.length === 0) {
        // Filter hiragana yang belum dijawab sesuai dengan grup aktif
        let allQuestionsInGroup;
        
        switch(currentGroup) {
            case "basic":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['あ', 'い', 'う', 'え', 'お'].includes(q.character));
                break;
            case "k":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご'].includes(q.character));
                break;
            case "s":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['さ', 'し', 'す', 'せ', 'そ', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ'].includes(q.character));
                break;
            case "t":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど'].includes(q.character));
                break;
            case "n":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['な', 'に', 'ぬ', 'ね', 'の'].includes(q.character));
                break;
            case "h":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['は', 'ひ', 'ふ', 'へ', 'ほ', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'].includes(q.character));
                break;
            case "m":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['ま', 'み', 'む', 'め', 'も'].includes(q.character));
                break;
            case "y":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['や', 'ゆ', 'よ'].includes(q.character));
                break;
            case "r":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['ら', 'り', 'る', 'れ', 'ろ'].includes(q.character));
                break;
            case "w":
                allQuestionsInGroup = hiraganaQuestions.filter(q => 
                    ['わ', 'を', 'ん'].includes(q.character));
                break;
            default:
                allQuestionsInGroup = [...hiraganaQuestions];
                break;
        }
        
        remainingQuestions = allQuestionsInGroup
            .filter(q => !answeredHiragana.has(q.character))
            .sort(() => Math.random() - 0.5);
    }

    // Bagian selanjutnya tetap sama
    questionElement.classList.remove("fade-in");
    questionElement.classList.add("fade-out");
    setTimeout(() => {
        let nextQuestion = remainingQuestions.pop();
        questionElement.textContent = nextQuestion.character;
        questionElement.dataset.answer = nextQuestion.answer;
        questionElement.classList.remove("fade-out");
        questionElement.classList.add("fade-in");
        answerInput.value = "";
        feedbackElement.style.opacity = "0";
        answerInput.focus();
    }, 500);
}

// Set tombol "Semua" sebagai aktif saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.filter-btn[data-group="all"]').classList.add('active');
});

document.querySelector('.filter-btn[data-group="fun"]').addEventListener('click', function() {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    // Mode Fun: Selalu menampilkan hiragana tanpa skor atau batasan
    remainingQuestions = [...hiraganaQuestions].sort(() => Math.random() - 0.5);
    answeredHiragana.clear();
    scoreElement.style.display = "none"; // Sembunyikan skor
    document.querySelector('.unlocked-container').style.display = "none"; // Sembunyikan kotak jawaban
    unlockedCharacters.innerHTML = "";
    feedbackElement.textContent = "";

    loadFunMode();
});

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.getAttribute('data-group') !== "fun") {
            scoreElement.style.display = "block";
            document.querySelector('.unlocked-container').style.display = "block"; // Tampilkan kembali kotak "Jawaban"
        }
    });
});

const funModeButton = document.getElementById("funModeButton");

// Event listener untuk tombol filter huruf (A, K, S, T, N, H, M, Y, R, W)
filterButtons.forEach(button => {
    const group = button.getAttribute('data-group');

    if (["basic", "k", "s", "t", "n", "h", "m", "y", "r", "w"].includes(group)) {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active', 'fun-mode'));
            this.classList.add('active');

            // Reset tombol "Fun" ke mode biru dan nonaktifkan Fun
            funModeButton.classList.remove("active");    

            // Tampilkan tombol "Fun" di dekat tombol Reset
            funModeButton.style.display = "inline-block";
            funModeButton.setAttribute("data-group", group);
        });
    }
});

// Event listener untuk tombol "Fun" agar masuk ke mode Fun untuk huruf yang dipilih
funModeButton.addEventListener('click', function() {
    // Cek apakah tombol sudah dalam mode Fun
    if (this.classList.contains("active")) {
        // Jika sudah aktif, kembali ke mode kuis
        this.classList.remove("active");
        scoreElement.style.display = "block"; // Tampilkan skor kembali
        document.querySelector('.unlocked-container').style.display = "block"; // Tampilkan kotak jawaban
        applyHiraganaFilter(this.getAttribute("data-group")); // Kembali ke mode kuis
    } else {
        // Aktifkan mode Fun
        this.classList.add("active");

        const group = this.getAttribute("data-group");

        filterButtons.forEach(btn => btn.classList.remove('active', 'fun-mode'));
        document.querySelector(`.filter-btn[data-group="${group}"]`).classList.add('active', 'fun-mode');

        // Mode Fun hanya untuk huruf yang dipilih
        let filteredQuestions = [];
        
        switch(group) {
            case "basic":
                filteredQuestions = hiraganaQuestions.filter(q => ['あ', 'い', 'う', 'え', 'お'].includes(q.character));
                break;
            case "k":
                filteredQuestions = hiraganaQuestions.filter(q => ['か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご'].includes(q.character));
                break;
            case "s":
                filteredQuestions = hiraganaQuestions.filter(q => ['さ', 'し', 'す', 'せ', 'そ', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ'].includes(q.character));
                break;
            case "t":
                filteredQuestions = hiraganaQuestions.filter(q => ['た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど'].includes(q.character));
                break;
            case "n":
                filteredQuestions = hiraganaQuestions.filter(q => ['な', 'に', 'ぬ', 'ね', 'の'].includes(q.character));
                break;
            case "h":
                filteredQuestions = hiraganaQuestions.filter(q => ['は', 'ひ', 'ふ', 'へ', 'ほ', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'].includes(q.character));
                break;
            case "m":
                filteredQuestions = hiraganaQuestions.filter(q => ['ま', 'み', 'む', 'め', 'も'].includes(q.character));
                break;
            case "y":
                filteredQuestions = hiraganaQuestions.filter(q => ['や', 'ゆ', 'よ'].includes(q.character));
                break;
            case "r":
                filteredQuestions = hiraganaQuestions.filter(q => ['ら', 'り', 'る', 'れ', 'ろ'].includes(q.character));
                break;
            case "w":
                filteredQuestions = hiraganaQuestions.filter(q => ['わ', 'を', 'ん'].includes(q.character));
                break;
            default:
                filteredQuestions = [];
                break;
        }

        remainingQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);
        answeredHiragana.clear();

        // Sembunyikan skor dan kotak jawaban
        scoreElement.style.display = "none";
        document.querySelector('.unlocked-container').style.display = "none"; 
        feedbackElement.textContent = "";

        // Mulai mode Fun tanpa batasan
        loadFunMode();
    }
});

// Fungsi loadFunMode agar huruf tetap muncul tanpa skor
function loadFunMode() {
    if (remainingQuestions.length === 0) {
        remainingQuestions = [...hiraganaQuestions].sort(() => Math.random() - 0.5);
    }

    questionElement.classList.remove("fade-in");
    questionElement.classList.add("fade-out");

    setTimeout(() => {
        let nextQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
        questionElement.textContent = nextQuestion.character;
        questionElement.dataset.answer = nextQuestion.answer;
        questionElement.classList.remove("fade-out");
        questionElement.classList.add("fade-in");
        answerInput.value = "";
        feedbackElement.style.opacity = "0";
        answerInput.focus();
    }, 500);
}

    // **Pastikan kuis tidak selesai di mode Fun**
    quizPopup.classList.remove("show");
    finishVideo.pause();
    finishVideo.currentTime = 0;

// Sembunyikan tombol "Fun" di samping Reset saat memilih "Semua" atau "Fun" (filter utama)
document.querySelectorAll('.filter-btn[data-group="all"], .filter-btn[data-group="fun"]').forEach(button => {
    button.addEventListener('click', function() {
        funModeButton.style.display = "none";
        funModeButton.classList.remove("active"); // Pastikan kembali ke warna biru
    });
});

document.getElementById("submitButton").addEventListener("click", checkAnswer);
