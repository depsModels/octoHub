"use client";
export default function Modal({ open, success, message, onClose }: { open: boolean; success: boolean | null; message: string; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-octo-blue/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-octo-blue p-8 rounded-xl border border-octo-yellow/20 shadow-xl max-w-md w-full mx-4 z-10 text-center">
        <div className={success ? 'text-octo-yellow' : 'text-red-500'}>
          {success ? (
            <svg className="h-16 w-16 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          ) : (
            <svg className="h-16 w-16 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          )}
        </div>
        <p className={`text-xl ${success ? 'text-octo-yellow' : 'text-red-400'} mb-4`}>{message}</p>
        <button onClick={onClose} className="px-6 py-2 bg-octo-yellow text-octo-blue rounded-lg hover:bg-octo-green hover:text-white transition-colors">Fechar</button>
      </div>
    </div>
  );
}