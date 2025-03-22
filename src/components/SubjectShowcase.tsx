'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

// Replace these with your sister's actual chosen GCSE subjects
const subjects = [
    {
        id: 1,
        name: 'Psychology',
        icon: '🧠',
        description: 'Hopefully this will help you be less retarded :).',
        gradientClass: 'card-gradient-1'
    },
    {
        id: 2,
        name: 'English',
        icon: '📚',
        description: 'Analysing literature and crafting compelling narratives with your words :D',
        gradientClass: 'card-gradient-2'
    },
    {
        id: 3,
        name: 'Mathematics',
        icon: '🔢',
        description: "You&apos;re finally getting this!!!!!! D:<.",
        gradientClass: 'card-gradient-3'
    },
    {
        id: 4,
        name: 'Science',
        icon: '🔬',
        description: 'Exploring how the universe works through experiment and discovery :))))',
        gradientClass: 'card-gradient-4'
    },
    {
        id: 5,
        name: 'Art & Design',
        icon: '🎨',
        description: 'Expressing yourself through creativity and photography!!!',
        gradientClass: 'card-gradient-1'
    },
    {
        id: 6,
        name: 'History',
        icon: '🏛️',
        description: 'Understanding the past to better comprehend the present and future.',
        gradientClass: 'card-gradient-2'
    }
];

export default function SubjectShowcase() {
    const [activeSubject, setActiveSubject] = useState<number | null>(null);

    return (
        <div className="my-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
                <AcademicCapIcon className="h-8 w-8 mr-2 text-primary" />
                <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Your GCSE Journey</span>
            </h2>

            <p className="mb-8 text-black text-center">
                Congratulations on picking these subjects! Each one will open new doors for your future.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                    <motion.div
                        key={subject.id}
                        className={`
              bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md cursor-pointer 
              border-2 transition-colors
              ${activeSubject === subject.id
                                ? 'border-primary shadow-lg'
                                : 'border-transparent hover:border-secondary/50'}
            `}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveSubject(
                            activeSubject === subject.id ? null : subject.id
                        )}
                    >
                        <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">{subject.icon}</span>
                            <h3 className="font-bold text-foreground">{subject.name}</h3>
                        </div>

                        {activeSubject === subject.id && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className={`text-sm mt-2 p-2 rounded-lg text-white ${subject.gradientClass}`}
                            >
                                {subject.description}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>

            <p className="text-center mt-6 text-sm opacity-80">
                Click on a subject to learn more about your exciting journey ahead!
            </p>
        </div>
    );
} 