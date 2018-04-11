import { Bullet } from '../models/bullet';



const DOMAIN_ONE_ONE: Bullet = {
    objectiveNumber: 1.1,
    bullets: [
      {
        "title": "• Viruses",
        "subBullets": []
      },
      {
        "title": "• Crypto-malware",
        "subBullets": []
      },
      {
        "title": "• Ransomware",
        "subBullets": []
      },
      {
        "title": "• Worm",
        "subBullets": []
      },
      {
        "title": "• Trojan",
        "subBullets": []
      },
      {
        "title": "• Rootkit",
        "subBullets": []
      },
      {
        "title": "• Keylogger",
        "subBullets": []
      },
      {
        "title": "• Adware",
        "subBullets": []
      },
      {
        "title": "• Spyware",
        "subBullets": []
      },
      {
        "title": "• Bots",
        "subBullets": []
      },
      {
        "title": "• RAT",
        "subBullets": []
      },
      {
        "title": "• Logic bomb",
        "subBullets": []
      },
      {
        "title": "• Backdoor",
        "subBullets": []
      }
    ],
  };
const DOMAIN_ONE_TWO: Bullet = {
    objectiveNumber: 1.2,
    bullets: [
      {
        "title": "• Social engineering",
        "subBullets": [
          "- Phishing, Spear phishing",
          "- Whaling, Vishing",
          "- Tailgating, Impersonation",
          "- Dumpster diving",
          "- Shoulder surfing",
          "- Hoax, Watering hole attack"
        ]
      },
      {
        "title": "• Principles (reasons for effectiveness)",
        "subBullets": [
          "- Authority, Intimidation",
          "- Consensus, Scarcity",
          "- Familiarity, Trust",
          "- Urgency"
        ]
      },
      {
        "title": "• Application/service attacks",
        "subBullets": [
          "- DoS, DDoS",
          "- Man-in-the-middle",
          "- Buffer overflow",
          "- Injection",
          "- Cross-site scripting",
          "- Cross-site request forgery",
          "- Privilege escalation",
          "- ARP poisoning",
          "- Amplification",
          "- DNS poisoning",
          "- Domain hijacking",
          "- Man-in-the-browser",
          "- Zero day, Replay",
          "- Pass the hash"
        ]
      },
      {
        "title": "• Hijacking and related attacks",
        "subBullets": [
          "- Clickjacking",
          "- Session hijacking",
          "- URL hijacking",
          "- Typo squatting"
        ]
      },
      {
        "title": "• Driver manipulation",
        "subBullets": [
          "- Shimming",
          "- Refactoring",
          "- MAC spoofing",
          "- IP spoofing"
        ]
      },
      {
        "title": "• Wireless attacks",
        "subBullets": [
          "- Replay, IV, Evil twin",
          "- Rogue AP, Jamming, WPS",
          "- Bluejacking",
          "- Bluesnarfing ",
          "- RFID, NFC",
          "- Disassociation"
        ]
      },
      {
        "title": "• Cryptographic attacks",
        "subBullets": [
          "- Birthday",
          "- Known plain text/cipher text",
          "- Rainbow tables",
          "- Dictionary",
          "- Brute force",
          "- Online vs. offline",
          "- Collision",
          "- Downgrade",
          "- Replay",
          "- Weak implementations"
        ]
      }
    ]
  };
const DOMAIN_ONE_THREE: Bullet = {
    objectiveNumber: 1.3,
    bullets: [
      {
        "title": "• Types of actors",
        "subBullets": [
          "- Script kiddies",
          "- Hacktivist",
          "- Organized crime",
          "- Nation states/APT",
          "- Insiders",
          "- Competitors"
        ]
      },
      {
        "title": "• Attributes of actors",
        "subBullets": [
          "- Internal/external",
          "- Level of sophistication",
          "- Resources/funding",
          "- Intent/motivation"
        ]
      },
      {
        "title": "• Use of open-source intelligence",
        "subBullets": []
      }
    ]
  };
const DOMAIN_ONE_FOUR: Bullet = {
    objectiveNumber: 1.4,
    bullets: [
      {
        "title": "• Active reconnaissance ",
        "subBullets": []
      },
      {
        "title": "• Passive reconnaissance",
        "subBullets": []
      },
      {
        "title": "• Pivot",
        "subBullets": []
      },
      {
        "title": "• Initial exploitation",
        "subBullets": []
      },
      {
        "title": "• Persistence",
        "subBullets": []
      },
      {
        "title": "• Escalation of privilege",
        "subBullets": []
      },
      {
        "title": "• Black box",
        "subBullets": []
      },
      {
        "title": "• White box",
        "subBullets": []
      },
      {
        "title": "• Gray box",
        "subBullets": []
      },
      {
        "title": "• Pen testing vs. vulnerability scanning",
        "subBullets": []
      }
    ]
  };
