import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Toast } from '@/modules/shared/components/Toast';
import api from '@/modules/shared/libs/axios';

const mutation = async (body = {}) => {
  const { data } = await api.request({
    method: 'PUT',
    url: `/document-types/${body.id}`,
    data: body,
  });

  return data;
};

const useMutateUdpateDocumentType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: mutation,
    onSuccess: () => {
      Toast.show({
        message: 'Berhasil tambah tipe dokumen',
      });
      queryClient.invalidateQueries('all-document-types');
    },

    onError: () => {
      Toast.show({
        message: 'Gagal tambah gl-account',
        type: 'error',
      });
    },
  });
};

export default useMutateUdpateDocumentType;
