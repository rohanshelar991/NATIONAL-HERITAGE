<script>
    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = this.href;
        });
    });
</script>