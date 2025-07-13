import React, { useState } from 'react';
import { FileText, Upload, Image, FileSpreadsheet, Globe, Video, Plus, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const KnowledgeBase = () => {
  const { t } = useTranslation();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const supportedFormats = [
    { name: t('seachat.knowledgeBase.supportedFormats.formats.pdf.name'), icon: FileText, color: 'text-red-500', count: t('seachat.knowledgeBase.supportedFormats.formats.pdf.count') },
    { name: t('seachat.knowledgeBase.supportedFormats.formats.excel.name'), icon: FileSpreadsheet, color: 'text-green-500', count: t('seachat.knowledgeBase.supportedFormats.formats.excel.count') },
    { name: t('seachat.knowledgeBase.supportedFormats.formats.word.name'), icon: FileText, color: 'text-blue-500', count: t('seachat.knowledgeBase.supportedFormats.formats.word.count') },
    { name: t('seachat.knowledgeBase.supportedFormats.formats.images.name'), icon: Image, color: 'text-purple-500', count: t('seachat.knowledgeBase.supportedFormats.formats.images.count') },
    { name: t('seachat.knowledgeBase.supportedFormats.formats.websites.name'), icon: Globe, color: 'text-teal-500', count: t('seachat.knowledgeBase.supportedFormats.formats.websites.count') },
    { name: t('seachat.knowledgeBase.supportedFormats.formats.videos.name'), icon: Video, color: 'text-orange-500', count: t('seachat.knowledgeBase.supportedFormats.formats.videos.count') },
  ];

  const handleFileUpload = (fileName: string) => {
    setUploadedFiles([...uploadedFiles, fileName]);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('seachat.knowledgeBase.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('seachat.knowledgeBase.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Supported Formats Animation */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('seachat.knowledgeBase.supportedFormats.title')}
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {supportedFormats.map((format, index) => {
                const IconComponent = format.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 hover:bg-white border-2 border-transparent hover:border-teal-200 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className={`w-8 h-8 ${format.color}`} />
                      <div>
                        <h4 className="font-semibold text-gray-900">{format.name}</h4>
                        <p className="text-sm text-gray-500">{format.count}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-teal-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.random() * 60 + 40}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100">
              <h4 className="font-semibold text-gray-900 mb-3">{t('seachat.knowledgeBase.supportedFormats.richResponse.title')}</h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                {(t('seachat.knowledgeBase.supportedFormats.richResponse.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowUploadModal(true)}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>{t('seachat.knowledgeBase.supportedFormats.addDocuments')}</span>
            </button>
          </div>

          {/* Upload Demo Interface */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 text-white">
                <h3 className="text-lg font-semibold">{t('seachat.knowledgeBase.title')}</h3>
                <p className="text-blue-100 text-sm">{t('seachat.knowledgeBase.subtitle')}</p>
              </div>
              
              <div className="p-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6 hover:border-teal-400 transition-colors cursor-pointer"
                  onClick={() => window.open('https://chat.seasalt.ai/gpt/signup', '_blank')}
                  onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
                  onDrop={e => { e.preventDefault(); window.open('https://chat.seasalt.ai/gpt/signup', '_blank'); }}
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">{t('seachat.knowledgeBase.uploadModal.dropzone.title')}</p>
                  <p className="text-sm text-gray-500">{t('seachat.common.learnMore')}</p>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">{t('seachat.knowledgeBase.uploadModal.title')}:</h4>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                        <span className="text-sm text-gray-700">{file}</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">{t('seachat.blog.latest')}:</h4>
                  <div className="space-y-2">
                    {['Product_Manual.pdf', 'FAQ_Database.xlsx', 'Company_Policies.docx'].map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-gray-500" />
                          <span className="text-sm text-gray-700">{file}</span>
                        </div>
                        <div className="text-xs text-green-600 font-medium">{t('seachat.common.search')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900">{t('seachat.knowledgeBase.uploadModal.title')}</h3>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="border-2 border-dashed border-teal-300 rounded-xl p-12 text-center mb-6 bg-teal-50"
                  onClick={() => window.open('https://chat.seasalt.ai/gpt/signup', '_blank')}
                  onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
                  onDrop={e => { e.preventDefault(); window.open('https://chat.seasalt.ai/gpt/signup', '_blank'); }}
                >
                  <Upload className="w-16 h-16 text-teal-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('seachat.knowledgeBase.uploadModal.dropzone.title')}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t('seachat.knowledgeBase.uploadModal.dropzone.description')}
                  </p>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    onClick={e => { e.stopPropagation(); window.open('https://chat.seasalt.ai/gpt/signup', '_blank'); }}
                  >
                    {t('seachat.knowledgeBase.uploadModal.dropzone.button')}
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {(t('seachat.knowledgeBase.uploadModal.demoFiles', { returnObjects: true }) as string[]).map((file: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleFileUpload(file)}
                      className="p-4 border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors text-center"
                    >
                      <Plus className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Demo: {file}</p>
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  {t('seachat.knowledgeBase.uploadModal.close')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default KnowledgeBase;