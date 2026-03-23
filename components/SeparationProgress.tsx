import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface SeparationProgressProps {
  progress: number;
}

export function SeparationProgress({ progress }: SeparationProgressProps) {
  const getStatusText = () => {
    if (progress < 25) return 'Analyzing audio structure...';
    if (progress < 50) return 'Separating vocals...';
    if (progress < 75) return 'Isolating instruments...';
    if (progress < 95) return 'Finalizing tracks...';
    return 'Complete!';
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <LinearGradient
          colors={['#8B5CF6', '#3B82F6']}
          style={styles.iconGradient}
        >
          <Text style={styles.iconText}>AI</Text>
        </LinearGradient>
      </View>

      <Text style={styles.statusText}>{getStatusText()}</Text>

      <View style={styles.progressContainer}>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{Math.round(progress)}%</Text>
      </View>

      <Text style={styles.description}>
        Using advanced AI models to separate your music into individual tracks
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  iconContainer: {
    marginBottom: 24,
  },
  iconGradient: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  progressTrack: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    marginRight: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#8B5CF6',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    minWidth: 50,
  },
  description: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
  },
});