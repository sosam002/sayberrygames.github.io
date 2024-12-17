import React from 'react';
import Select from '../common/Select';

const ScheduleFilter = ({ selectedProgram, onProgramChange }) => {
  const programOptions = [
    { value: 'all', label: '전체 프로그램' },
    { value: '수학', label: '수학' },
    { value: '과학실험', label: '과학실험' },
    { value: 'TRPG', label: 'TRPG' }
  ];

  return (
    <div className="mb-6">
      <Select 
        options={programOptions} 
        value={selectedProgram}
        onChange={onProgramChange}
        className="min-w-[200px] bg-slate-800 text-white border-slate-700 focus:border-blue-500"
      />
    </div>
  );
};

export default ScheduleFilter;