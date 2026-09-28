function iniciarToast() {

    window.mostrarToast = function () {

        const toast = document.getElementById("toast");

        if (!toast) {
            return;
        }

        toast.style.display = "block";

        setTimeout(function () {
            toast.style.display = "none";
        }, 3000);
    };
}