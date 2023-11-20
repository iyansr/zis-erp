const Sidebar = () => {
  return (
    <div className="w-full bg-primary h-12 sticky top-0 z-50 flex items-center px-6 justify-between">
      <div>
        <img src="/icon.png" alt="Zis Icon" className="h-8 w-8" />
      </div>
      <div>
        <div className="avatar cursor-pointer">
          <div className="w-8 rounded-full">
            <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="User Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
