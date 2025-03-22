'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useInView } from 'framer-motion';

export default function ConfidenceMeter() {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Triggers the animation when the component comes into view
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const progressVariants = {
        hidden: { width: '0%' },
        visible: {
            width: '85%', // You can adjust this to represent her actual confidence level
            transition: {
                duration: 1.5,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="my-12 max-w-2xl mx-auto"
        >
            <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold mb-6 flex items-center"
            >
                <HeartIcon className="h-8 w-8 mr-2 text-primary" />
                <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Confidence Growth</span>
            </motion.h2>

            <motion.p
                variants={itemVariants}
                className="mb-8 text-black text-center"
            >
                I&apos;ve seen your confidence growing so much this year! Here&apos;s a celebration of that amazing progress:
            </motion.p>

            <div className="space-y-6">
                <motion.div variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold text-black">Confidence Level</span>
                        <span className="text-primary font-bold">85%</span>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            variants={progressVariants}
                            className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full"
                        />
                    </div>
                    <div className="flex justify-between mt-1 text-xs">
                        <span>This time last year</span>
                        <span>Today</span>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h3 className="font-bold text-center mb-4 text-lg bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Your Confidence Journey</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-accent text-xl mr-2">✓</span>
                            <span>Choosing your own GCSE subjects that you&apos;re passionate about</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-secondary text-xl mr-2">✓</span>
                            <span>Sharing your beautiful photography with others</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-tertiary text-xl mr-2">✓</span>
                            <span>Speaking up more and expressing your opinions</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-primary text-xl mr-2">✓</span>
                            <span>You&apos;re taking on new challenges and pursuing your interests</span>
                        </li>
                    </ul>
                </motion.div>

            </div>
        </motion.div>
    );
} 