let enviarFormulario = document.getElementById("enviarFormulario");


enviarFormulario.addEventListener("click", () => {
    Swal.fire({
        title: 'Seguro que lo quieres enviar?',
        text: "flksjdflkajsdh",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Enviado',
            'enviado',
            'success'
          )
        }
      })
});

let borrarFormulario = document.getElementById("borrarFormulario");

borrarFormulario.addEventListener("click", () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});