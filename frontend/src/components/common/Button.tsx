export const ActionButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button className="flex items-center gap-2 text-gray-900 hover:text-red-500 transition-colors">
    {icon}
    <span className="text-sm font-medium hidden lg:block">{label}</span>
  </button>
);