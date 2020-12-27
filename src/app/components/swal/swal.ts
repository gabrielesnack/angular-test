import Swal from 'sweetalert2'
import { IFeedback } from './types';

const feedback = async ({ title, text, type, confirmText, cancelText, showCancel} : IFeedback) => {
  const res = await Swal.fire({
    title,
    text,
    // icon: type,
    showCancelButton: !!showCancel || false,
    reverseButtons: !!showCancel || false,
    confirmButtonText: confirmText || 'Ok',
    cancelButtonText: cancelText || 'Fechar',
    customClass: {
      cancelButton: 'btn',
      confirmButton: 'btn'
    }
  }).then((result: any) => {
    if (result.value) {
      return 'ACCEPT';
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      return 'REFUSED';
    }
  })

  return res;
}

const swal = {
  feedback
}

export default swal;