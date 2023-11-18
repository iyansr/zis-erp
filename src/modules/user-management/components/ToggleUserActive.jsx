const ToggleUserActive = ({ data }) => {
  return (
    <input
      type="checkbox"
      className="toggle toggle-xs toggle-accent mr-2"
      defaultChecked={data.user_status === 1}
    />
  );
};

export default ToggleUserActive;
