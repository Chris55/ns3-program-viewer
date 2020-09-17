exports.ns3Model = {
    "name": "GimmeSomeLovin_W-org",
    "version": "3.01",
    "category": "Organ",
    "panelA": {
        "enabled": true,
        "organ": {
            "enabled": true,
            "kbZone": {
                "array": [
                    true,
                    true,
                    true,
                    true
                ],
                "value": [
                    "0000"
                ]
            },
            "volume": {
                "midi": 4,
                "value": "-60.1 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 4,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 4,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": true,
                        "to": {
                            "midi": 127,
                            "value": "0.0 dB"
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
            "type": {
                "value": "B3"
            },
            "preset1": {
                "value": "888600000",
                "morph": {
                    "wheel": {
                        "enabled": true,
                        "to": {
                            "value": "---711111"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    }
                }
            },
            "preset2": {
                "value": "888888888",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    }
                }
            },
            "live": {
                "enabled": false
            },
            "vibrato": {
                "enabled": false,
                "mode": {
                    "value": "C1"
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
        "piano": {
            "debug": {
                "sampleVariation": 0,
                "sampleId": "5303b5f1",
                "name": "Royal Grand 3D YaS6 XL 5.4"
            },
            "enabled": false,
            "kbZone": {
                "array": [
                    false,
                    false,
                    false,
                    false
                ],
                "value": "----"
            },
            "volume": {
                "midi": 105,
                "value": "-3.3 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
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
            "type": {
                "value": "Grand"
            },
            "model": {
                "value": 1
            },
            "name": {
                "value": "Royal Grand 3D YaS6 XL 5.4"
            },
            "timbre": {
                "value": "None"
            },
            "kbTouch": {
                "value": "Normal"
            },
            "layerDetune": {
                "value": "Off"
            },
            "softRelease": {
                "enabled": false
            },
            "pedalNoise": {
                "enabled": false
            },
            "stringResonance": {
                "enabled": false
            }
        },
        "synth": {
            "debug": {
                "sampleId": "7fffffff"
            },
            "enabled": false,
            "kbZone": {
                "array": [
                    false,
                    false,
                    false,
                    false
                ],
                "value": "----"
            },
            "volume": {
                "midi": 105,
                "value": "-3.3 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    }
                }
            },
            "octaveShift": {
                "value": "0"
            },
            "pitchStick": {
                "enabled": true
            },
            "sustainPedal": {
                "enabled": true
            },
            "keyboardHold": {
                "enabled": false
            },
            "voice": {
                "value": "Poly"
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
                    "value": "Classic"
                },
                "waveForm1": {
                    "value": "Sine"
                },
                "config": {
                    "value": "None"
                },
                "control": {
                    "midi": 0,
                    "value": "",
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
                "pitch": {
                    "midi": 26,
                    "value": "0 semi"
                },
                "modulations": {
                    "lfoAmount": {
                        "midi": 64,
                        "value": "0.0",
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
                    "modEnvAmount": {
                        "midi": 64,
                        "value": "0.0",
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
                "fastAttack": {
                    "enabled": false
                }
            },
            "filter": {
                "type": {
                    "value": "LP12"
                },
                "kbTrack": {
                    "value": "Off"
                },
                "drive": {
                    "value": "Off"
                },
                "modulations": {
                    "lfoAmount": {
                        "midi": 0,
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
                    "velAmount": {
                        "midi": 64,
                        "value": "0.0"
                    },
                    "modEnvAmount": {
                        "midi": 64,
                        "value": "0.0"
                    }
                },
                "cutoffFrequency": {
                    "midi": 127,
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
                "highPassCutoffFrequency": {
                    "midi": 0,
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
                "resonance": {
                    "midi": 0,
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
                }
            },
            "envelopes": {
                "modulation": {
                    "attack": {
                        "midi": 0,
                        "value": "0.5 ms"
                    },
                    "decay": {
                        "midi": 0,
                        "value": "3.0 ms"
                    },
                    "release": {
                        "midi": 0,
                        "value": "3.0 ms"
                    },
                    "velocity": {
                        "enabled": false
                    }
                },
                "amplifier": {
                    "attack": {
                        "midi": 0,
                        "value": "0.5 ms"
                    },
                    "decay": {
                        "midi": 127,
                        "value": "Sustain"
                    },
                    "release": {
                        "midi": 0,
                        "value": "3.0 ms"
                    },
                    "velocity": {
                        "value": "Off"
                    }
                }
            },
            "lfo": {
                "wave": {
                    "value": "Triangle"
                },
                "rate": {
                    "midi": 0,
                    "value": "0.03 Hz",
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
                "masterClock": {
                    "enabled": false
                }
            },
            "arpeggiator": {
                "enabled": false,
                "rate": {
                    "midi": 54,
                    "value": "120 bpm",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 54,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 54,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 54,
                                "value": "none"
                            }
                        }
                    }
                },
                "kbSync": {
                    "enabled": false
                },
                "masterClock": {
                    "enabled": false
                },
                "range": {
                    "value": "1 Octave"
                },
                "pattern": {
                    "value": "Up"
                }
            }
        },
        "extern": {
            "enabled": false,
            "kbZone": {
                "array": [
                    false,
                    false,
                    false,
                    false
                ],
                "value": "----"
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
            "control": {
                "value": "Volume"
            },
            "midiCc": {
                "midi": 0,
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
                "midi": 0,
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
            "volume": {
                "midi": 0,
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
            }
        },
        "effects": {
            "rotarySpeaker": {
                "enabled": true,
                "source": {
                    "value": "Organ"
                },
                "drive": {
                    "value": "7.6"
                },
                "stopMode": {
                    "enabled": false
                },
                "speed": {
                    "value": "Slow/Stop",
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
                "enabled": false,
                "source": {
                    "value": "Organ"
                },
                "type": {
                    "value": "Panning"
                },
                "amount": {
                    "midi": 64,
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
                "masterClock": {
                    "enabled": false
                }
            },
            "effect2": {
                "enabled": false,
                "source": {
                    "value": "Organ"
                },
                "type": {
                    "value": "Phaser 1"
                },
                "amount": {
                    "midi": 64,
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
                    "value": "5.0"
                }
            },
            "compressor": {
                "enabled": false,
                "amount": {
                    "midi": 0,
                    "value": "0.0"
                },
                "fast": {
                    "enabled": false
                }
            },
            "reverb": {
                "enabled": true,
                "type": {
                    "value": "Stage 1"
                },
                "amount": {
                    "midi": 51,
                    "value": "4.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 51,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 51,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 51,
                                "value": "none"
                            }
                        }
                    }
                },
                "bright": {
                    "enabled": false
                }
            }
        }
    },
    "panelB": {
        "enabled": false,
        "organ": {
            "enabled": true,
            "kbZone": {
                "array": [
                    true,
                    true,
                    true,
                    true
                ],
                "value": [
                    "0000"
                ]
            },
            "volume": {
                "midi": 0,
                "value": "Off",
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
                        "enabled": true,
                        "to": {
                            "midi": 127,
                            "value": "0.0 dB"
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
            "type": {
                "value": "B3"
            },
            "preset1": {
                "value": "852330100",
                "morph": {
                    "wheel": {
                        "enabled": true,
                        "to": {
                            "value": "-88881811"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    }
                }
            },
            "preset2": {
                "value": "888888888",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "value": "---------"
                        }
                    }
                }
            },
            "live": {
                "enabled": false
            },
            "vibrato": {
                "enabled": false,
                "mode": {
                    "value": "V1"
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
        "piano": {
            "debug": {
                "sampleVariation": 0,
                "sampleId": "5303b5f1",
                "name": "Royal Grand 3D YaS6 XL 5.4"
            },
            "enabled": false,
            "kbZone": {
                "array": [
                    false,
                    false,
                    false,
                    false
                ],
                "value": "----"
            },
            "volume": {
                "midi": 105,
                "value": "-3.3 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
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
            "type": {
                "value": "Grand"
            },
            "model": {
                "value": 1
            },
            "name": {
                "value": "Royal Grand 3D YaS6 XL 5.4"
            },
            "timbre": {
                "value": "None"
            },
            "kbTouch": {
                "value": "Normal"
            },
            "layerDetune": {
                "value": "Off"
            },
            "softRelease": {
                "enabled": false
            },
            "pedalNoise": {
                "enabled": false
            },
            "stringResonance": {
                "enabled": false
            }
        },
        "synth": {
            "debug": {
                "sampleId": "7fffffff"
            },
            "enabled": false,
            "kbZone": {
                "array": [
                    false,
                    false,
                    false,
                    false
                ],
                "value": "----"
            },
            "volume": {
                "midi": 105,
                "value": "-3.3 dB",
                "morph": {
                    "wheel": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    },
                    "afterTouch": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    },
                    "controlPedal": {
                        "enabled": false,
                        "to": {
                            "midi": 105,
                            "value": "none"
                        }
                    }
                }
            },
            "octaveShift": {
                "value": "0"
            },
            "pitchStick": {
                "enabled": true
            },
            "sustainPedal": {
                "enabled": true
            },
            "keyboardHold": {
                "enabled": false
            },
            "voice": {
                "value": "Poly"
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
                    "value": "Classic"
                },
                "waveForm1": {
                    "value": "Sine"
                },
                "config": {
                    "value": "None"
                },
                "control": {
                    "midi": 0,
                    "value": "",
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
                "pitch": {
                    "midi": 26,
                    "value": "0 semi"
                },
                "modulations": {
                    "lfoAmount": {
                        "midi": 64,
                        "value": "0.0",
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
                    "modEnvAmount": {
                        "midi": 64,
                        "value": "0.0",
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
                "fastAttack": {
                    "enabled": false
                }
            },
            "filter": {
                "type": {
                    "value": "LP12"
                },
                "kbTrack": {
                    "value": "Off"
                },
                "drive": {
                    "value": "Off"
                },
                "modulations": {
                    "lfoAmount": {
                        "midi": 0,
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
                    "velAmount": {
                        "midi": 64,
                        "value": "0.0"
                    },
                    "modEnvAmount": {
                        "midi": 64,
                        "value": "0.0"
                    }
                },
                "cutoffFrequency": {
                    "midi": 127,
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
                "highPassCutoffFrequency": {
                    "midi": 0,
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
                "resonance": {
                    "midi": 0,
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
                }
            },
            "envelopes": {
                "modulation": {
                    "attack": {
                        "midi": 0,
                        "value": "0.5 ms"
                    },
                    "decay": {
                        "midi": 0,
                        "value": "3.0 ms"
                    },
                    "release": {
                        "midi": 0,
                        "value": "3.0 ms"
                    },
                    "velocity": {
                        "enabled": false
                    }
                },
                "amplifier": {
                    "attack": {
                        "midi": 0,
                        "value": "0.5 ms"
                    },
                    "decay": {
                        "midi": 127,
                        "value": "Sustain"
                    },
                    "release": {
                        "midi": 0,
                        "value": "3.0 ms"
                    },
                    "velocity": {
                        "value": "Off"
                    }
                }
            },
            "lfo": {
                "wave": {
                    "value": "Triangle"
                },
                "rate": {
                    "midi": 0,
                    "value": "0.03 Hz",
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
                "masterClock": {
                    "enabled": false
                }
            },
            "arpeggiator": {
                "enabled": false,
                "rate": {
                    "midi": 54,
                    "value": "120 bpm",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 54,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 54,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 54,
                                "value": "none"
                            }
                        }
                    }
                },
                "kbSync": {
                    "enabled": false
                },
                "masterClock": {
                    "enabled": false
                },
                "range": {
                    "value": "1 Octave"
                },
                "pattern": {
                    "value": "Up"
                }
            }
        },
        "extern": {
            "enabled": false,
            "kbZone": {
                "array": [
                    false,
                    false,
                    false,
                    false
                ],
                "value": "----"
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
            "control": {
                "value": "Volume"
            },
            "midiCc": {
                "midi": 0,
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
                "midi": 0,
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
            "volume": {
                "midi": 0,
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
            }
        },
        "effects": {
            "rotarySpeaker": {
                "enabled": true,
                "source": {
                    "value": "Organ"
                },
                "drive": {
                    "value": "0.0"
                },
                "stopMode": {
                    "enabled": true
                },
                "speed": {
                    "value": "Slow/Stop",
                    "morph": {
                        "wheel": {
                            "enabled": true
                        },
                        "afterTouch": {
                            "enabled": true
                        },
                        "controlPedal": {
                            "enabled": true
                        }
                    }
                }
            },
            "effect1": {
                "enabled": false,
                "source": {
                    "value": "Organ"
                },
                "type": {
                    "value": "Panning"
                },
                "amount": {
                    "midi": 64,
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
                "masterClock": {
                    "enabled": false
                }
            },
            "effect2": {
                "enabled": false,
                "source": {
                    "value": "Organ"
                },
                "type": {
                    "value": "Phaser 1"
                },
                "amount": {
                    "midi": 64,
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
                    "value": "5.0"
                }
            },
            "compressor": {
                "enabled": false,
                "amount": {
                    "midi": 0,
                    "value": "0.0"
                },
                "fast": {
                    "enabled": false
                }
            },
            "reverb": {
                "enabled": true,
                "type": {
                    "value": "Room 2"
                },
                "amount": {
                    "midi": 51,
                    "value": "4.0",
                    "morph": {
                        "wheel": {
                            "enabled": false,
                            "to": {
                                "midi": 51,
                                "value": "none"
                            }
                        },
                        "afterTouch": {
                            "enabled": false,
                            "to": {
                                "midi": 51,
                                "value": "none"
                            }
                        },
                        "controlPedal": {
                            "enabled": false,
                            "to": {
                                "midi": 51,
                                "value": "none"
                            }
                        }
                    }
                },
                "bright": {
                    "enabled": false
                }
            }
        }
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
            "width": "Off",
            "note": "--"
        },
        "mid": {
            "width": "Off",
            "note": "--"
        },
        "high": {
            "width": "Off",
            "note": "--"
        }
    }
};
