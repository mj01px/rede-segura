export type DevicePlatform = 'android' | 'iphone';

export type MomentId = 'momento-1' | 'momento-2' | 'momento-3';

export interface AccessibilityControlsProps {
  isLargeText: boolean;
  onToggleLargeText: () => void;
  isSpeechSupported: boolean;
  isSpeaking: boolean;
  onToggleReadAloud: () => void;
}
