import { Goal } from '@/interfaces/goal.interface';

interface GoalHeaderProps {
    goal: Goal;
}

const GoalHeader: React.FC<GoalHeaderProps> = ({ goal }) => {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-center mb-4">{goal.title}</h1>
            <p className="text-gray-600 text-center">{goal.description}</p>
        </div>
    );
};

export default GoalHeader;
