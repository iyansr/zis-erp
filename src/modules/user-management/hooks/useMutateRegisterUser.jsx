import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Toast } from '@/modules/shared/components/Toast';
import api from '@/modules/shared/libs/axios';

const mutation = async ({ user_nama, username, user_phone, user_type }) => {
  const { data } = await api.request({
    method: 'POST',
    url: `/users/add`,
    data: {
      user_nama,
      username,
      user_phone,
      user_type: user_type ? Number(user_type) : undefined,
    },
  });

  return data;
};

const useMutateRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: mutation,
    onSuccess: () => {
      Toast.show({
        message: 'Berhasil register user',
      });
      queryClient.invalidateQueries('all-users');
    },

    onError: () => {
      Toast.show({
        message: 'Gagal register user',
        type: 'error',
      });
    },
  });
};

export default useMutateRegisterUser;
