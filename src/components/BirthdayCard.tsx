'use client';

import { motion } from 'framer-motion';
import { CakeIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default function BirthdayCard() {
    // We'll display the open card directly without the envelope interaction
    return (
        <div className="relative flex flex-col items-center justify-center">
            <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-4 relative"
            >
                {/* Always show the open card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white rounded-xl h-[450px] w-[320px] border-4 border-fuchsia-400 flex flex-col items-center justify-start pt-8 gap-4 shadow-lg relative overflow-hidden"
                >
                    <CakeIcon className="w-16 h-16 text-pink-500 float" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl font-bold text-center"
                    >
                        <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            Happy 14th<br />Birthday!
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="px-8 text-center text-md mt-2"
                    >
                        <p className="text-indigo-700 font-medium">
                            Congratulations on picking your GCSEs and becoming an amazing photographer!
                        </p>
                        <p className="mt-4 text-sm text-purple-700">
                            I&apos;m so proud of how your confidence has grown.
                            Can&apos;t wait to see what amazing things you&apos;ll do this year!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mt-auto mb-4 text-sm"
                    >
                        <span className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">
                            With lots of love from your brother 💖
                        </span>
                    </motion.div>

                    <SparklesIcon className="w-6 h-6 text-yellow-500 absolute top-20 right-10 sparkle" />
                    <SparklesIcon className="w-4 h-4 text-cyan-600 absolute top-40 left-10 sparkle delay-1" />
                    <SparklesIcon className="w-5 h-5 text-purple-600 absolute bottom-40 right-20 sparkle delay-2" />
                </motion.div>
            </motion.div>
        </div>
    );
} 