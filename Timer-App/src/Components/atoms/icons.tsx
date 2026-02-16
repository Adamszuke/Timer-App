import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/styles/Colors';

export const HourGlassIcon = () => (
    <MaterialCommunityIcons 
        name="timer-sand" 
        size={35} 
        color={colors.white[100]} 
    />
);

export const PauseIcon = () => (
    <Ionicons 
        name="pause" 
        size={90} 
        color={colors.white[100]} 
    />
);
export const StartIcon = () => (
    <Ionicons 
        name="play" 
        size={90} 
        color={colors.white[100]} 
    />
);
export const RestartIcon = () => (
    <Ionicons 
        name="refresh-outline" 
        size={80} 
        color={colors.white[100]} 
    />
);