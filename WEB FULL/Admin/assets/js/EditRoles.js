document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-button');
    const deleteButtons = document.querySelectorAll('.delete-button');

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const role = this.getAttribute('data-role');
            const email = this.getAttribute('data-email');
            const password = this.getAttribute('data-password');
            const badge = this.getAttribute('data-badge');
            const register = this.getAttribute('data-register');

            document.getElementById('editAdminId').value = id;
            document.getElementById('editAdminRole').value = role;
            document.getElementById('editAdminEmail').value = email;
            document.getElementById('editAdminPassword').value = password;
            document.getElementById('editAdminBadge').value = badge;
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            document.getElementById('deleteAdminId').value = id;
        });
    });
});