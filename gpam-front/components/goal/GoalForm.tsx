import { Goal } from '@/interfaces/goal.interface';
import { tailwindClasses as tw } from '@/styles/tailwind-classes';
import { useState } from 'react';

interface GoalFormProps {
    onAddGoal: (newGoal: Goal) => void;
}

export default function GoalForm({ onAddGoal }: GoalFormProps) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            const newGoal: Goal = {
                id: Date.now().toString(),
                title: title.trim(),
                gpams: [],
            };
            onAddGoal(newGoal);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="새 목표 입력"
                className={tw.input}
            />
            <button type="submit" className={tw.button}>
                목표 추가
            </button>
        </form>
    );
}
