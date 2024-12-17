import React, { useState } from 'react';
import PageContainer from '../components/common/PageContainer';
import PageHeader from '../components/common/PageHeader';
import ScheduleCalendar from '../components/Schedule/ScheduleCalendar';
import ScheduleFilter from '../components/Schedule/ScheduleFilter';

const Schedule = () => {
  const [selectedProgram, setSelectedProgram] = useState('all');

  return (
    <PageContainer>
      <PageHeader 
        title="전체시간표" 
        description="수학, 과학실험, TRPG 프로그램 전체 시간표"
      />
      <div className="text-slate-200">
        <ScheduleFilter 
          selectedProgram={selectedProgram}
          onProgramChange={setSelectedProgram}
        />
        <ScheduleCalendar selectedProgram={selectedProgram} />
      </div>
    </PageContainer>
  );
};

export default Schedule;