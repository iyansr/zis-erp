import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Toast } from '@/modules/shared/components/Toast';
import api from '@/modules/shared/libs/axios';

const mutation = async (body = {}) => {
  const { data } = await api.request({
    method: 'POST',
    url: `/gl-accounts`,
    data: body,
  });

  return data;
};

const useMutateAddGLAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: mutation,
    onSuccess: () => {
      Toast.show({
        message: 'Berhasil tambah gl-account',
      });
      queryClient.invalidateQueries('all-gl-account');
    },

    onError: () => {
      Toast.show({
        message: 'Gagal tambah gl-account',
        type: 'error',
      });
    },
  });
};

export default useMutateAddGLAccount;
