interface SecurityIconProps {
  className?: string;
  size?: number;
}

export function AcousticSensorIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Microphone base */}
      <rect x="10" y="18" width="4" height="4" rx="2" fill="currentColor" />
      
      {/* Microphone body */}
      <rect x="11" y="8" width="2" height="10" fill="currentColor" />
      
      {/* Sound waves */}
      <path
        d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M4 12C4 6.47715 8.47715 2 14 2C19.5228 2 24 6.47715 24 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      
      {/* Detection indicator */}
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export function VisualAnalysisIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Camera body */}
      <rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor" opacity="0.1" />
      
      {/* Camera lens */}
      <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      
      {/* AI analysis lines */}
      <path
        d="M2 2L6 6M18 2L22 6M2 22L6 18M18 22L22 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Detection grid */}
      <path
        d="M8 8H16M8 16H16M8 8V16M16 8V16"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}

export function SensorNetworkIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central hub */}
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      
      {/* Sensor nodes */}
      <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.7" />
      
      {/* Network connections */}
      <line x1="12" y1="12" x2="6" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="12" y1="12" x2="18" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="12" y1="12" x2="6" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      
      {/* Data flow indicators */}
      <circle cx="9" cy="9" r="1" fill="currentColor" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="9" r="1" fill="currentColor" opacity="0.8">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function ThreatDetectionIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield base */}
      <path
        d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z"
        fill="currentColor"
        opacity="0.1"
      />
      
      {/* Alert indicator */}
      <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.2" />
      <path
        d="M12 8V12M12 16H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Scanning lines */}
      <path
        d="M2 12H6M18 12H22M12 2V6M12 18V22"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

export function DroneIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Drone body */}
      <ellipse cx="12" cy="12" rx="4" ry="2" fill="currentColor" opacity="0.3" />
      
      {/* Propellers */}
      <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="16" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.6" />
      
      {/* Propeller blades */}
      <path d="M8 8L6 6M8 8L10 6M8 8L6 10M8 8L10 10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M16 8L14 6M16 8L18 6M16 8L14 10M16 8L18 10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M8 16L6 14M8 16L10 14M8 16L6 18M8 16L10 18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M16 16L14 14M16 16L18 14M16 16L14 18M16 16L18 18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      
      {/* Camera/sensor */}
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      
      {/* Scanning lines */}
      <path d="M2 12H6M18 12H22M12 2V6M12 18V22" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

export function AdvancedSensorIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sensor base */}
      <rect x="10" y="18" width="4" height="4" rx="2" fill="currentColor" opacity="0.3" />
      
      {/* Sensor array */}
      <rect x="8" y="6" width="8" height="12" rx="2" fill="currentColor" opacity="0.2" />
      
      {/* Detection elements */}
      <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.8" />
      
      {/* Detection field */}
      <path
        d="M4 12C4 8.68629 7.58172 6 12 6C16.4183 6 20 8.68629 20 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      
      {/* Data transmission */}
      <path d="M12 2L12 6M12 18L12 22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function AIBrainIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain outline */}
      <path
        d="M12 2C8 2 6 4 6 8C6 10 7 12 8 13C7 14 6 16 6 18C6 20 8 22 12 22C16 22 18 20 18 18C18 16 17 14 16 13C17 12 18 10 18 8C18 4 16 2 12 2Z"
        fill="currentColor"
        opacity="0.1"
      />
      
      {/* Neural network nodes */}
      <circle cx="9" cy="8" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="15" cy="8" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="9" cy="16" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="15" cy="16" r="1" fill="currentColor" opacity="0.8" />
      
      {/* Neural connections */}
      <path d="M9 8L12 12M15 8L12 12M12 12L9 16M12 12L15 16" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      
      {/* Processing indicators */}
      <circle cx="12" cy="12" r="0.5" fill="currentColor" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function TransmitterDetectionIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Detection device */}
      <rect x="8" y="4" width="8" height="12" rx="2" fill="currentColor" opacity="0.2" />
      
      {/* Antenna */}
      <path d="M12 2V4M12 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 2L12 4L16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* RF waves */}
      <path
        d="M4 8C4 6.34315 5.34315 5 7 5H17C18.6569 5 20 6.34315 20 8V16C20 17.6569 18.6569 19 17 19H7C5.34315 19 4 17.6569 4 16V8Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
        fill="none"
      />
      
      {/* Signal indicators */}
      <circle cx="7" cy="8" r="1" fill="currentColor" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="17" cy="8" r="1" fill="currentColor" opacity="0.8">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="7" cy="16" r="1" fill="currentColor" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="17" cy="16" r="1" fill="currentColor" opacity="0.8">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>
      
      {/* Central processing */}
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

export function RFScannerIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Scanner base */}
      <rect x="6" y="18" width="12" height="4" rx="2" fill="currentColor" opacity="0.3" />
      
      {/* Scanner head */}
      <rect x="8" y="6" width="8" height="12" rx="1" fill="currentColor" opacity="0.2" />
      
      {/* Scanning beam */}
      <path
        d="M12 6L12 2M12 6L8 6M12 6L16 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      
      {/* RF detection field */}
      <path
        d="M2 12C2 8.68629 4.68629 6 8 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
        fill="none"
      />
      
      {/* Detection points */}
      <circle cx="6" cy="10" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="18" cy="10" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="6" cy="14" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="18" cy="14" r="1" fill="currentColor" opacity="0.7" />
      
      {/* Central processing unit */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function DroneThreatIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Drone body */}
      <ellipse cx="12" cy="12" rx="3" ry="1.5" fill="currentColor" opacity="0.3" />
      
      {/* Propellers */}
      <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="16" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.6" />
      
      {/* Propeller blades */}
      <path d="M8 8L6 6M8 8L10 6M8 8L6 10M8 8L10 10" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M16 8L14 6M16 8L18 6M16 8L14 10M16 8L18 10" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M8 16L6 14M8 16L10 14M8 16L6 18M8 16L10 18" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M16 16L14 14M16 16L18 14M16 16L14 18M16 16L18 18" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      
      {/* Threat indicator */}
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      
      {/* Detection waves */}
      <path
        d="M12 4C12 4 8 8 8 12C8 16 12 20 12 20C12 20 16 16 16 12C16 8 12 4 12 4Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
        fill="none"
      />
      
      {/* Alert symbol */}
      <path d="M12 6V10M12 14H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PortableDeviceIcon({ className = "", size = 24 }: SecurityIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Device body */}
      <rect x="4" y="6" width="16" height="10" rx="2" fill="currentColor" opacity="0.2" />
      
      {/* Screen */}
      <rect x="6" y="8" width="12" height="6" rx="1" fill="currentColor" opacity="0.1" />
      
      {/* Antenna */}
      <path d="M12 2V6M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      
      {/* Control buttons */}
      <circle cx="8" cy="12" r="0.8" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="12" r="0.8" fill="currentColor" opacity="0.6" />
      
      {/* Signal indicators */}
      <path d="M2 8H4M2 12H4M2 16H4" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M20 8H22M20 12H22M20 16H22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      
      {/* Battery indicator */}
      <rect x="18" y="4" width="2" height="1" rx="0.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
