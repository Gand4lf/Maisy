'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

// Dynamically import all components to avoid hydration and loading issues
const BirthdayCard = dynamic(() => import('./BirthdayCard'), { ssr: false });
const ConfidenceMeter = dynamic(() => import('./ConfidenceMeter'), { ssr: false });
const SubjectShowcase = dynamic(() => import('./SubjectShowcase'), { ssr: false });
const PhotographyGallery = dynamic(() => import('./PhotographyGallery'), { ssr: false });
const Confetti = dynamic(() => import('./Confetti'), { ssr: false });

export function BoringPage() {
    const [clicked, setClicked] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [showBirthday, setShowBirthday] = useState(false);
    const [componentsLoaded, setComponentsLoaded] = useState(false);

    // Handle hydration mismatch by only rendering interactive elements after mounting
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClick = () => {
        setClicked(true);
        // Show the birthday surprise after a small delay
        setTimeout(() => {
            setComponentsLoaded(true);
            setTimeout(() => {
                setShowBirthday(true);
            }, 500);
        }, 1000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // If button was clicked and we should show birthday content
    if (showBirthday) {
        return (
            <div className="min-h-screen w-full overflow-x-hidden bg-white">
                {/* Show confetti when birthday content appears */}
                <Confetti />

                <motion.div
                    className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.header
                        className="flex flex-col items-center justify-center text-center py-8"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                                Happy Birthday!
                            </h1>
                            <SparklesIcon className="absolute -top-6 -right-6 h-8 w-8 text-yellow-400 sparkle" />
                            <SparklesIcon className="absolute -top-4 -left-6 h-6 w-6 text-pink-500 sparkle delay-1" />
                            <SparklesIcon className="absolute top-0 right-14 h-4 w-4 text-cyan-400 sparkle delay-2" />
                        </div>

                        <p className="mt-4 text-xl text-indigo-700 font-medium">
                            Celebrating your amazing 14th year!
                        </p>
                    </motion.header>

                    {/* Main card */}
                    <motion.section variants={itemVariants}>
                        <BirthdayCard />
                    </motion.section>

                    {/* Photography Gallery */}
                    <motion.section
                        variants={itemVariants}
                        className="rounded-xl p-6 bg-gradient-to-br from-white to-fuchsia-100 shadow-lg mt-12 border-2 border-purple-300"
                    >
                        <PhotographyGallery />
                    </motion.section>

                    {/* GCSE Journey */}
                    <motion.section
                        variants={itemVariants}
                        className="rounded-xl p-6 bg-gradient-to-br from-white to-cyan-100 shadow-lg mt-12 border-2 border-cyan-300"
                    >
                        <SubjectShowcase />
                    </motion.section>

                    {/* Confidence Growth */}
                    <motion.section
                        variants={itemVariants}
                        className="rounded-xl p-6 bg-gradient-to-br from-white to-pink-100 shadow-lg mt-12 border-2 border-pink-300"
                    >
                        <ConfidenceMeter />
                    </motion.section>

                    {/* Footer */}
                    <motion.footer
                        className="mt-16 text-center text-sm py-8 border-t border-purple-300"
                        variants={itemVariants}
                    >
                        <p className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">Made with love across the ocean 💖</p>
                        <p className="mt-2 text-indigo-700">From your brother in the USA to you in the UK</p>
                    </motion.footer>
                </motion.div>
            </div>
        );
    }

    // Show boring page until button is clicked
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-sm max-w-md w-full text-center">
                <h1 className="text-2xl font-normal text-gray-700 mb-6">Welcome to this website</h1>

                <p className="text-gray-600 mb-8">
                    This is a very boring page with minimal styling and content.
                </p>

                {mounted ? (
                    <motion.button
                        onClick={handleClick}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
                        whileHover={{ scale: clicked ? 1 : 1.05 }}
                        whileTap={{ scale: clicked ? 1 : 0.95 }}
                        animate={clicked ? { scale: [1, 1.2, 0], opacity: [1, 1, 0] } : {}}
                        transition={{ duration: 0.8 }}
                        disabled={clicked}
                    >
                        Click Here
                    </motion.button>
                ) : (
                    // Static placeholder during server rendering to prevent hydration mismatch
                    <div className="bg-gray-200 text-gray-800 py-2 px-4 rounded inline-block">
                        Click Here
                    </div>
                )}

                {clicked && !showBirthday && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-gray-600"
                    >
                        Loading surprise...
                    </motion.div>
                )}

                {/* Preload components without rendering them */}
                {componentsLoaded && !showBirthday && (
                    <div className="hidden">
                        {/* Preload without rendering to DOM */}
                    </div>
                )}
            </div>
        </div>
    );
}

// Default export for dynamic import compatibility
export default BoringPage; 