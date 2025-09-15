import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import type { Task } from '../types';
import styles from '../styles';

interface Props {

    task:Task;
    onToggle: (id:string) => void;
    onEdit: (task:Task) => void;
    onDelete: (id:string) => void;
}