type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="text-slate-900 bg-slate-100 h-screen dark:bg-slate-900 dark:text-slate-100 ">
        <div className="bg-amber-500 max-w-screen-lg mx-auto px-8 ">
          {children}
        </div>
      </div>
    </>
  );
}