const DOMAIN_ONE_FIVE: Bullet = {
  objectiveNumber: 1.5,
  bullets: [
    {
      "title": "• Passively test security controls",
      "subBullets": []
    },
    {
      "title": "• Identify vulnerability",
      "subBullets": []
    },
    {
      "title": "• Identify lack of security controls",
      "subBullets": []
    },
    {
      "title": "• Identify common misconfigurations",
      "subBullets": []
    },
    {
      "title": "• Intrusive vs. non-intrusive",
      "subBullets": []
    },
    {
      "title": "• Credentialed vs. non-credentialed",
      "subBullets": []
    },
    {
      "title": "• False positive",
      "subBullets": []
    }
  ]
};
const DOMAIN_ONE_SIX: Bullet = {
  objectiveNumber: 1.6,
  bullets: [
    {
      "title": "• Race conditions",
      "subBullets": []
    },
    {
      "title": "• Vulnerabilities due to:",
      "subBullets": [
        "- End-of-life systems",
        "- Embedded systems",
        "- Lack of vendor support"
      ]
    },
    {
      "title": "• Improper input handling",
      "subBullets": []
    },
    {
      "title": "• Improper error handling",
      "subBullets": []
    },
    {
      "title": "• Misconfiguration/weak configuration",
      "subBullets": []
    },
    {
      "title": "• Default configuration",
      "subBullets": []
    },
    {
      "title": "• Resource exhaustion",
      "subBullets": []
    },
    {
      "title": "• Untrained users",
      "subBullets": []
    },
    {
      "title": "• Improperly configured accounts",
      "subBullets": []
    },
    {
      "title": "• Vulnerable business processes",
      "subBullets": []
    },
    {
      "title": "• Weak cipher suites and implementations",
      "subBullets": []
    },
    {
      "title": "• Memory/buffer vulnerability",
      "subBullets": [
        "- Memory leak",
        "- Integer overflow",
        "- Buffer overflow",
        "- Pointer dereference",
        "- DLL injection"
      ]
    },
    {
      "title": "• System sprawl/undocumented assets",
      "subBullets": []
    },
    {
      "title": "• Architecture/design weaknesses",
      "subBullets": []
    },
    {
      "title": "• New threats/zero day",
      "subBullets": []
    },
    {
      "title": "• Improper certificate",
      "subBullets": []
    },
    {
      "title": "• Key management",
      "subBullets": []
    }
  ]
};

const CONCEPTS: Bullet[] = [
  DOMAIN_ONE_ONE, DOMAIN_ONE_TWO, DOMAIN_ONE_THREE, DOMAIN_ONE_FOUR,
  DOMAIN_ONE_FIVE, DOMAIN_ONE_SIX
];

/**
 * DOMAIN: 2.0 Infrastructure
 */
