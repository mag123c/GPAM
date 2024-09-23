import { Goal } from '@/interfaces/goal.interface';
import { GPAM } from '@/interfaces/gpam.interface';
import React, { useState } from 'react';
import CustomButton from '../common/CustomButton';
import GPAMForm from '../gpam/GPAMForm';
import GPAMItem from '../gpam/GPAMItem';

interface GoalDetailProps {
    goal: Goal;
    onUpdateGoal: (goalId: string, updatedGoal: Goal) => void;
    onDeleteGPAM: (goalId: string, gpamId: string) => void;
    onAddGPAM: (newGPAM: GPAM) => void;
}

const GoalDetail: React.FC<GoalDetailProps> = ({ goal, onUpdateGoal, onAddGPAM }) => {
    const [expandedGPAMId, setExpandedGPAMId] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUpdateGPAM = (updatedGPAM: GPAM) => {
        const updatedGpams = goal.gpams.map((gpam) => (gpam.id === updatedGPAM.id ? updatedGPAM : gpam));
        const updatedGoal = { ...goal, gpams: updatedGpams };
        onUpdateGoal(goal.id, updatedGoal);
    };

    const handleDeleteGPAM = (gpamId: string) => {
        const updatedGpams = goal.gpams.filter((gpam) => gpam.id !== gpamId);
        const updatedGoal = { ...goal, gpams: updatedGpams };
        onUpdateGoal(goal.id, updatedGoal);
    };

    const handleToggleExpand = (gpamId: string) => {
        setExpandedGPAMId(expandedGPAMId === gpamId ? null : gpamId);
    };

    const handleAddGPAM = (newGPAM: GPAM) => {
        onAddGPAM(newGPAM);
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">{goal.title}</h2>
            <p className="text-gray-600">{goal.description}</p>
            {goal.gpams.map((gpam) => (
                <GPAMItem
                    key={gpam.id}
                    gpam={gpam}
                    onUpdate={handleUpdateGPAM}
                    onDelete={() => handleDeleteGPAM(gpam.id)}
                    isExpanded={expandedGPAMId === gpam.id}
                    onToggleExpand={() => handleToggleExpand(gpam.id)}
                />
            ))}
            <CustomButton onClick={() => setIsModalOpen(true)} variant="primary">
                GPAM 추가
            </CustomButton>
            <GPAMForm
                goalId={goal.id}
                onAddGPAM={handleAddGPAM}
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default GoalDetail;
