<?php
$host = "127.0.0.1";
$user = "root";
$pass = "root";
$db   = "komen_db";

$konek = mysqli_connect($host, $user, $pass, $db);
// Cek apakah koneksi berhasil
if (!$konek) {
    die("Koneksi gagal: " . mysqli_connect_error());
} else {
    echo "terkoneksi dengan database komen_db";
}
?>
