import { Goal } from '@/interfaces/goal.interface';
import { tailwindClasses as tw } from '@/styles/tailwind-classes';
import GoalItem from './GoalItem';

interface GoalListProps {
    goals: Goal[];
    onSelectGoal: (goal: Goal) => void;
}

export default function GoalList({ goals, onSelectGoal }: GoalListProps) {
    return (
        <div className="w-full">
            <h2 className={tw.heading2}>목표 목록</h2>
            <ul className={tw.list}>
                {goals.map((goal) => (
                    <GoalItem key={goal.id} goal={goal} onClick={() => onSelectGoal(goal)} />
                ))}
            </ul>
        </div>
    );
}
