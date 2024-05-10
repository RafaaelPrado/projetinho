document.addEventListener('DOMContentLoaded', (event) => {
    let index = 0;
    const members = document.querySelectorAll('.membro');
    const totalMembers = members.length;

    // Função para atualizar o membro visível
    function updateMemberDisplay() {
        // Ocultar todos os membros
        members.forEach(member => member.style.display = 'none');
        
        // Mostrar o membro atual
        members[index].style.display = 'block';
    }

    // Função para ir para o próximo membro
    function nextMember() {
        index = (index + 1) % totalMembers;
        updateMemberDisplay();
    }

    // Iniciar com o primeiro membro visível
    updateMemberDisplay();

    // Mudar para o próximo membro a cada 5 segundos
    setInterval(nextMember, 5000);
});
