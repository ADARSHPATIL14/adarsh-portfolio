import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check, Play } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: string;
}

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'whoami',
      output: 'adarsh-patil (Computer Science Engineering Student)',
    },
    {
      command: 'focus',
      output: 'C++ • Java • DSA • SQL • Software Development',
    },
    {
      command: 'status',
      output: 'Learning & Building... (Exploring systems, algorithms & practical tools)',
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const commandMap: Record<string, string> = {
    whoami: 'adarsh-patil (Computer Science Engineering Student)',
    focus: 'C++ • Java • DSA • SQL • Software Development',
    status: 'Learning & Building... (Exploring systems, algorithms & practical tools)',
    skills: 'C • C++ • Java • Python • MySQL • Git • Problem Solving',
    help: 'Available commands: whoami, focus, status, skills, clear',
  };

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (commandMap[trimmed]) {
      setHistory((prev) => [
        ...prev,
        { command: trimmed, output: commandMap[trimmed] },
      ]);
    } else if (trimmed !== '') {
      setHistory((prev) => [
        ...prev,
        {
          command: trimmed,
          output: `bash: ${trimmed}: command not found. Try 'help', 'whoami', 'focus', 'status'`,
        },
      ]);
    }
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRunCommand(inputVal);
    }
  };

  const handleCopy = () => {
    const textToCopy = history
      .map((item) => `$ ${item.command}\n${item.output}`)
      .join('\n\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden border border-[#262626] bg-[#111111]/90 backdrop-blur-xl shadow-2xl shadow-black/80 font-mono text-sm transition-all hover:border-cyan-500/30">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#151515] border-b border-[#262626]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40"></div>
          <span className="text-xs text-[#a1a1aa] ml-2 flex items-center gap-1.5 font-medium">
            <TerminalIcon size={13} className="text-cyan-400" />
            adarsh@portfolio: ~
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-[#a1a1aa] hover:text-[#f5f5f5] text-xs flex items-center gap-1 transition-colors p-1 rounded hover:bg-[#262626]"
          title="Copy terminal session"
          aria-label="Copy terminal text"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400 text-[11px]">Copied</span>
            </>
          ) : (
            <Copy size={13} />
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 space-y-3.5 min-h-[260px] max-h-[380px] overflow-y-auto text-xs sm:text-sm">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-[#f5f5f5] font-semibold">{item.command}</span>
            </div>
            <div className="text-[#a1a1aa] pl-4 border-l border-[#262626]/80 text-xs sm:text-sm leading-relaxed">
              {item.output}
            </div>
          </div>
        ))}

        {/* Current Active Input Prompt */}
        <div className="flex items-center gap-2 text-cyan-400 pt-1">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'status', 'skills', or 'clear'..."
            className="flex-1 bg-transparent border-none outline-none text-[#f5f5f5] placeholder:text-[#52525b] font-mono text-xs sm:text-sm"
            aria-label="Terminal command input"
          />
          <span className="text-cyan-400 animate-blink select-none font-bold">█</span>
        </div>
      </div>

      {/* Terminal Quick Command Chips */}
      <div className="px-4 py-2.5 bg-[#151515]/80 border-t border-[#262626] flex flex-wrap items-center gap-2 text-[11px]">
        <span className="text-[#71717a] font-sans">Quick execute:</span>
        {['whoami', 'focus', 'status', 'skills', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleRunCommand(cmd)}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#202020] text-[#a1a1aa] hover:text-cyan-300 hover:bg-cyan-950/40 border border-[#2e2e2e] hover:border-cyan-500/30 transition-all font-mono"
          >
            <Play size={9} className="text-cyan-400" />
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
