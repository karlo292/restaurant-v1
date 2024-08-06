const closeSidebar = document.getElementById('close-sidebar');
const openSidebar = document.getElementById('open-sidebar');

const sidebar = document.getElementById('sidebar');

function hideSidebar() {
    sidebar.style.display = 'none';
    // Show the openSidebar button after the sidebar is hidden
    openSidebar.style.display = 'block';
    // Ensure the parent element of openSidebar is visible
    openSidebar.parentElement.style.display = 'block'; // Make sure this line is present
    sidebar.removeEventListener('animationend', hideSidebar); // Remove the listener to avoid it being called multiple times
}



closeSidebar.addEventListener('click', () => {
    // Start the close animation
    sidebar.style.animation = 'closeSidebarAnimation 0.5s forwards';
    // Listen for when the animation ends and then hide the sidebar and show the openSidebar button
    sidebar.addEventListener('animationend', hideSidebar);
    openSidebar.parentElement.style.animation = 'openNavbarAnimation 0.5s forwards';
});

openSidebar.addEventListener('click', () => {

    // Hide the openSidebar button
    openSidebar.style.display = 'none';
    openSidebar.parentElement.style.display = 'none';

    // Immediately display the sidebar so the opening animation can be seen
    sidebar.style.display = 'block';
    // Start the open animation
    sidebar.style.animation = 'openSidebarAnimation 0.5s forwards';


});