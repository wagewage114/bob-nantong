import React, { useState, useEffect } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCards = [
    {
      id: 1,
      title: "91",
      description: "专业的技术内容分享平台，汇集各类编程资源和教程。"
    },
    {
      id: 2,
      title: "东方红",
      description: "传统文化与现代艺术的融合，展现东方魅力。"
    },
    {
      id: 3,
      title: "Faker",
      description: "电竞传奇，LOL职业选手的不朽传说。"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div 
        className={`transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <header className="bg-white shadow-lg">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-800">Bob的网站</div>
              <div className="space-x-6">
                <button className="text-gray-600 hover:text-gray-900">首页</button>
                <button className="text-gray-600 hover:text-gray-900">关于</button>
                <button className="text-gray-600 hover:text-gray-900">联系我们</button>
              </div>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">欢迎来到Bob的网站</h1>
            <p className="text-lg text-gray-700">
              这是一个带有优雅渐出动画效果的示例网站。当页面加载时，内容会平滑地显示出来。
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentCards.map((card) => (
              <div 
                key={card.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h2>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </section>
        </main>

        <footer className="bg-gray-800 text-white mt-12">
          <div className="container mx-auto px-6 py-8">
            <p className="text-center">&copy; 2025 Bob的网站. 保留所有权利。</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
