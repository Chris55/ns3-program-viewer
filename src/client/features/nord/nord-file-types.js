export const supportedProgramTypes = [
    // NS3
    ".ns3f",
    ".ns3y",
    ".ns3l",
    // NS2
    ".ns2p",
    ".ns2s",
    ".ns2l",
    // NLA1
    //".nlas",
];

export const supportedBackupTypes = [
    // NS3
    ".ns3b",
    ".ns3fb",
    ".ns3synthpb",
    ".ns3sbundle",
    // NS2
    ".ns2pb",
    ".ns2exb",
    ".ns2b",
    ".ns2synthpb",
    // NLA1
    //".nlasbundle",
    //".nlab",
];

export const allSupportedTypes = [...supportedProgramTypes, ...supportedBackupTypes];
