let enviarFormulario = document.getElementById("enviarFormulario");


enviarFormulario.addEventListener("click", () => {
    Swal.fire({
        title: 'Seguro que lo quieres enviar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Enviado',
            'su mensaje sera contestado a la brevedad',
            'success'
          )
        }
      })
});

let borrarFormulario = document.getElementById("borrarFormulario");

borrarFormulario.addEventListener("click", () => {
    Swal.fire({
        title: 'Estas seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borralo!'
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