import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Toast } from '@/modules/shared/components/Toast';
import api from '@/modules/shared/libs/axios';

const mutation = async ({ id }) => {
  const { data } = await api.request({
    method: 'PUT',
    url: `/programs/status/${id}`,
    data: {
      program_status: 2,
    },
  });

  return data;
};

const useMutateApproveProgram = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: mutation,
    onSuccess: () => {
      Toast.show({
        message: 'Berhasil approve program',
      });
      queryClient.invalidateQueries('all-program');
    },

    onError: () => {
      Toast.show({
        message: 'Gagal approve program',
        type: 'error',
      });
    },
  });
};

export default useMutateApproveProgram;
