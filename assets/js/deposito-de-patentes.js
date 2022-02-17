const perfilUsuario = document.querySelector('.usuario');

// window.alert('Seja bem vindo: ' + perfilUsuario.textContent);
const idusuario = perfilUsuario.textContent.split(' ');

perfilUsuario.style = 'visibility: visible;'
perfilUsuario.innerHTML = `${idusuario[0].split('')[0].toUpperCase()}${idusuario[0].split('')[1].toUpperCase()}`

perfilUsuario.classList.add('perfilUsuario');
