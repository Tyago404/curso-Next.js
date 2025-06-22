import clsx from 'clsx';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1

      //Para formatar classes instalamos uma extensao aonde você seleciona as classes e com o botão direito do mouse
      //Clique em converter espaços em arrays e em seguida salve com 'ctrl+s'
        className={clsx(
          'text-2xl',
          'text-blue-300',
          'bg-blue-50',
          'hover:bg-blue-800',
          'hovertext-white',
          'transition-all',
          'duration-700',
        )}
      >
        My title
      </h1>
    </div>
  );
}