const DOMAIN_TWO_ONE: Bullet = {
  objectiveNumber: 2.1,
  bullets: [
    {
      "title": "• Firewall",
      "subBullets": [
        "- ACL",
        "- Application vs. network based",
        "- Stateful vs. stateless",
        "- Implicit deny"
      ]
    },
    {
      "title": "• VPN concentrator",
      "subBullets": [
        "- Remote access vs. site-to-site",
        "- IPSec",
        "- Tunnel mode",
        "- Transport mode",
        "- AH, ESP",
        "- Split tunnel vs. full tunnel",
        "- TLS, Always-on VPN"
      ]
    },
    {
      "title": "• NIPS/NIDS",
      "subBullets": [
        "- Signature-based",
        "- Heuristic/behavioral",
        "- Anomaly",
        "- Inline vs. passive",
        "- In-band vs. out-of-band",
        "- Rules, Analytics",
        "- False positive",
        "- False negative"
      ]
    },
    {
      "title": "• Router",
      "subBullets": [
        "- ACLs",
        "- Antispoofing"
      ]
    },
    {
      "title": "• Switch",
      "subBullets": [
        "- Port security",
        "- Layer 2 vs. Layer 3",
        "- Loop prevention",
        "- Flood guard"
      ]
    },
    {
      "title": "• Proxy",
      "subBullets": [
        "- Forward and reverse proxy",
        "- Transparent",
        "- Application/multipurpose"
      ]
    },
    {
      "title": "• Load balancer",
      "subBullets": [
        "- Scheduling",
        "- Affinity",
        "- Round-robin",
        "- Active-passive",
        "- Active-active",
        "- Virtual IPs"
      ]
    },
    {
      "title": "• Access point",
      "subBullets": [
        "- SSID",
        "- MAC filtering",
        "- Signal strength",
        "- Band selection/width",
        "- Antenna types and placement",
        "- Fat vs. thin",
        "- Controller-based vs. standalone"
      ]
    },
    {
      "title": "• SIEM",
      "subBullets": [
        "- Aggregation",
        "- Correlation",
        "- Automated alerting and triggers",
        "- Time synchronization",
        "- Event deduplication",
        "- Logs/WORM"
      ]
    },
    {
      "title": "• DLP",
      "subBullets": [
        "- USB blocking",
        "- Cloud-based",
        "- Email"
      ]
    },
    {
      "title": "• NAC",
      "subBullets": [
        "- Dissolvable vs. permanent",
        "- Host health checks",
        "- Agent vs. agentless"
      ]
    },
    {
      "title": "• Mail gateway",
      "subBullets": [
        "- Spam filter",
        "- DLP",
        "- Encryption"
      ]
    },
    {
      "title": "• Bridge",
      "subBullets": []
    },
    {
      "title": "• SSL/TLS accelerators",
      "subBullets": []
    },
    {
      "title": "• SSL decryptors",
      "subBullets": []
    },
    {
      "title": "• Media gateway",
      "subBullets": []
    },
    {
      "title": "• Hardware security module",
      "subBullets": []
    }
  ]
};
const DOMAIN_TWO_TWO: Bullet = {
  objectiveNumber: 2.2,
  bullets: [
    {
      "title": "• Protocol analyzer",
      "subBullets": []
    },
    {
      "title": "• Network scanners",
      "subBullets": [
        "- Rogue system detection",
        "- Network mapping"
      ]
    },
    {
      "title": "• Wireless scanners/cracker",
      "subBullets": []
    },
    {
      "title": "• Password cracker",
      "subBullets": []
    },
    {
      "title": "• Vulnerability scanner",
      "subBullets": []
    },
    {
      "title": "• Configuration compliance scanner",
      "subBullets": []
    },
    {
      "title": "• Exploitation frameworks",
      "subBullets": []
    },
    {
      "title": "• Data sanitization tools",
      "subBullets": []
    },
    {
      "title": "• Steganography tools",
      "subBullets": []
    },
    {
      "title": "• Honeypot",
      "subBullets": []
    },
    {
      "title": "• Backup utilities",
      "subBullets": []
    },
    {
      "title": "• Banner grabbing",
      "subBullets": []
    },
    {
      "title": "• Passive vs. active",
      "subBullets": []
    },
    {
      "title": "• Command line tools",
      "subBullets": [
        "- ping, netstat",
        "- tracert, nslookup/dig",
        "- arp, ipconfig/ip/ifconfig",
        "- tcpdump",
        "- nmap",
        "- netcat"
      ]
    }
  ]
};
const DOMAIN_TWO_THREE: Bullet = {
  objectiveNumber: 2.3,
  bullets: [
    {
      "title": "• Unencrypted credentials/clear text",
      "subBullets": []
    },
    {
      "title": "• Logs and events anomalies",
      "subBullets": []
    },
    {
      "title": "• Permission issues",
      "subBullets": []
    },
    {
      "title": "• Access violations",
      "subBullets": []
    },
    {
      "title": "• Certificate issues",
      "subBullets": []
    },
    {
      "title": "• Data exfiltration",
      "subBullets": []
    },
    {
      "title": "• Misconfigured devices",
      "subBullets": [
        "- Firewall",
        "- Content filter",
        "- Access points"
      ]
    },
    {
      "title": "• Weak security configurations",
      "subBullets": []
    },
    {
      "title": "• Personnel issues",
      "subBullets": [
        "- Policy violation",
        "- Insider threat",
        "- Social engineering",
        "- Social media",
        "- Personal email"
      ]
    },
    {
      "title": "• Unauthorized software",
      "subBullets": []
    },
    {
      "title": "• Baseline deviation",
      "subBullets": []
    },
    {
      "title": "• License compliance violation ",
      "subBullets": [
        "- Availability/integrity"
      ]
    },
    {
      "title": "• Asset management",
      "subBullets": []
    },
    {
      "title": "• Authentication issues",
      "subBullets": []
    }
  ]
};
const DOMAIN_TWO_FOUR: Bullet = {
  objectiveNumber: 2.4,
  bullets: [
    {
      "title": "• HIDS/HIPS",
      "subBullets": []
    },
    {
      "title": "• Antivirus",
      "subBullets": []
    },
    {
      "title": "• File integrity check",
      "subBullets": []
    },
    {
      "title": "• Host-based firewall",
      "subBullets": []
    },
    {
      "title": "• Application whitelisting",
      "subBullets": []
    },
    {
      "title": "• Removable media control",
      "subBullets": []
    },
    {
      "title": "• Advanced malware tools",
      "subBullets": []
    },
    {
      "title": "• Patch management tools",
      "subBullets": []
    },
    {
      "title": "• UTM",
      "subBullets": []
    },
    {
      "title": "• DLP",
      "subBullets": []
    },
    {
      "title": "• Data execution prevention",
      "subBullets": []
    },
    {
      "title": "• Web application firewall",
      "subBullets": []
    }
  ]
};
const DOMAIN_TWO_FIVE: Bullet = {
  objectiveNumber: 2.5,
  bullets: [
    {
      "title": "• Connection methods",
      "subBullets": [
        "- Cellular, WiFi, SATCOM",
        "- Bluetooth, NFC, ANT",
        "- Infrared, USB"
      ]
    },
    {
      "title": "• Mobile device management concepts",
      "subBullets": [
        "- Application management",
        "- Content management",
        "- Remote wipe",
        "- Geofencing, Geolocation",
        "- Screen locks",
        "- Push notification services",
        "- Passwords and pins",
        "- Biometrics",
        "- Context-aware authentication",
        "- Containerization",
        "- Storage segmentation",
        "- Full device encryption"
      ]
    },
    {
      "title": "• Enforcement and monitoring for:",
      "subBullets": [
        "- Third-party app stores",
        "- Rooting/jailbreaking",
        "- Sideloading",
        "- Custom firmware",
        "- Carrier unlocking",
        "- Firmware OTA updates",
        "- Camera use",
        "- SMS/MMS",
        "- External media",
        "- USB OTG",
        "- Recording microphone",
        "- GPS tagging",
        "- WiFi direct/ad hoc",
        "- Tethering",
        "- Payment methods"
      ]
    },
    {
      "title": "• Deployment models",
      "subBullets": [
        "- BYOD, COPE, CYOD",
        "- Corporate-owned, VDI"
      ]
    }
  ]
};
const DOMAIN_TWO_SIX: Bullet = {
  objectiveNumber: 2.6,
  bullets: [
    {
      "title": "• Protocols",
      "subBullets": [
        "- DNSSEC",
        "- SSH",
        "- S/MIME",
        "- SRTP",
        "- LDAPS",
        "- FTPS",
        "- SFTP",
        "- SNMPv3",
        "- SSL/TLS",
        "- HTTPS",
        "- Secure POP/IMAP"
      ]
    },
    {
      "title": "• Use cases",
      "subBullets": [
        "- Voice and video",
        "- Time synchronization",
        "- Email and web",
        "- File transfer",
        "- Directory services",
        "- Remote access",
        "- Domain name resolution",
        "- Routing and switching",
        "- Network address allocation",
        "- Subscription services"
      ]
    }
  ]
};
const INFRASTRUCTURE: Bullet[] = [
  DOMAIN_TWO_ONE, DOMAIN_TWO_TWO, DOMAIN_TWO_THREE,
  DOMAIN_TWO_FOUR, DOMAIN_TWO_FIVE, DOMAIN_TWO_SIX
];

