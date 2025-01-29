document.addEventListener("DOMContentLoaded", function () {
    const beratBadanInput = document.getElementById("input-berat-badan");
    const tinggiBadanInput = document.getElementById("input-tinggi-badan");
    const resultBMI = document.getElementById("result-bmi");
    const rekomendasi = document.getElementById("result-rekomendasi");
    const bmiGraph = document.getElementById("bmi-graph");

    // Fungsi untuk menghitung BMI
    function hitungBMI(event) {
        event.preventDefault(); // Menghindari form refresh
        const beratBadan = parseFloat(beratBadanInput.value);
        const tinggiBadan = parseFloat(tinggiBadanInput.value) / 100;

        if (isNaN(beratBadan) || isNaN(tinggiBadan) || tinggiBadan <= 0) {
            alert("Masukkan berat dan tinggi badan yang valid!");
            return;
        }

        const bmi = beratBadan / (tinggiBadan * tinggiBadan);
        let status;
        let saran;
        let graphClass = '';
        let graphWidth = 0;

        // Tentukan status berdasarkan BMI dan beri warna pada grafik
        if (bmi < 18.5) {
            status = "Anda Kekurangan Berat Badan";
            saran = "Coba tingkatkan asupan kalori dan protein sehat.";
            graphClass = 'graph-underweight';
            graphWidth = Math.min(bmi * 10, 100);  // Maksimal 100%
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Berat Badan Anda Normal";
            saran = "Pertahankan pola makan sehat dan olahraga teratur.";
            graphClass = 'graph-normal';
            graphWidth = Math.min(bmi * 10, 100);  // Maksimal 100%
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            status = "Anda Kelebihan Berat Badan";
            saran = "Pertimbangkan pola makan lebih seimbang dan aktivitas fisik.";
            graphClass = 'graph-overweight';
            graphWidth = Math.min(bmi * 10, 100);  // Maksimal 100%
        } else {
            status = "Anda Mengalami Obesitas";
            saran = "Konsultasikan dengan ahli gizi atau dokter untuk pola hidup sehat.";
            graphClass = 'graph-obesity';
            graphWidth = Math.min(bmi * 10, 100);  // Maksimal 100%
        }

        // Menampilkan hasil BMI dan status
        resultBMI.innerHTML = `BMI: ${bmi.toFixed(2)} - ${status}`;
        rekomendasi.innerHTML = `Rekomendasi: ${saran}`;

        // Menampilkan grafik
        bmiGraph.style.width = `${graphWidth}%`;  // Set lebar grafik sesuai dengan hasil BMI
        bmiGraph.className = `graph ${graphClass}`;  // Menambahkan kelas untuk memberi warna pada grafik
    }

    // Tambahkan event listener pada form submit
    document.getElementById("bmi-form").addEventListener("submit", hitungBMI);
});
