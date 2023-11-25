import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Toast } from '@/modules/shared/components/Toast';
import api from '@/modules/shared/libs/axios';

const mutation = async (body = {}) => {
  const { data } = await api.request({
    method: 'PUT',
    url: `/gl-accounts/${body.id}`,
    data: body,
  });

  return data;
};

const useMutateUpdateGLAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: mutation,
    onSuccess: () => {
      Toast.show({
        message: 'Berhasil ubah gl-account',
      });
      queryClient.invalidateQueries('all-gl-account');
    },

    onError: () => {
      Toast.show({
        message: 'Gagal ubah gl-account',
        type: 'error',
      });
    },
  });
};

export default useMutateUpdateGLAccount;