/**
 * DOMAIN: 3.0
 */
const DOMAIN_THREE_ONE: Bullet = {
  objectiveNumber: 3.1,
  bullets: [
    {
      "title": "• Industry-standard frameworks",
      "subBullets": [
        "- Regulatory",
        "- Non-regulatory",
        "- National vs. international",
        "- Industry-specific frameworks"
      ]
    },
    {
      "title": "• Benchmarks/secure configuration guides",
      "subBullets": [
        "- Platform/vendor-specific guides",
        "- Web server",
        "- Operating system",
        "- Application server",
        "- Network infrastructure devices",
        "- General purpose guides"
      ]
    },
    {
      "title": "• Defense-in-depth/layered security",
      "subBullets": [
        "- User training",
        "- Vendor diversity"
      ]
    },
    {
      "title": "• Control diversity",
      "subBullets": [
        "- Administrative",
        "- Technical"
      ]
    }
  ]
};
const DOMAIN_THREE_TWO: Bullet = {
  objectiveNumber: 3.2,
  bullets: [
    {
      "title": "• Zones/topologies",
      "subBullets": [
        "- DMZ, Extranet, Intranet",
        "- Wireless, Guest",
        "- Honeynets",
        "- NAT, Ad hoc"
      ]
    },
    {
      "title": "• Segregation/segmentation/isolation",
      "subBullets": [
        "- Physical",
        "- Logical (VLAN)",
        "- Virtualization",
        "- Air gaps"
      ]
    },
    {
      "title": "• Tunneling/VPN",
      "subBullets": [
        "- Site-to-site",
        "- Remote access"
      ]
    },
    {
      "title": "• Security device/technology placement",
      "subBullets": [
        "- Sensors",
        "- Collectors",
        "- Correlation engines",
        "- Filters, Proxies",
        "- Firewalls",
        "- VPN concentrators",
        "- SSL accelerators",
        "- Load balancers",
        "- DDoS mitigator",
        "- Aggregation switches",
        "- Taps and port mirror"
      ]
    },
    {
      "title": "• SDN",
      "subBullets": []
    }
  ]
};
const DOMAIN_THREE_THREE: Bullet = {
  objectiveNumber: 3.3,
  bullets: [
    {
      "title": "• Hardware/firmware security",
      "subBullets": [
        "- FDE/SED",
        "- TPM",
        "- HSM",
        "- UEFI/BIOS",
        "- Secure boot and attestation",
        "- Supply chain",
        "- Hardware root of trust",
        "- EMI/EMP"
      ]
    },
    {
      "title": "• Operating systems",
      "subBullets": [
        "- Types",
        "- Network",
        "- Server",
        "- Workstation",
        "- Appliance",
        "- Kiosk",
        "- Mobile OS",
        "- Patch management",
        "- Disable unnecessary ports/services",
        "- Least functionality",
        "- Secure configurations",
        "- Trusted operating system",
        "- Application whitelisting/blacklisting",
        "- Disable default accounts/passwords"
      ]
    },
    {
      "title": "• Peripherals",
      "subBullets": [
        "- Wireless keyboards",
        "- Wireless mice",
        "- Displays",
        "- WiFi-enabled MicroSD cards",
        "- Printers/MFDs",
        "- External storage devices",
        "- Digital cameras"
      ]
    }
  ]
};
const DOMAIN_THREE_FOUR: Bullet = {
  objectiveNumber: 3.4,
  bullets: [
    {
      "title": "• Sandboxing",
      "subBullets": []
    },
    {
      "title": "• Environment",
      "subBullets": [
        "- Development",
        "- Test",
        "- Staging",
        "- Production"
      ]
    },
    {
      "title": "• Secure baseline",
      "subBullets": []
    },
    {
      "title": "• Integrity measurement",
      "subBullets": []
    }
  ]
};
const DOMAIN_THREE_FIVE: Bullet = {
  objectiveNumber: 3.5,
  bullets: [
    {
      "title": "• SCADA/ICS",
      "subBullets": []
    },
    {
      "title": "• Smart devices/IoT",
      "subBullets": [
        "- Wearable technology",
        "- Home automation"
      ]
    },
    {
      "title": "• HVAC",
      "subBullets": []
    },
    {
      "title": "• SoC",
      "subBullets": []
    },
    {
      "title": "• RTOS",
      "subBullets": []
    },
    {
      "title": "• Printers/MFDs",
      "subBullets": []
    },
    {
      "title": "• Camera systems",
      "subBullets": []
    },
    {
      "title": "• Special purpose",
      "subBullets": [
        "- Medical devices",
        "- Vehicles",
        "- Aircraft/UAV"
      ]
    }
  ]
};
const DOMAIN_THREE_SIX: Bullet = {
  objectiveNumber: 3.6,
  bullets: [
    {
      "title": "• Development life-cycle models",
      "subBullets": [
        "- Waterfall vs. Agile"
      ]
    },
    {
      "title": "• Secure DevOps",
      "subBullets": [
        "- Security automation",
        "- Continuous integration",
        "- Baselining",
        "- Immutable systems",
        "- Infrastructure as code"
      ]
    },
    {
      "title": "• Version control and change management",
      "subBullets": []
    },
    {
      "title": "• Provisioning and deprovisioning",
      "subBullets": []
    },
    {
      "title": "• Secure coding techniques",
      "subBullets": [
        "- Proper error handling",
        "- Proper input validation",
        "- Normalization",
        "- Stored procedures",
        "- Code signing",
        "- Encryption",
        "- Obfuscation/camouflage ",
        "- Code reuse/dead code",
        "- Server/client-side execution",
        "- Memory management",
        "- Use of third-party libraries and SDKs",
        "- Data exposure"
      ]
    },
    {
      "title": "• Code quality and testing",
      "subBullets": [
        "- Static code analyzers",
        "- Dynamic analysis (e.g., fuzzing)",
        "- Stress testing",
        "- Sandboxing",
        "- Model verification"
      ]
    },
    {
      "title": "• Compiled vs. runtime code",
      "subBullets": []
    }
  ]
};
const DOMAIN_THREE_SEVEN: Bullet = {
  objectiveNumber: 3.7,
  bullets: [
    {
      "title": "• Hypervisor",
      "subBullets": [
        "- Type I",
        "- Type II",
        "- Application cells/containers"
      ]
    },
    {
      "title": "• VM sprawl avoidance",
      "subBullets": []
    },
    {
      "title": "• VM escape protection",
      "subBullets": []
    },
    {
      "title": "• Cloud storage",
      "subBullets": []
    },
    {
      "title": "• Cloud deployment models",
      "subBullets": [
        "- SaaS, PaaS, IaaS",
        "- Private",
        "- Public",
        "- Hybrid",
        "- Community"
      ]
    },
    {
      "title": "• On-premise vs. hosted vs. cloud",
      "subBullets": []
    },
    {
      "title": "• VDI/VDE",
      "subBullets": []
    },
    {
      "title": "• Cloud access security broker",
      "subBullets": []
    },
    {
      "title": "• Security as a service",
      "subBullets": []
    }
  ]
};
const DOMAIN_THREE_EIGHT: Bullet = {
  objectiveNumber: 3.8,
  bullets: [
    {
      "title": "• Automation/scripting",
      "subBullets": [
        "- Automated courses of action",
        "- Continuous monitoring",
        "- Configuration validation"
      ]
    },
    {
      "title": "• Templates",
      "subBullets": []
    },
    {
      "title": "• Master image",
      "subBullets": []
    },
    {
      "title": "• Non-persistence",
      "subBullets": [
        "- Snapshots",
        "- Revert to known state",
        "- Rollback to known configuration",
        "- Live boot media"
      ]
    },
    {
      "title": "• Elasticity",
      "subBullets": []
    },
    {
      "title": "• Scalability",
      "subBullets": []
    },
    {
      "title": "• Distributive allocation",
      "subBullets": []
    },
    {
      "title": "• Redundancy",
      "subBullets": []
    },
    {
      "title": "• Fault tolerance",
      "subBullets": []
    },
    {
      "title": "• High availability",
      "subBullets": []
    },
    {
      "title": "• RAID",
      "subBullets": []
    }
  ]
};
const DOMAIN_THREE_NINE: Bullet = {
  objectiveNumber: 3.9,
  bullets: [
    {
      "title": "• Lighting",
      "subBullets": []
    },
    {
      "title": "• Signs",
      "subBullets": []
    },
    {
      "title": "• Fencing/gate/cage",
      "subBullets": []
    },
    {
      "title": "• Security guards",
      "subBullets": []
    },
    {
      "title": "• Alarms ",
      "subBullets": []
    },
    {
      "title": "• Safe",
      "subBullets": []
    },
    {
      "title": "• Secure cabinets/enclosures",
      "subBullets": []
    },
    {
      "title": "• Protected distribution/Protected cabling",
      "subBullets": []
    },
    {
      "title": "• Airgap",
      "subBullets": []
    },
    {
      "title": "• Mantrap",
      "subBullets": []
    },
    {
      "title": "• Faraday cage",
      "subBullets": []
    },
    {
      "title": "• Lock types",
      "subBullets": []
    },
    {
      "title": "• Biometrics",
      "subBullets": []
    },
    {
      "title": "• Barricades/bollards",
      "subBullets": []
    },
    {
      "title": "• Tokens/cards",
      "subBullets": []
    },
    {
      "title": "• Environmental controls",
      "subBullets": [
        "- HVAC",
        "- Hot and cold aisles",
        "- Fire suppression"
      ]
    },
    {
      "title": "• Cable locks",
      "subBullets": []
    },
    {
      "title": "• Screen filters",
      "subBullets": []
    },
    {
      "title": "• Cameras",
      "subBullets": []
    },
    {
      "title": "• Motion detection",
      "subBullets": []
    },
    {
      "title": "• Logs",
      "subBullets": []
    },
    {
      "title": "• Infrared detection",
      "subBullets": []
    },
    {
      "title": "• Key management",
      "subBullets": []
    }
  ]
};
const OPERATIONS: Bullet[] = [
  DOMAIN_THREE_ONE, DOMAIN_THREE_TWO, DOMAIN_THREE_THREE,
  DOMAIN_THREE_FOUR, DOMAIN_THREE_FIVE, DOMAIN_THREE_SIX,
  DOMAIN_THREE_SEVEN, DOMAIN_THREE_EIGHT, DOMAIN_THREE_NINE
];

