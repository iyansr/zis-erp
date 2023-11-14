import { useQuery } from '@tanstack/react-query';

import api from '@/modules/shared/libs/axios';

const request = async (params = {}) => {
  const { page = 1, category = '', keyword = '', order = '', sortBy = '' } = params || {};
  const { data } = await api.request({
    method: 'GET',
    url: '/user/all-users',
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

const useQueryUsers = (params = {}) => {
  return useQuery({
    queryKey: ['all-users', params],
    queryFn: () => request(params),
  });
};

export default useQueryUsers;
