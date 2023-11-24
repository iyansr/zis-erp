import { keepPreviousData, useQuery } from '@tanstack/react-query';

import api from '@/modules/shared/libs/axios';

const request = async (params = {}) => {
  const { page = 1 } = params || {};
  const { data } = await api.request({
    method: 'GET',
    url: '/gl-accounts',
    params: {
      page,
      ...params,
    },
  });

  return data;
};

const useQueryGLAccount = (params = {}) => {
  return useQuery({
    queryKey: ['all-gl-account', params],
    queryFn: () => request(params),
    placeholderData: keepPreviousData,
  });
};

export default useQueryGLAccount;