/**
 * DOMAIN: 4.0
 */
const DOMAIN_FOUR_ONE: Bullet = {
  objectiveNumber: 4.1,
  bullets: [
    {
      "title": "• AAA ",
      "subBullets": ['- Authentication', '- Accounting', '- Authorization']
    },
    {
      "title": "• Multifactor authentication",
      "subBullets": [
        "- Something you are",
        "- Something you have",
        "- Something you know",
        "- Somewhere you are",
        "- Something you do"
      ]
    },
    {
      "title": "• Federation",
      "subBullets": []
    },
    {
      "title": "• Single sign-on",
      "subBullets": []
    },
    {
      "title": "• Transitive trust",
      "subBullets": []
    }
  ]
};
const DOMAIN_FOUR_TWO: Bullet = {
  objectiveNumber: 4.2,
  bullets: [
    {
      "title": "• LDAP",
      "subBullets": []
    },
    {
      "title": "• Kerberos",
      "subBullets": []
    },
    {
      "title": "• TACACS+",
      "subBullets": []
    },
    {
      "title": "• CHAP",
      "subBullets": []
    },
    {
      "title": "• PAP",
      "subBullets": []
    },
    {
      "title": "• MSCHAP",
      "subBullets": []
    },
    {
      "title": "• RADIUS",
      "subBullets": []
    },
    {
      "title": "• SAML",
      "subBullets": []
    },
    {
      "title": "• OpenID Connect",
      "subBullets": []
    },
    {
      "title": "• OAUTH",
      "subBullets": []
    },
    {
      "title": "• Shibboleth",
      "subBullets": []
    },
    {
      "title": "• Secure token",
      "subBullets": []
    },
    {
      "title": "• NTLM",
      "subBullets": []
    }
  ]
};
const DOMAIN_FOUR_THREE: Bullet = {
  objectiveNumber: 4.3,
  bullets: [
    {
      "title": "• Access control models",
      "subBullets": [
        "- MAC, DAC, ABAC",
        "- Role-based access control",
        "- Rule-based access control"
      ]
    },
    {
      "title": "• Physical access control",
      "subBullets": [
        "- Proximity cards",
        "- Smart cards"
      ]
    },
    {
      "title": "• Biometric factors",
      "subBullets": [
        "- Fingerprint scanner",
        "- Retinal scanner",
        "- Iris scanner",
        "- Voice recognition",
        "- Facial recognition",
        "- False acceptance rate",
        "- False rejection rate",
        "- Crossover error rate"
      ]
    },
    {
      "title": "• Tokens",
      "subBullets": [
        "- Hardware",
        "- Software",
        "- HOTP/TOTP"
      ]
    },
    {
      "title": "• Certificate-based authentication",
      "subBullets": [
        "- PIV/CAC/smart card",
        "- IEEE 802.1x"
      ]
    },
    {
      "title": "• File system security",
      "subBullets": []
    },
    {
      "title": "• Database security",
      "subBullets": []
    }
  ]
};
const DOMAIN_FOUR_FOUR: Bullet = {
  objectiveNumber: 4.4,
  bullets: [
    {
      "title": "• Account types",
      "subBullets": [
        "- User account",
        "- Shared/generic accounts",
        "- Guest accounts",
        "- Service accounts",
        "- Privileged accounts"
      ]
    },
    {
      "title": "• General Concepts ",
      "subBullets": [
        "- Least privilege",
        "- Onboarding/offboarding",
        "- Permission auditing and review",
        "- Usage auditing and review",
        "- Time-of-day restrictions",
        "- Recertification",
        "- Standard naming convention",
        "- Account maintenance",
        "- Group-based access control",
        "- Location-based policies"
      ]
    },
    {
      "title": "• Account policy enforcement",
      "subBullets": [
        "- Credential management",
        "- Group policy",
        "- Password complexity",
        "- Expiration",
        "- Recovery",
        "- Disablement",
        "- Lockout",
        "- Password history",
        "- Password reuse",
        "- Password length"
      ]
    }
  ]
};


