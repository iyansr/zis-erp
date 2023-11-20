import { forwardRef, useImperativeHandle, useState } from 'react';

export const ToastComponent = forwardRef((_, ref) => {
  const [state, setState] = useState({
    show: false,
    type: 'success',
    message: '',
  });

  useImperativeHandle(ref, () => ({
    show: ({ type = 'success', message = '' }) => {
      setState({
        show: true,
        type,
        message,
      });
      setTimeout(() => {
        setState({ show: false, type: 'success', message: '' });
      }, 3000);
    },
  }));

  if (!state.show) {
    return null;
  }

  const getVariant = () => {
    switch (state.type) {
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-error';
      case 'warning':
        return 'alert-warning';
      default:
        return 'alert-success';
    }
  };

  return (
    <div className="relative z-50">
      <div className="toast toast-top toast-end z-40">
        <div className={`alert ${getVariant()} text-white`}>
          <span>{state.message}</span>
        </div>
      </div>
    </div>
  );
});

ToastComponent.displayName = 'Toast';

let toastRef = null;

export const setToastRef = (ref) => {
  toastRef = ref;
};

const getToast = () => {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (toastRef) {
        resolve(toastRef);
        clearInterval(interval);
      }
    }, 50);
  });
};

export const Toast = {
  show: ({ type = 'success', message = '' }) => {
    getToast().then((ref) => {
      ref.show({ type, message });
    });
  },
};
