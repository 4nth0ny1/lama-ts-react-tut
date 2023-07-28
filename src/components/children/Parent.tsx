type ChildrenProps = {
  children: React.ReactNode;
};

export default function Parent({ children }: ChildrenProps) {
  return (
    <div className="border-2 border-slate-400 p-4">
      <h2>Parent Component</h2>
      {children}
    </div>
  );
}
