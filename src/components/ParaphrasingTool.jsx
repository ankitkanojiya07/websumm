import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const ParaphrasingTool = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center">
      <div className="container mx-auto p-4 max-w-5xl w-full">
        {/* Header - Sticky */}
        <header className="sticky top-0 bg-gray-900 z-10 flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold">webSum</h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex justify-center gap-6">
          {/* Main Editor - Split into two sections */}
          <div className="flex gap-6 w-full">
            {/* Left Section */}
            <div className="flex-1 bg-gray-800 rounded-lg p-6">
              {/* Text Area */}
              <div className="bg-gray-900 rounded-lg p-6 mb-4 min-h-[300px] border border-gray-700">
                <textarea
                  className="w-full h-full min-h-[280px] bg-transparent outline-none resize-none"
                  placeholder="Enter your text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              {/* Bottom Actions */}
              <div className="flex justify-end">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
                  Generate
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 bg-gray-800 rounded-lg p-6">
              {/* Text Area */}
              <div className="bg-gray-900 rounded-lg p-6 mb-4 min-h-[300px] border border-gray-700">
                <textarea
                  className="w-full h-full min-h-[280px] bg-transparent outline-none resize-none"
                  placeholder="Generated text will appear here..."
                  value={outputText}
                  onChange={(e) => setOutputText(e.target.value)}
                  readOnly
                />
              </div>
              {/* Bottom Actions */}
              <div className="flex justify-end gap-2">
                <button className="border border-green-500 text-green-500 px-8 py-3 rounded-lg hover:bg-green-500 hover:text-white">
                  Copy
                </button>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 mt-8 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} webSum All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ParaphrasingTool;
