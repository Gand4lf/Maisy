'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/24/solid';

// Using your sister's photos with file names 1, 2, 3, and 4
const photos = [
    {
        id: 1,
        title: 'Robin on Post',
        description: 'A serene robin perched against a beautiful blue sky backdrop.',
        imageSrc: '/images/sister-photography/1.png',
        rotation: -3,
        gradientClass: 'card-gradient-1'
    },
    {
        id: 2,
        title: 'Singing Robin',
        description: 'Capturing the perfect moment of a robin singing on a branch.',
        imageSrc: '/images/sister-photography/2.png',
        rotation: 2,
        gradientClass: 'card-gradient-2'
    },
    {
        id: 3,
        title: 'Spring Blossoms',
        description: 'Delicate cherry blossoms with a busy bee collecting nectar.',
        imageSrc: '/images/sister-photography/3.png',
        rotation: -1,
        gradientClass: 'card-gradient-3'
    },
    {
        id: 4,
        title: 'Nature Details',
        description: 'Finding beauty in the small details of nature.',
        imageSrc: '/images/sister-photography/4.png',
        rotation: 3,
        gradientClass: 'card-gradient-4'
    }
];

export default function PhotographyGallery() {
    const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null);
    const constraintsRef = useRef(null);

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
                <CameraIcon className="h-8 w-8 mr-2 text-primary" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Photography Gallery</span>
            </h2>

            <motion.div
                ref={constraintsRef}
                className="relative h-[400px] w-full overflow-visible mt-12"
            >
                {photos.map((photo) => (
                    <motion.div
                        key={photo.id}
                        className={`absolute polaroid cursor-pointer ${expandedPhoto === photo.id ? 'z-30' : 'z-10'
                            }`}
                        style={{
                            top: `${10 + Math.random() * 30}%`,
                            left: `${5 + (photo.id - 1) * 20}%`,
                            rotate: `${photo.rotation}deg`,
                        }}
                        drag
                        dragConstraints={constraintsRef}
                        whileHover={{ scale: 1.1, zIndex: 20 }}
                        onClick={() => setExpandedPhoto(
                            expandedPhoto === photo.id ? null : photo.id
                        )}
                    >
                        <div className="relative w-[200px] h-[150px] mb-2 overflow-hidden">
                            <Image
                                src={photo.imageSrc}
                                alt={photo.title}
                                className="object-cover"
                                width={200}
                                height={150}
                                priority
                            />
                        </div>
                        <p className="text-center italic text-md font-medium">
                            {photo.title}
                        </p>

                        {expandedPhoto === photo.id && (
                            <motion.div
                                className={`mt-2 text-sm px-2 py-1 text-center text-white rounded-lg ${photo.gradientClass}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {photo.description}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            <p className="text-center mt-8 text-sm opacity-80">
                You're becoming such an amazing photographer! Drag the photos around to rearrange your gallery!
            </p>
        </div>
    );
} 