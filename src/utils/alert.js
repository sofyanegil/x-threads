import Swal from 'sweetalert2';

export const showSuccessAlert = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: message,
    timer: 1000,
  });
};

export const showErrorAlert = (errorMessage) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: errorMessage,
    showConfirmButton: true,
  });
};

export const showConfirmAlert = (message, confirmCallback) => {
  Swal.fire({
    icon: 'question',
    title: 'Confirm',
    text: message,
    showConfirmButton: true,
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      confirmCallback();
    }
  });
};
