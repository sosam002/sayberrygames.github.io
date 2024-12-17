import React from 'react';
import PageContainer from '../components/common/PageContainer';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import { mathFeatures } from '../data/mathData';

const Math = () => {
  return (
    <PageContainer>
      <PageHeader 
        title="와이즈 수학" 
        description="생각하는 힘을 키우는 맞춤형 수학교육"
      />

      <div className="space-y-8 text-slate-200">
        {mathFeatures.map((feature, index) => (
          <Card key={index} className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">{feature.title}</h2>
            {feature.points && (
              <ul className="space-y-4">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {feature.items && (
              <div className="space-y-8">
                {feature.items.map((item, idx) => (
                  <div key={idx} className="ml-4">
                    <h3 className="text-xl font-semibold mb-4 text-white">{item.subtitle}</h3>
                    <ul className="space-y-3">
                      {item.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-slate-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default Math;