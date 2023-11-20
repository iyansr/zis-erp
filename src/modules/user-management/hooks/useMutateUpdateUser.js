import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Toast } from '@/modules/shared/components/Toast';
import api from '@/modules/shared/libs/axios';

const mutation = async ({ id, user_nama, username, user_status, user_phone, user_type }) => {
  const { data } = await api.request({
    method: 'PUT',
    url: `/users/update/${id}`,
    data: {
      user_nama,
      username,
      user_status,
      user_phone,
      user_type: user_type ? Number(user_type) : undefined,
    },
  });

  return data;
};

const useMutateUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: mutation,
    onSuccess: () => {
      Toast.show({
        message: 'Berhasil mengubah data user',
      });
      queryClient.invalidateQueries('all-users');
    },

    onError: () => {
      Toast.show({
        message: 'Gagal mengubah data user',
        type: 'accent',
      });
    },
  });
};

export default useMutateUpdateUser;
