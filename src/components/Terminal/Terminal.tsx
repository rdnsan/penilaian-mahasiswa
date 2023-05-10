interface TerminalProps {
  children?: React.ReactNode;
  /**
   * terminal title
   */
  title?: string;
  command?: string;
}

export function Terminal({ children, title = 'Terminal', command }: TerminalProps) {
  return (
    <div className="mx-auto w-full">
      <div className="mx-auto h-64 w-full rounded border-black bg-black subpixel-antialiased shadow-2xl">
        <div
          className="flex h-6 items-center rounded-t border-b border-gray-500 bg-white text-center text-black"
          id="headerTerminal"
        >
          <div
            className="ml-2 flex h-3 w-3 items-center rounded-full border-red-900 bg-red-500 text-center shadow-inner"
            id="closebtn"
          ></div>
          <div
            className="ml-2 h-3 w-3 rounded-full border-yellow-900 bg-yellow-500 shadow-inner"
            id="minbtn"
          ></div>
          <div
            className="ml-2 h-3 w-3 rounded-full border-green-900 bg-green-500 shadow-inner"
            id="maxbtn"
          ></div>
          <div className="mx-auto pr-16" id="terminaltitle">
            <p className="text-center text-sm">{title}</p>
          </div>
        </div>
        <div
          className="custom-scroll h-60 overflow-auto rounded-b bg-black pl-1 pt-1 font-mono text-xs text-green-300"
          id="console"
        >
          <p className="pb-1">rdnsan@Rdnsan-MacBook-Pro ~ % {command}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
