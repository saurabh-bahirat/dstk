var menu = document.getElementById('menu');
    
    var menuList = document.getElementById('menuList');

    menu.addEventListener('click', function() {
      menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
    });