
const params = new URLSearchParams(window.location.search);
const stream = params.get('stream');

// Asignar el stream al iframe
if (stream) {
    document.getElementById('reproductor').src = stream;
} else {
    document.getElementById('reproductor').src = "https://la12hd.com/vivo/canal.php?stream=espn"; // Canal por defecto
}