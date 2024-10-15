  //The toggle function
  // function toggleMenu() {
  //   const asideMenu = document.getElementById ('asideMenu');
  //   const menuIcon = document.getElementById('menuIcon');
  //   const menuIcon2 = document.getElementById('menuIcon2'); // Get the overlay element

    // Toggle the display of aside-1 and aside-2
    // if (asideMenu.style.display === 'none') {
    //   menuIcon.style.display = 'block';
    //   menuIcon2.style.display = 'none';
    
 
    // } else {
    //   asideMenu.style.display = 'block';
    //   menuIcon2.style.display = 'block';


  
    
  // Open the menuIcon
document.getElementById('menuIcon').addEventListener('click', function() {
  const asideMenu = document.getElementById('asideMenu');
  const menuIcon2 = document.getElementById('menuIcon2');
  const menuIcon = document.getElementById('menuIcon');

  // Show menuIcon2 and asideMenu and remove menuIcon
  
  menuIcon2.style.display = 'block';
  asideMenu.style.display = 'block';
  menuIcon.style.display = 'none'

document.getElementById('menuIcon2') .addEventListener('click', function(){
  const asideMenu = document.getElementById('asideMenu');
  const menuIcon2 = document.getElementById('menuIcon2');
  const menuIcon = document.getElementById('menuIcon');

  // Show MenuIcon and remove menuIcon2/asideMenu
  
  menuIcon2.style.display = 'none';
  asideMenu.style.display = 'none';
  menuIcon.style.display = 'block'
})

});


