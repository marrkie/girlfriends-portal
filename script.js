// Function to toggle the sidebar (show/hide)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // If the sidebar is hidden, slide it in
    if (sidebar.style.left === '-250px' || sidebar.style.left === '') {
        sidebar.style.left = '0';
        body.style.marginLeft = '250px'; // Push the main content aside
    } else {
        sidebar.style.left = '-250px'; // Hide the sidebar
        body.style.marginLeft = '0'; // Restore the content position
    }
}