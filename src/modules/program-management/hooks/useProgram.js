import { useQuery } from '@tanstack/react-query';

import api from '@/modules/shared/libs/axios';

const request = async (params = {}) => {
  const { page = 1, category = '', keyword = '', order = '', sortBy = '' } = params || {};
  const { data } = await api.request({
    method: 'GET',
    url: '/home/program',
    params: {
      page,
      category,
      keyword,
      order,
      sortBy,
    },
  });

  return data;
};

const useProgram = (params = {}) => {
  return useQuery({
    queryKey: ['all-program', params],
    queryFn: () => request(params),
  });
};

export default useProgram;
