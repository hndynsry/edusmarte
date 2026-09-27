// ==============================
// NAVIGASI HALAMAN
// ==============================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");


    // Mengubah menu aktif
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    navItems.forEach(item => {

        if (item.getAttribute("onclick") === `showPage('${pageId}')`) {
            item.classList.add("active");
        }

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==============================
// NOTIFIKASI
// ==============================

function showNotification() {

    alert(
        "🔔 Notifikasi EduSmart\n\n" +
        "• Ada tugas baru\n" +
        "• Jadwal pelajaran besok\n" +
        "• Jangan lupa belajar!"
    );

}


// ==============================
// MATERI
// ==============================

function bukaMateri(namaMateri) {

    alert(
        "📚 Materi " + namaMateri +
        "\n\nMateri pembelajaran akan dibuka di sini."
    );

}


// ==============================
// SEARCH MATERI
// ==============================

function searchMateri() {

    const input =
        document.getElementById("searchMateri")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".materi-card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

}


// ==============================
// TUGAS
// ==============================

function selesaiTugas(button) {

    const card = button.parentElement;

    const badge = card.querySelector(".badge");

    if (badge) {

        badge.innerText = "Selesai";

        badge.classList.remove("red");
        badge.classList.add("green");

        button.remove();

        alert("✅ Tugas berhasil ditandai sebagai selesai!");

    }

}


// ==============================
// KUIS
// ==============================

function mulaiKuis() {

    const quizArea =
        document.getElementById("quizArea");

    quizArea.innerHTML = `

        <div class="quiz-card" style="margin-top:20px">

            <h2>Soal 1</h2>

            <p>
                Ilmu yang mempelajari kehidupan
                masyarakat disebut...
            </p>

            <button
                class="start-btn"
                onclick="jawabKuis('benar')">
                Sosiologi
            </button>

            <br><br>

            <button
                class="start-btn"
                onclick="jawabKuis('salah')">
                Biologi
            </button>

        </div>

    `;

}


function jawabKuis(jawaban) {

    const quizArea =
        document.getElementById("quizArea");

    if (jawaban === "benar") {

        quizArea.innerHTML = `

            <div class="quiz-card" style="margin-top:20px">

                <div class="quiz-icon">🎉</div>

                <h2>Jawaban Benar!</h2>

                <p>
                    Sosiologi adalah ilmu yang
                    mempelajari masyarakat dan
                    hubungan sosial.
                </p>

                <button
                    class="start-btn"
                    onclick="selesaiKuis()">
                    Lihat Nilai
                </button>

            </div>

        `;

    } else {

        quizArea.innerHTML = `

            <div class="quiz-card" style="margin-top:20px">

                <div class="quiz-icon">😊</div>

                <h2>Belum Tepat</h2>

                <p>
                    Coba pelajari kembali materi
                    tentang ilmu sosial.
                </p>

                <button
                    class="start-btn"
                    onclick="mulaiKuis()">
                    Coba Lagi
                </button>

            </div>

        `;

    }

}


function selesaiKuis() {

    const quizArea =
        document.getElementById("quizArea");

    quizArea.innerHTML = `

        <div class="quiz-card" style="margin-top:20px">

            <div class="quiz-icon">🏆</div>

            <h2>Kuis Selesai!</h2>

            <h1