const SECURITY: Bullet[] = [
  DOMAIN_FOUR_ONE, DOMAIN_FOUR_TWO, DOMAIN_FOUR_THREE,
  DOMAIN_FOUR_FOUR
];

/**
 * DOMAIN: 5.0 Troubleshooting
 */
const DOMAIN_FIVE_ONE: Bullet = {
  objectiveNumber: 5.1,
  bullets: [
    {
      "title": "• Standard operating procedure",
      "subBullets": []
    },
    {
      "title": "• Agreement types",
      "subBullets": [
        "- BPA",
        "- SLA",
        "- ISA",
        "- MOU/MOA"
      ]
    },
    {
      "title": "• Personnel management",
      "subBullets": [
        "- Mandatory vacations",
        "- Job rotation",
        "- Separation of duties",
        "- Clean desk",
        "- Background checks",
        "- Exit interviews",
        "- Role-based awareness training",
        "- Data owner",
        "- Systems administrator",
        "- System owner",
        "- User",
        "- Privileged user",
        "- Executive user",
        "- NDA",
        "- Onboarding",
        "- Continuing education",
        "- Acceptable use policy/rules of behavior",
        "- Adverse actions"
      ]
    },
    {
      "title": "• General security policies",
      "subBullets": [
        "- Social media networks/apps",
        "- Personal emaii"
      ]
    }
  ]
};
const DOMAIN_FIVE_TWO: Bullet = {
  objectiveNumber: 5.2,
  bullets: [
    {
      "title": "• RTO/RPO",
      "subBullets": []
    },
    {
      "title": "• MTBF",
      "subBullets": []
    },
    {
      "title": "• MTTR",
      "subBullets": []
    },
    {
      "title": "• Mission-essential functions",
      "subBullets": []
    },
    {
      "title": "• Identification of critical systems",
      "subBullets": []
    },
    {
      "title": "• Single point of failure",
      "subBullets": []
    },
    {
      "title": "• Impact",
      "subBullets": [
        "- Life",
        "- Property",
        "- Safety",
        "- Finance",
        "- Reputation"
      ]
    },
    {
      "title": "• Privacy impact assessment",
      "subBullets": []
    },
    {
      "title": "• Privacy threshold assessment",
      "subBullets": []
    }
  ]
};
const DOMAIN_FIVE_THREE: Bullet = {
  objectiveNumber: 5.3,
  bullets: [
    {
      "title": "• Threat assessment",
      "subBullets": [
        "- Environmental",
        "- Manmade",
        "- Internal vs. external"
      ]
    },
    {
      "title": "• Risk assessment",
      "subBullets": [
        "- SLE, ALE, ARO",
        "- Asset value ",
        "- Risk register",
        "- Likelihood of occurrence",
        "- Supply chain assessment",
        "- Impact",
        "- Quantitative",
        "- Qualitative",
        "- Testing",
        "- Penetration testing auth",
        "- Vulnerability testing auth"
      ]
    },
    {
      "title": "• Risk response techniques",
      "subBullets": [
        "- Accept",
        "- Transfer",
        "- Avoid",
        "- Mitigate        "
      ]
    },
    {
      "title": "• Change management",
      "subBullets": []
    }
  ]
};
const DOMAIN_FIVE_FOUR: Bullet = {
  objectiveNumber: 5.4,
  bullets: [
    {
      "title": "• Incident response plan",
      "subBullets": [
        "- Documented incident types",
        "- Roles and responsibilities",
        "- Reporting requirements/escalation",
        "- Cyber-incident response teams",
        "- Exercise"
      ]
    },
    {
      "title": "• Incident response process",
      "subBullets": [
        "- Preparation",
        "- Identification",
        "- Containment",
        "- Eradication",
        "- Recovery",
        "- Lessons learned"
      ]
    }
  ]
};
const DOMAIN_FIVE_FIVE: Bullet = {
  objectiveNumber: 5.5,
  bullets: [
    {
      "title": "• Order of volatility",
      "subBullets": []
    },
    {
      "title": "• Chain of custody",
      "subBullets": []
    },
    {
      "title": "• Legal hold",
      "subBullets": []
    },
    {
      "title": "• Data acquisition",
      "subBullets": [
        "- Capture system image",
        "- Network traffic and logs",
        "- Capture video",
        "- Record time offset",
        "- Take hashes",
        "- Screenshots ",
        "- Witness interviews"
      ]
    },
    {
      "title": "• Preservation",
      "subBullets": []
    },
    {
      "title": "• Recovery",
      "subBullets": []
    },
    {
      "title": "• Strategic intelligence gathering",
      "subBullets": [
        "- Active logging"
      ]
    },
    {
      "title": "• Track man-hours",
      "subBullets": []
    }
  ]
};
const DOMAIN_FIVE_SIX: Bullet = {
  objectiveNumber: 5.6,
  bullets: [
    {
      "title": "• Recovery sites",
      "subBullets": [
        "- Hot site",
        "- Warm site",
        "- Cold site"
      ]
    },
    {
      "title": "• Order of restoration",
      "subBullets": []
    },
    {
      "title": "• Backup concepts",
      "subBullets": [
        "- Differential",
        "- Incremental",
        "- Snapshots ",
        "- Full"
      ]
    },
    {
      "title": "• Geographic considerations",
      "subBullets": [
        "- Off-site backups",
        "- Distance",
        "- Location selection",
        "- Legal implications",
        "- Data sovereignty"
      ]
    },
    {
      "title": "• Continuity of operations planning",
      "subBullets": [
        "- Exercises/tabletop",
        "- After-action reports",
        "- Failover",
        "- Alternate processing sites",
        "- Alternate business practice"
      ]
    }
  ]
};
const DOMAIN_FIVE_SEVEN: Bullet = {
  objectiveNumber: 5.7,
  bullets: [
    {
      "title": "• Deterrent",
      "subBullets": []
    },
    {
      "title": "• Preventive",
      "subBullets": []
    },
    {
      "title": "• Detective",
      "subBullets": []
    },
    {
      "title": "• Corrective",
      "subBullets": []
    },
    {
      "title": "• Compensating",
      "subBullets": []
    },
    {
      "title": "• Technical",
      "subBullets": []
    },
    {
      "title": "• Administrative",
      "subBullets": []
    },
    {
      "title": "• Physical",
      "subBullets": []
    }
  ]
};
const DOMAIN_FIVE_EIGHT: Bullet = {
  objectiveNumber: 5.8,
  bullets: [
    {
      "title": "• Data destruction/media sanitization",
      "subBullets": [
        "- Burning, Shredding",
        "- Pulping, Pulverizing",
        "- Degaussing, Purging",
        "- Wiping"
      ]
    },
    {
      "title": "• Data sensitivity labeling and handling",
      "subBullets": [
        "- Confidential, Private",
        "- Public, Proprietary ",
        "- PII, PHI"
      ]
    },
    {
      "title": "• Data roles",
      "subBullets": [
        "- Owner",
        "- Steward/custodian",
        "- Privacy officer"
      ]
    },
    {
      "title": "• Data retention",
      "subBullets": []
    },
    {
      "title": "• Legal and compliance",
      "subBullets": []
    }
  ]
};

