const formatDate = (dateString: string) => {
    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Format tanggal dua digit
    const month = months[date.getMonth()]; // Ambil nama bulan dari array
    const year = date.getFullYear(); // Ambil tahun

    return `${day} ${month} ${year}`;
};

export default formatDate;
