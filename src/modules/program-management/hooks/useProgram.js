import { keepPreviousData, useQuery } from '@tanstack/react-query';

import api from '@/modules/shared/libs/axios';

const request = async (params = {}) => {
  const { data } = await api.request({
    method: 'GET',
    url: '/programs',
    params,
  });

  return data;
};

const useProgram = (params = {}) => {
  return useQuery({
    queryKey: ['all-program', params],
    queryFn: () => request(params),
    placeholderData: keepPreviousData,
  });
};

export default useProgram;
