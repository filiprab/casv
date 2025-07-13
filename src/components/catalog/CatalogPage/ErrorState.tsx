interface ErrorStateProps {
  error: string;
}

export default function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-400 mb-4">Error loading CVE data:</p>
        <p className="text-gray-300">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
}