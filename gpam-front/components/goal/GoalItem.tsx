import { Goal } from '@/interfaces/goal.interface';
import { tailwindClasses as tw } from '@/styles/tailwind-classes';
import React from 'react';
import ProgressBar from '../common/ProgressBar';

interface GoalItemProps {
    goal: Goal;
    onClick: (goal: Goal) => void;
}

const GoalItem: React.FC<GoalItemProps> = ({ goal, onClick }) => {
    const completedGpams = goal.gpams.filter((gpam) => gpam.isCompleted).length;
    const totalGpams = goal.gpams.length;
    const progressPercentage = totalGpams > 0 ? (completedGpams / totalGpams) * 100 : 0;

    return (
        <li className={`${tw.listItem} flex flex-col`} onClick={() => onClick(goal)}>
            <h3 className={tw.heading3}>{goal.title}</h3>
            <p className={`${tw.smallText}`}>
                세부 목표 달성률: {completedGpams}/{totalGpams}
            </p>
            <ProgressBar percentage={progressPercentage} />
        </li>
    );
};

export default GoalItem;