/**
 * DOMAIN 6.0
 */
const DOMAIN_SIX_ONE: Bullet = {
  objectiveNumber: 6.1,
  bullets: [
    {
      "title": "• Symmetric algorithms",
      "subBullets": []
    },
    {
      "title": "• Modes of operation",
      "subBullets": []
    },
    {
      "title": "• Asymmetric algorithms",
      "subBullets": []
    },
    {
      "title": "• Hashing",
      "subBullets": []
    },
    {
      "title": "• Salt, IV, nonce",
      "subBullets": []
    },
    {
      "title": "• Elliptic curve",
      "subBullets": []
    },
    {
      "title": "• Weak/deprecated algorithms",
      "subBullets": []
    },
    {
      "title": "• Key exchange",
      "subBullets": []
    },
    {
      "title": "• Digital signatures",
      "subBullets": []
    },
    {
      "title": "• Diffusion",
      "subBullets": []
    },
    {
      "title": "• Confusion",
      "subBullets": []
    },
    {
      "title": "• Collision",
      "subBullets": []
    },
    {
      "title": "• Steganography ",
      "subBullets": []
    },
    {
      "title": "• Obfuscation",
      "subBullets": []
    },
    {
      "title": "• Stream vs. block",
      "subBullets": []
    },
    {
      "title": "• Key strength",
      "subBullets": []
    },
    {
      "title": "• Session keys",
      "subBullets": []
    },
    {
      "title": "• Ephemeral key",
      "subBullets": []
    },
    {
      "title": "• Secret algorithm",
      "subBullets": []
    },
    {
      "title": "• Data-in-transit",
      "subBullets": []
    },
    {
      "title": "• Data-at-rest",
      "subBullets": []
    },
    {
      "title": "• Data-in-use",
      "subBullets": []
    },
    {
      "title": "• Random/pseudo-random number gen",
      "subBullets": []
    },
    {
      "title": "• Key stretching",
      "subBullets": []
    },
    {
      "title": "• Implementation vs. algorithm selection",
      "subBullets": [
        "- Crypto service provider",
        "- Crypto modules"
      ]
    },
    {
      "title": "• Perfect forward secrecy",
      "subBullets": []
    },
    {
      "title": "• Security through obscurity",
      "subBullets": []
    },
    {
      "title": "• Common use cases",
      "subBullets": [
        "- Low power devices",
        "- Low latency",
        "- High resiliency",
        "- Supporting confidentiality",
        "- Supporting integrity",
        "- Supporting obfuscation",
        "- Supporting authentication",
        "- Supporting non-repudiation",
        "- Resource vs. security constraints"
      ]
    }
  ]
};
const DOMAIN_SIX_TWO: Bullet = {
  objectiveNumber: 6.2,
  bullets: [
    {
      "title": "• Symmetric algorithms",
      "subBullets": [
        "- AES, DES, 3DES",
        "- RC4, Blowfish/Twofish"
      ]
    },
    {
      "title": "• Cipher modes",
      "subBullets": [
        "- CBC, GCM, ECB, CTR",
        "- Stream vs. block"
      ]
    },
    {
      "title": "• Asymmetric algorithms",
      "subBullets": [
        "- RSA",
        "- DSA",
        "- Diffie-Hellman",
        "- Groups",
        "- DHE",
        "- ECDHE",
        "- Elliptic curve",
        "- PGP/GPG"
      ]
    },
    {
      "title": "• Hashing algorithms",
      "subBullets": [
        "- MD5, SHA, HMAC, RIPEMD"
      ]
    },
    {
      "title": "• Key stretching algorithms",
      "subBullets": [
        "- BCRYPT",
        "- PBKDF2"
      ]
    },
    {
      "title": "• Obfuscation",
      "subBullets": [
        "- XOR",
        "- ROT13",
        "- Substitution ciphers"
      ]
    }
  ]
};
const DOMAIN_SIX_THREE: Bullet = {
  objectiveNumber: 6.3,
  bullets: [
    {
      "title": "• Cryptographic protocols",
      "subBullets": [
        "- WPA, WPA2",
        "- CCMP, TKIP"
      ]
    },
    {
      "title": "• Authentication protocols",
      "subBullets": [
        "- EAP, PEAP",
        "- EAP-FAST",
        "- EAP-TLS",
        "- EAP-TTLS",
        "- IEEE 802.1x",
        "- RADIUS Federation"
      ]
    },
    {
      "title": "• Methods",
      "subBullets": [
        "- PSK vs. Enterprise vs. Open",
        "- WPS",
        "- Captive portals"
      ]
    }
  ]
};
const DOMAIN_SIX_FOUR: Bullet = {
  objectiveNumber: 6.4,
  bullets: [
    {
      "title": "• Components",
      "subBullets": [
        "- CA, Intermediate CA",
        "- CRL, OCSP, CSR",
        "- Certificate",
        "- Public key",
        "- Private key",
        "- Object identifiers (OID)"
      ]
    },
    {
      "title": "• Concepts ",
      "subBullets": [
        "- Online vs. offline CA",
        "- Stapling",
        "- Pinning",
        "- Trust model",
        "- Key escrow ",
        "- Certificate chaining"
      ]
    },
    {
      "title": "• Types of certificates",
      "subBullets": [
        "- Wildcard, SAN",
        "- Code signing",
        "- Self-signed",
        "- Machine/computer",
        "- Email, User, Root",
        "- Domain validation",
        "- Extended validation"
      ]
    },
    {
      "title": "• Certificate formats",
      "subBullets": [
        "- DER, PEM, PFX",
        "- CER, P12, P7B"
      ]
    }
  ]
};

const CRYPTOGRAPHY: Bullet[] = [
  DOMAIN_SIX_ONE, DOMAIN_SIX_TWO, DOMAIN_SIX_THREE,
  DOMAIN_SIX_FOUR
];


const TROUBLESHOOTING: Bullet[] = [
  DOMAIN_FIVE_ONE, DOMAIN_FIVE_TWO, DOMAIN_FIVE_THREE,
  DOMAIN_FIVE_FOUR, DOMAIN_FIVE_FIVE, DOMAIN_FIVE_SIX,
  DOMAIN_FIVE_SEVEN, DOMAIN_FIVE_EIGHT
];

export const BULLETS: Bullet[] = [
  ...CONCEPTS,
  ...INFRASTRUCTURE,
  ...OPERATIONS,
  ...SECURITY,
  ...TROUBLESHOOTING,
  ...CRYPTOGRAPHY
];


