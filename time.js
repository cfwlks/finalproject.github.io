<script>
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        var timeString = hours + ':' + minutes + ':' + seconds;
        document.getElementById('current-time').textContent = timeString;
    }

    setInterval(updateTime, 1000); // Update the time every second
    updateTime(); // Initialize the time on page load
</script>
