const DahboardItem = ({ item }) => {
  return (
    <div className="aspect-square p-4 justify-between flex flex-col bg-white shadow-lg h-56 w-56 rounded-lg border border-zinc-200">
      <p className="text-lg">{item.title}</p>
      <p className="text-zinc-500">{item.description}</p>

      <div className="flex items-center space-x-3">
        <item.Icon className="text-primary h-8 w-8" />
        <p className="text-4xl font-light text-slate-600">{item.iconText ?? ''}</p>
      </div>
    </div>
  );
};

export default DahboardItem;
