import useMutateUpdateUser from '../hooks/useMutateUpdateUser';

const ToggleUserActive = ({ data }) => {
  const { mutate, isPending } = useMutateUpdateUser();

  return (
    <input
      disabled={isPending}
      type="checkbox"
      className="toggle toggle-xs toggle-accent mr-2"
      defaultChecked={data.user_status === 1}
      onChange={(e) => {
        mutate({
          id: data.user_id,
          user_status: e.target.checked ? 1 : 0,
        });
      }}
    />
  );
};

export default ToggleUserActive;
