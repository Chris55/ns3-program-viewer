exports.model = {
    "name": "Default Noel",
    "filename": "Default Noel.ns2p",
    "ext": "ns2p",
    "description": "Nord Stage 2 Program",
    "id": {
        "bank": 1,
        "location": 0,
        "name": "B:01:1",
        "value": 25
    },
    "category": "None",
    "version": {
        "majorVersion": 7,
        "minorVersion": 0,
        "value": "7"
    },
    "masterClock": {
        "rate": {
            "value": "120 bpm"
        }
    },
    "transpose": {
        "enabled": false,
        "value": ""
    },
    "split": {
        "enabled": false,
        "low": {
            "note": "--"
        },
        "high": {
            "note": "--"
        }
    },
    "dualKeyboard": {
        "enabled": false
    },
    "compressor": {
        "enabled": true,
        "amount": {
            "midi": 0,
            "isDefault": true,
            "value": "0.0"
        }
    },
    "reverb": {
        "enabled": true,
        "type": {
            "value": "Stage 1",
            "isDefault": true
        },
        "amount": {
            "midi": 64,
            "isDefault": true,
            "value": "5.0"
        }
    },
    "slotA": {
        "enabled": true,
        "organ": {
            "enabled": true,
            "kbZone": {
                "array": [
                    true,
                    true,
                    true
                ],
                "value": "000"
            },
            "volume": {
                "midi": 127,
                "value": "0.0 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    }
                }
            },
            "octaveShift": {
                "value": 0
            },
            "pitchStick": {
                "enabled": false
            },
            "sustainPedal": {
                "enabled": false
            },
            "latchPedal": {
                "enabled": false
            },
            "kbGate": {
                "enabled": false
            },
            "type": {
                "value": "B3"
            },
            "preset1": {
                "enabled": true,
                "drawbars": {
                    "value": "88 8000 000",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        }
                    }
                },
                "vibrato": {
                    "enabled": false,
                    "mode": {
                        "value": "C3",
                        "label": "Chorus"
                    }
                },
                "percussion": {
                    "enabled": false,
                    "volumeSoft": {
                        "enabled": false
                    },
                    "decayFast": {
                        "enabled": false
                    },
                    "harmonicThird": {
                        "enabled": false
                    }
                }
            },
            "preset2": {
                "enabled": false,
                "drawbars": {
                    "value": "88 8000 000",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        }
                    }
                },
                "vibrato": {
                    "enabled": false
                },
                "percussion": {
                    "enabled": false
                }
            },
            "output": {
                "value": "1&2",
                "isDefault": true
            }
        },
        "piano": {
            "debug": {
                "sampleId": "0",
                "lib": {
                    "valid": false,
                    "value": "Sample 1 (Program Init)",
                    "name": "Sample not found",
                    "info": "",
                    "version": "",
                    "size": "",
                    "location": 0,
                    "filename": ""
                }
            },
            "enabled": true,
            "kbZone": {
                "array": [
                    true,
                    true,
                    true
                ],
                "value": "000"
            },
            "volume": {
                "midi": 127,
                "value": "0.0 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    }
                }
            },
            "octaveShift": {
                "value": 0
            },
            "pitchStick": {
                "enabled": false
            },
            "sustainPedal": {
                "enabled": true
            },
            "latchPedal": {
                "enabled": true
            },
            "kbGate": {
                "enabled": false
            },
            "type": {
                "value": "Grand"
            },
            "name": {
                "valid": false,
                "value": "Sample 1 (Program Init)",
                "name": "Sample not found",
                "info": "",
                "version": "",
                "size": "",
                "location": 0,
                "filename": ""
            },
            "slotDetune": {
                "value": "Off"
            },
            "longRelease": {
                "enabled": false
            },
            "stringResonance": {
                "enabled": false
            },
            "pedalNoise": {
                "enabled": false
            },
            "dynamics": {
                "value": "0"
            },
            "clavinetModel": {
                "enabled": false,
                "value": "A"
            },
            "clavinetEqHi": {
                "enabled": false,
                "value": "Off"
            },
            "clavinetEq": {
                "enabled": false,
                "value": "Off"
            },
            "output": {
                "value": "1&2",
                "isDefault": true
            }
        },
        "synth": {
            "debug": {
                "sampleId": "0",
                "lib": {
                    "valid": true,
                    "value": "Analog Tri",
                    "info": "---",
                    "version": "",
                    "location": 0,
                    "filename": "",
                    "useShapeKnob": true,
                    "isDefault": true
                },
                "preset": {
                    "location": 512,
                    "userPreset": false,
                    "userPresetLocationValue": 0,
                    "userPresetLocationName": "1:01",
                    "samplePresetLocationValue": 112,
                    "samplePresetLocationName": "113",
                    "presetName": "\u0001"
                }
            },
            "enabled": true,
            "kbZone": {
                "array": [
                    true,
                    true,
                    true
                ],
                "value": "000"
            },
            "volume": {
                "midi": 127,
                "value": "0.0 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    }
                }
            },
            "octaveShift": {
                "value": 0
            },
            "pitchStick": {
                "enabled": true
            },
            "sustainPedal": {
                "enabled": true
            },
            "latchPedal": {
                "enabled": false
            },
            "kbGate": {
                "enabled": false
            },
            "keyboardHold": {
                "enabled": false
            },
            "voice": {
                "value": "Off"
            },
            "glide": {
                "value": "0.0"
            },
            "unison": {
                "value": "Off"
            },
            "vibrato": {
                "value": "Off"
            },
            "oscillators": {
                "type": {
                    "value": "TRI"
                },
                "waveForm1": {
                    "valid": true,
                    "value": "Analog Tri",
                    "info": "---",
                    "version": "",
                    "location": 0,
                    "filename": "",
                    "useShapeKnob": true,
                    "isDefault": true
                },
                "shapeCtrl": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 0,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 0,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 0,
                                "value": "none"
                            }
                        }
                    }
                },
                "shapeMod": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "0.0",
                    "label": "LFO/Env AMT"
                },
                "skipSampleAttack": {
                    "enabled": false,
                    "isDefault": true,
                    "value": false,
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": false,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": false,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": false,
                                "value": "none"
                            }
                        }
                    }
                }
            },
            "filter": {
                "type": {
                    "value": "LP12",
                    "isDefault": true
                },
                "kbTrack": {
                    "enabled": false,
                    "isDefault": true
                },
                "frequency": {
                    "midi": 127,
                    "isDefault": true,
                    "value": "21 kHz",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 127,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 127,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 127,
                                "value": "none"
                            }
                        }
                    }
                },
                "resonance": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.0"
                },
                "modulation1": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.0"
                },
                "modulation2": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "0.0",
                    "label": "VEL/Env AMT"
                }
            },
            "envelopes": {
                "modulation": {
                    "attack": {
                        "midi": 0,
                        "isDefault": true,
                        "value": "0.5 ms"
                    },
                    "decay": {
                        "midi": 127,
                        "isDefault": true,
                        "value": "45 s"
                    },
                    "release": {
                        "midi": 0,
                        "isDefault": true,
                        "value": "3.0 ms"
                    },
                    "velocity": {
                        "enabled": false,
                        "isDefault": true
                    }
                },
                "amplifier": {
                    "attack": {
                        "midi": 0,
                        "isDefault": true,
                        "value": "0.5 ms"
                    },
                    "decay": {
                        "midi": 127,
                        "isDefault": true,
                        "value": "45 s"
                    },
                    "release": {
                        "midi": 0,
                        "isDefault": true,
                        "value": "3.0 ms"
                    },
                    "velocity": {
                        "enabled": false,
                        "isDefault": true
                    }
                }
            },
            "lfo": {
                "wave": {
                    "value": "SQUARE",
                    "isDefault": true
                },
                "rate": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.03 Hz"
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                }
            },
            "arpeggiator": {
                "enabled": true,
                "rate": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "80 BPM"
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                },
                "range": {
                    "value": "1 Octave",
                    "isDefault": true
                },
                "pattern": {
                    "value": "UP",
                    "isDefault": true
                }
            },
            "output": {
                "value": "1&2",
                "isDefault": true
            }
        },
        "extern": {
            "enabled": false,
            "kbZone": {
                "array": [
                    false,
                    false,
                    false
                ],
                "value": "---"
            },
            "octaveShift": {
                "value": 0
            },
            "pitchStick": {
                "enabled": true
            },
            "sustainPedal": {
                "enabled": true
            },
            "control": {
                "value": "Midi CC"
            },
            "midiCc": {
                "enabled": false,
                "midi": 0,
                "value": "0",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    }
                }
            },
            "program": {
                "enabled": false,
                "midi": 0,
                "value": "1"
            },
            "volume": {
                "enabled": false,
                "midi": 0,
                "value": "0",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    }
                }
            },
            "channel": {
                "value": 14,
                "type": "MIDI"
            },
            "cc00": {
                "enabled": false,
                "value": 0
            },
            "cc32": {
                "enabled": false,
                "value": 0
            },
            "cc": {
                "value": 2,
                "text": "Breath Controller"
            },
            "wheel": {
                "enabled": true
            },
            "afterTouch": {
                "enabled": true
            },
            "controlPedal": {
                "enabled": true
            },
            "swell": {
                "enabled": true
            },
            "velocity": {
                "value": "Normal"
            }
        },
        "effects": {
            "rotarySpeaker": {
                "enabled": true,
                "source": {
                    "value": "Organ"
                },
                "drive": {
                    "value": "0.0",
                    "isDefault": true
                },
                "stopMode": {
                    "enabled": false,
                    "isDefault": true
                },
                "speed": {
                    "value": "Slow/Stop",
                    "isDefault": true,
                    "morph": {
                        "wheel": {
                            "enabled": false
                        },
                        "afterTouch": {
                            "enabled": false
                        },
                        "controlPedal": {
                            "enabled": false
                        }
                    }
                }
            },
            "effect1": {
                "enabled": true,
                "source": {
                    "value": "Piano"
                },
                "type": {
                    "value": "Panning",
                    "isDefault": true
                },
                "amount": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "5.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "rate": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "64 (5.0)",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                }
            },
            "effect2": {
                "enabled": true,
                "source": {
                    "value": "Piano"
                },
                "type": {
                    "value": "Phaser 1",
                    "isDefault": true
                },
                "amount": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "5.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "rate": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "64 (5.0)",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                }
            },
            "delay": {
                "enabled": true,
                "source": {
                    "value": "Piano"
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                },
                "tempo": {
                    "midi": 64,
                    "lsw": 0,
                    "value": "234 ms 128 bpm (x2)",
                    "isDefault": true,
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "pingPong": {
                    "enabled": false,
                    "isDefault": true
                },
                "feedback": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "5.0"
                },
                "amount": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "5.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                }
            },
            "ampSimEq": {
                "enabled": true,
                "source": {
                    "value": "Piano"
                },
                "ampType": {
                    "value": "Off",
                    "isDefault": true
                },
                "treble": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "+0.0 dB"
                },
                "mid": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "+0.0 dB"
                },
                "bass": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "+0.0 dB"
                },
                "midFilterFreq": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "999 Hz"
                },
                "overdrive": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.0"
                }
            }
        }
    },
    "slotB": {
        "enabled": true,
        "organ": {
            "enabled": true,
            "kbZone": {
                "array": [
                    true,
                    true,
                    true
                ],
                "value": "000"
            },
            "volume": {
                "midi": 127,
                "value": "0.0 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    }
                }
            },
            "octaveShift": {
                "value": 0
            },
            "pitchStick": {
                "enabled": false
            },
            "sustainPedal": {
                "enabled": false
            },
            "latchPedal": {
                "enabled": false
            },
            "kbGate": {
                "enabled": false
            },
            "type": {
                "value": "B3"
            },
            "preset1": {
                "enabled": true,
                "drawbars": {
                    "value": "88 8000 000",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        }
                    }
                },
                "vibrato": {
                    "enabled": false,
                    "mode": {
                        "value": "C3",
                        "label": "Chorus"
                    }
                },
                "percussion": {
                    "enabled": false,
                    "volumeSoft": {
                        "enabled": true
                    },
                    "decayFast": {
                        "enabled": true
                    },
                    "harmonicThird": {
                        "enabled": true
                    }
                }
            },
            "preset2": {
                "enabled": false,
                "drawbars": {
                    "value": "88 8000 000",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "value": "-- ---- ---"
                            }
                        }
                    }
                },
                "vibrato": {
                    "enabled": false
                },
                "percussion": {
                    "enabled": false
                }
            },
            "output": {
                "value": "1&2",
                "isDefault": true
            }
        },
        "piano": {
            "debug": {
                "sampleId": "0",
                "lib": {
                    "valid": false,
                    "value": "Sample 1 (Program Init)",
                    "name": "Sample not found",
                    "info": "",
                    "version": "",
                    "size": "",
                    "location": 0,
                    "filename": ""
                }
            },
            "enabled": true,
            "kbZone": {
                "array": [
                    true,
                    true,
                    true
                ],
                "value": "000"
            },
            "volume": {
                "midi": 127,
                "value": "0.0 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    }
                }
            },
            "octaveShift": {
                "value": 0
            },
            "pitchStick": {
                "enabled": false
            },
            "sustainPedal": {
                "enabled": true
            },
            "latchPedal": {
                "enabled": true
            },
            "kbGate": {
                "enabled": false
            },
            "type": {
                "value": "Grand"
            },
            "name": {
                "valid": false,
                "value": "Sample 1 (Program Init)",
                "name": "Sample not found",
                "info": "",
                "version": "",
                "size": "",
                "location": 0,
                "filename": ""
            },
            "slotDetune": {
                "value": "Off"
            },
            "longRelease": {
                "enabled": false
            },
            "stringResonance": {
                "enabled": false
            },
            "pedalNoise": {
                "enabled": false
            },
            "dynamics": {
                "value": "0"
            },
            "clavinetModel": {
                "enabled": false,
                "value": "A"
            },
            "clavinetEqHi": {
                "enabled": false,
                "value": "Off"
            },
            "clavinetEq": {
                "enabled": false,
                "value": "Off"
            },
            "output": {
                "value": "1&2",
                "isDefault": true
            }
        },
        "synth": {
            "debug": {
                "sampleId": "0",
                "lib": {
                    "valid": true,
                    "value": "Analog Tri",
                    "info": "---",
                    "version": "",
                    "location": 0,
                    "filename": "",
                    "useShapeKnob": true,
                    "isDefault": true
                },
                "preset": {
                    "location": 512,
                    "userPreset": false,
                    "userPresetLocationValue": 0,
                    "userPresetLocationName": "1:01",
                    "samplePresetLocationValue": 112,
                    "samplePresetLocationName": "113",
                    "presetName": "\u0001"
                }
            },
            "enabled": true,
            "kbZone": {
                "array": [
                    true,
                    true,
                    true
                ],
                "value": "000"
            },
            "volume": {
                "midi": 127,
                "value": "0.0 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 127,
                            "value": "none"
                        }
                    }
                }
            },
            "octaveShift": {
                "value": 0
            },
            "pitchStick": {
                "enabled": true
            },
            "sustainPedal": {
                "enabled": true
            },
            "latchPedal": {
                "enabled": false
            },
            "kbGate": {
                "enabled": false
            },
            "keyboardHold": {
                "enabled": false
            },
            "voice": {
                "value": "Off"
            },
            "glide": {
                "value": "0.0"
            },
            "unison": {
                "value": "Off"
            },
            "vibrato": {
                "value": "Off"
            },
            "oscillators": {
                "type": {
                    "value": "TRI"
                },
                "waveForm1": {
                    "valid": true,
                    "value": "Analog Tri",
                    "info": "---",
                    "version": "",
                    "location": 0,
                    "filename": "",
                    "useShapeKnob": true,
                    "isDefault": true
                },
                "shapeCtrl": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 0,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 0,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 0,
                                "value": "none"
                            }
                        }
                    }
                },
                "shapeMod": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "0.0",
                    "label": "LFO/Env AMT"
                },
                "skipSampleAttack": {
                    "enabled": false,
                    "isDefault": true,
                    "value": false,
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": false,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": false,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": false,
                                "value": "none"
                            }
                        }
                    }
                }
            },
            "filter": {
                "type": {
                    "value": "LP12",
                    "isDefault": true
                },
                "kbTrack": {
                    "enabled": false,
                    "isDefault": true
                },
                "frequency": {
                    "midi": 127,
                    "isDefault": true,
                    "value": "21 kHz",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 127,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 127,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 127,
                                "value": "none"
                            }
                        }
                    }
                },
                "resonance": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.0"
                },
                "modulation1": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.0"
                },
                "modulation2": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "0.0",
                    "label": "VEL/Env AMT"
                }
            },
            "envelopes": {
                "modulation": {
                    "attack": {
                        "midi": 0,
                        "isDefault": true,
                        "value": "0.5 ms"
                    },
                    "decay": {
                        "midi": 127,
                        "isDefault": true,
                        "value": "45 s"
                    },
                    "release": {
                        "midi": 0,
                        "isDefault": true,
                        "value": "3.0 ms"
                    },
                    "velocity": {
                        "enabled": false,
                        "isDefault": true
                    }
                },
                "amplifier": {
                    "attack": {
                        "midi": 0,
                        "isDefault": true,
                        "value": "0.5 ms"
                    },
                    "decay": {
                        "midi": 127,
                        "isDefault": true,
                        "value": "45 s"
                    },
                    "release": {
                        "midi": 0,
                        "isDefault": true,
                        "value": "3.0 ms"
                    },
                    "velocity": {
                        "enabled": false,
                        "isDefault": true
                    }
                }
            },
            "lfo": {
                "wave": {
                    "value": "SQUARE",
                    "isDefault": true
                },
                "rate": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.03 Hz"
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                }
            },
            "arpeggiator": {
                "enabled": true,
                "rate": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "80 BPM"
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                },
                "range": {
                    "value": "1 Octave",
                    "isDefault": true
                },
                "pattern": {
                    "value": "UP",
                    "isDefault": true
                }
            },
            "output": {
                "value": "1&2",
                "isDefault": true
            }
        },
        "extern": {
            "enabled": false,
            "kbZone": {
                "array": [
                    false,
                    false,
                    false
                ],
                "value": "---"
            },
            "octaveShift": {
                "value": 0
            },
            "pitchStick": {
                "enabled": true
            },
            "sustainPedal": {
                "enabled": true
            },
            "control": {
                "value": "Midi CC"
            },
            "midiCc": {
                "enabled": false,
                "midi": 0,
                "value": "0",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    }
                }
            },
            "program": {
                "enabled": false,
                "midi": 0,
                "value": "1"
            },
            "volume": {
                "enabled": false,
                "midi": 0,
                "value": "0",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 0,
                            "value": "none"
                        }
                    }
                }
            },
            "channel": {
                "value": 14,
                "type": "MIDI"
            },
            "cc00": {
                "enabled": false,
                "value": 0
            },
            "cc32": {
                "enabled": false,
                "value": 0
            },
            "cc": {
                "value": 2,
                "text": "Breath Controller"
            },
            "wheel": {
                "enabled": true
            },
            "afterTouch": {
                "enabled": true
            },
            "controlPedal": {
                "enabled": true
            },
            "swell": {
                "enabled": true
            },
            "velocity": {
                "value": "Normal"
            }
        },
        "effects": {
            "rotarySpeaker": {
                "enabled": true,
                "source": {
                    "value": "Organ"
                },
                "drive": {
                    "value": "0.0",
                    "isDefault": true
                },
                "stopMode": {
                    "enabled": false,
                    "isDefault": true
                },
                "speed": {
                    "value": "Slow/Stop",
                    "isDefault": true,
                    "morph": {
                        "wheel": {
                            "enabled": false
                        },
                        "afterTouch": {
                            "enabled": false
                        },
                        "controlPedal": {
                            "enabled": false
                        }
                    }
                }
            },
            "effect1": {
                "enabled": true,
                "source": {
                    "value": "Piano"
                },
                "type": {
                    "value": "Panning",
                    "isDefault": true
                },
                "amount": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "5.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "rate": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "64 (5.0)",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                }
            },
            "effect2": {
                "enabled": true,
                "source": {
                    "value": "Piano"
                },
                "type": {
                    "value": "Phaser 1",
                    "isDefault": true
                },
                "amount": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "5.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "rate": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "64 (5.0)",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                }
            },
            "delay": {
                "enabled": true,
                "source": {
                    "value": "Piano"
                },
                "masterClock": {
                    "enabled": false,
                    "isDefault": true
                },
                "tempo": {
                    "midi": 64,
                    "lsw": 0,
                    "value": "234 ms 128 bpm (x2)",
                    "isDefault": true,
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                },
                "pingPong": {
                    "enabled": false,
                    "isDefault": true
                },
                "feedback": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "5.0"
                },
                "amount": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "5.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 64,
                                "value": "none"
                            }
                        }
                    }
                }
            },
            "ampSimEq": {
                "enabled": true,
                "source": {
                    "value": "Piano"
                },
                "ampType": {
                    "value": "Off",
                    "isDefault": true
                },
                "treble": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "+0.0 dB"
                },
                "mid": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "+0.0 dB"
                },
                "bass": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "+0.0 dB"
                },
                "midFilterFreq": {
                    "midi": 64,
                    "isDefault": true,
                    "value": "999 Hz"
                },
                "overdrive": {
                    "midi": 0,
                    "isDefault": true,
                    "value": "0.0"
                }
            }
        }
    }
};
