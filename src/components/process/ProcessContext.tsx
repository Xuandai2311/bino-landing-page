'use client';

import { createContext, use, useState } from 'react';

type ProcessType = 'kol' | 'business';

type ProcessContextType = {
  processType: ProcessType;
  setProcessType: (type: ProcessType) => void;
};

const ProcessContext = createContext<ProcessContextType | undefined>(undefined);

export function useProcessType() {
  const context = use(ProcessContext);
  if (!context) {
    throw new Error('useProcessType must be used within ProcessProvider');
  }
  return context;
}

export function ProcessProvider({ children }: { children: React.ReactNode }) {
  const [processType, setProcessType] = useState<ProcessType>('kol');

  return (
    <ProcessContext value={{ processType, setProcessType }}>
      {children}
    </ProcessContext>
  );
}
