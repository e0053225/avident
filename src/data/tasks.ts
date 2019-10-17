export interface TaskInfo {
    taskNumber: string;
    taskName: string;
    tailNumber: string;
    planeModel: string;
    progress: number;
    steps:[];
  }

export const TASKS = [
    {
        taskNumber: "TASK 32-11-02-004-001",
        taskName: "Wing Landing Gear Shock Strut Removal",
        tailNumber: "9V-SCB",
        planeModel: "BOEING 787-10",
        progress: 90,
        currentStep: 11,
        totalSteps: 15,
        taskReference: "AMM 32-11-02-004-001",
        steps: [
            {
                stepNumber: 1,
                stepInstruction: "If the sensor or target bracket is moved or damaged, then do the task to measure the wing landing gear truck sensor clearance",
                stepReference: "AMM 32-61-22/201",
                stepPage: 2,
                stepInstructionList: []
            },
            {
                stepNumber: 2,
                stepInstruction: "Remove the drag brace from the airplane",
                stepReference: "AMM 32-11-03/401",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 3,
                stepInstruction: "Remove the outboard door fitting from the shock strut",
                stepReference: "AMM 32-11-28/401",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 4,
                stepInstruction: "Remove the wing landing gear from the airplane",
                stepReference: "AMM 32-11-01/401",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 5,
                stepInstruction: "Loosen the brackets which hold the conduit and the junction box to the shock strut.",
                stepReference: "",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 6,
                stepInstruction: "Lower the full harness of wires to the ground.",
                stepReference: "",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 7,
                stepInstruction: "Remove all hydraulic lines from the shock strut. (a) Put a cap on all disconnected lines. (b) Put a plug in all open fittings. (c) Lower the hydraulic lines to the ground.",
                stepReference: "",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 8,
                stepInstruction: "Disconnect the forward end of the tilt actuator. (a) Remove the bolt (22), the end caps (21), the washers (23), and the pin (20) (Detail F).",
                stepReference: "Figure 401",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 9,
                stepInstruction: "Remove the oleo locks.",
                stepReference: "",
                stepPage: 8,
                stepInstructionList: []
            },
            {
                stepNumber: 10,
                stepInstruction: "Remove the lockbolt (16), the nut (15), the shim (17), and the bolt (14) from the shock strut (Detail E).",
                stepReference: "Figure 401",
                stepPage: 8,
                stepInstructionList: []
            },
            {
                stepNumber: 11,
                stepInstruction: "Remove the truck lock",
                stepReference: "AMM 32-11-23/401",
                stepPage: 8,
                stepInstructionList: [
                    {
                        instruction: "Install the ground locks in all landing gear",
                        reference: "AMM 09-11-00/201"
                    },
                    {
                        instruction: "Do this task: Installation of the Door Locks on the Wing Landing Gear",
                        reference: "AMM 32-00-30/201"
                    },
                    {
                        instruction: "Do this task: Installation of the Door Locks on the Body Landing Gear",
                        reference: "AMM 32-00-30/201"
                    },
                    {
                        instruction: "Remove the nut (18)",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Remove the hook (4) and the lever (3) from the frame (1)",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Remove the bolt (22) from the spindle bracket (8).",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Remove the nut (6) and the shim (7) from the torsion link pin.”",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Remove the frame (1).",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Loosen clamp bolts (10) and remove the roller support assembly (5) and the delrin bushing (17).",
                        reference: "AMM 32-11-23-401"
                    }
                ]
            },
            {
                stepNumber: 12,
                stepInstruction: "Remove the lockbolts (5), the lubrication inserts (3), the nuts (2), the washers (1), and the bolts (7) from each brake rod (Detail C). (a) Use the mechanical equipment and the axle jack to remove the load from the bolts on the brake rods. (b) Pull the bolts from the brake rods.",
                stepReference: "Figure 401",
                stepPage: 8,
                stepInstructionList: [
                    {
                        instruction: "Replace the O-rings if it is necessary.",                                           
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Apply a large quantity of grease to the O-rings (12), the lubrication insert (10), and the inner surface of the bolt",                                           
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Put the O-rings (12) on the lubrication insert (10).",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "If it is necessary, lubricate the lubrication insert again.",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Put the lubrication insert (10) into the bolt (13).",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Align the holes for the lockbolt (11).",
                        reference: "AMM 32-11-23-401"
                    }
                     
                 
                ]
            },
            {
                stepNumber: 13,
                stepInstruction: "Remove the lockbolt (11), the pivot nut (9), the lubrication insert (10), and the spline washer (8) (Detail D).",
                stepReference: "Figure 401",
                stepPage: 8,
                stepInstructionList: [
                    {
                        instruction: "Replace the O-rings if it is necessary.",                                           
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Apply a large quantity of grease to the O-rings (12), the lubrication insert (10), and the inner surface of the bolt",                                           
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Put the O-rings (12) on the lubrication insert (10).",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "If it is necessary, lubricate the lubrication insert again.",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Put the lubrication insert (10) into the bolt (13).",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Align the holes for the lockbolt (11).",
                        reference: "AMM 32-11-23-401"
                    },
                    {
                        instruction: "Apply a large quantity of grease to the O-rings (12), the lubrication insert (10), and the inner surface of the bolt",                                           
                        reference: "AMM 32-11-23-401"
                    }
                ]
            },
            {
                stepNumber: 14,
                stepInstruction: "Remove the pivot bolt: (a) Use the mechanical equipment and the axle jack to remove the load from the pivot bolt. (b) Pull the bolt from the wheel truck.",
                stepReference: "",
                stepPage: 8,
                stepInstructionList: []
            },
            {
                stepNumber: 15,
                stepInstruction: "Lift the shock strut from the wheel truck.",
                stepReference: "",
                stepPage: 8,
                stepInstructionList: []
            }
        ],
        references: [
            {
                referenceNumber: "AMM 32-11-02" ,
                referenceName: "Figure 401"
            },
            {
                referenceNumber: "AMM 09-11-00/201" ,
                referenceName: "Towing"
            },
            {
                referenceNumber: "AMM 32-00-30/201" ,
                referenceName: "Landing Gear Door Locks"
            },
            {
                referenceNumber: "AMM 32-11-01/401" ,
                referenceName: "Wing Gear"
            },
            {
                referenceNumber: "AMM 32-11-03/401" ,
                referenceName: "Wing Gear Drag Brace"
            },
            {
                referenceNumber: "AIPC 32-11-11" ,
                referenceName: "Fig. 2"
            },
            {
                referenceNumber: "AIPC 32-11-14" ,
                referenceName: "Fig.2"
            }
        ],
        materials: [
            {
                materialCategory: "Special Tools and Equipment",
                materialList: [
                    {   
                        materialNumber: "OHME65B01201-1",
                        materialName: "Wing and Body Gear Overhead Mechanical Equipment"
                    },
                    {  
                        materialNumber: "12PRE65B00161-1",
                        materialName: "Pivot Pin Thread Protector"
                    }
                ]
            },
            {
                materialCategory: "Standard Tools and Equipment",
                materialList: [
                    {   
                        materialNumber: "",
                        materialName: "Axle Jack and Adapter"
                    }
                ]
            }
        ]
    },
    {
        taskNumber: "TASK 32-11-02-404-019",
        taskName: "Wing Landing Gear Shock Strut Installation",
        tailNumber: "9V-SCB",
        planeModel: "BOEING 787-10",
        progress: 0,
        currentStep: 1,
        totalSteps: 33,
        taskReference: "AMM 32-11-02-404-019",
        steps:[
            {
                stepNumber: 1,
                stepInstruction: "Examine the shock strut for deterioration",
                stepReference: "AMM 2-11-01/601",
                stepPage: 2,
                stepInstructionList: []
            },
            {
                stepNumber: 2,
                stepInstruction: "Examine the mechanical connections on the shock strut",
                stepReference: "AMM 32-11-03/601,",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 3,
                stepInstruction: "Prepare the lubrication insert (10) for installation into the truck pivot bolt",
                stepReference: "AMM 32-11-28/401",
                stepPage: 7,
                stepInstructionList: []
            },
         
            {
                stepNumber: 4,
                stepInstruction: "Prepare the lubrication inserts (3) for installation into the brake rod bolts (7)",
                stepReference: "",
                stepPage: 7,
                stepInstructionList: []
                
            },
            {
                stepNumber: 5,
                stepInstruction: "If the sensor or target bracket is moved or damaged, then do the task to measure the wing landing gear truck sensor clearance",
                stepReference: "AMM 32-61-22/201",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 6,
                stepInstruction: "Use the mechanical equipment to lower the shock strut to the wheel truck.",
                stepReference: "",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 7,
                stepInstruction: "Lightly apply some grease to the hole of the pivot and to the shank of the pivot bolt (13).",
                stepReference: "",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 8,
                stepInstruction: "Put the thread protector on the pivot bolt (13).",
                stepReference: "Figure 401",
                stepPage: 7,
                stepInstructionList: []
            },
            {
                stepNumber: 9,
                stepInstruction: "Install the pivot bolt (13) with the lubrication insert (10) and the O-rings (12) (Detail D).",
                stepReference: "",
                stepPage: 8,
                stepInstructionList: []
            },
            {
                stepNumber: 10,
                stepInstruction: "Remove the thread protector.",
                stepReference: "Figure 401",
                stepPage: 8,
                stepInstructionList: []
            },
            {
                stepNumber: 11,
                stepInstruction: "Apply a layer of grease to the spline washer (8), the threads of the pivot bolt (13) and the nut (9).",
                stepReference: "",
                stepPage: 8,
                stepInstructionList: []
            },
            {
                stepNumber: 12,
                stepInstruction: "Install the spline washer (8) and the nut (9) on the pivot bolt.",
                stepReference: "Figure 401",
                stepPage: 8,
                stepInstructionList: []
            },
            {
                stepNumber: 13,
                stepInstruction: "Apply a layer of grease to the spline washer (8), the threads of the pivot bolt (13) and the nut (9).",
                stepReference: "",
                stepPage: 8,
                stepInstructionList: []
            }

        ],
        references: [
            {
                referenceNumber: "AMM 32-00-30/201" ,
                referenceName: "Landing Gear Door Locks"
            },
            {
                referenceNumber: "AM 32-11-01/601" ,
                referenceName: "Wing Gear Shock Strut"
            },
            {
                referenceNumber: "AMM 32-11-03/401" ,
                referenceName: "Wing Gear Drag Brace"
            },
            {
                referenceNumber: "AMM 32-11-03/601" ,
                referenceName: "Wing Gear Torsion Links"
            },
            {
                referenceNumber: "AMM 32-11-03/601" ,
                referenceName: "Wing Gear Truck Tilt Actuator"
            },
            {
                referenceNumber: "AMM 32-11-23/401" ,
                referenceName: "Wing Gear Truck Mechanical Lock"
            },
            {
                referenceNumber: "AMM 32-11-28/401" ,
                referenceName: "Wing Gear Shock Strut Outboard Door Fitting"
            },
            {
                referenceNumber: "AMM 32-32-00/501" ,
                referenceName: "Wing Gear and Door Extension and Retraction"
            }
        ],
        materials: [ {
            materialCategory: "Special Tools and Equipment",
            materialList: [
                {   
                    materialNumber: "OHME65B01201-1",
                    materialName: "Wing and Body Gear Overhead Mechanical Equipment"
                },
                {  
                    materialNumber: "12PRE65B00161-1",
                    materialName: "Pivot Pin Thread Protector"
                }
            ]
        },
        {
            materialCategory: "Standard Tools and Equipment PG 514-521",
            materialList: [
                {   
                    materialNumber: "",
                    materialName: "Axle Jack and Adapter"
                }
            ]
        },
            {
                materialCategory: "Consumable Materials",
                materialList: [
                    {   
                        materialNumber: "D00633",
                        materialName: "Grease - BMS 3-33 (preferred)"
                    },
                    {  
                        materialNumber: "D00013",
                        materialName: "Grease - MIL-G-23287 (optional)"
                    }
                ]
            }
    ]
    },
    {
        taskNumber: "TASK 32-11-02-603-001",
        taskName: "Wing Landing Gear Shock Strut Fluid Replacement",
        tailNumber: "9V-SCB",
        planeModel: "BOEING 787-10",
        progress: 100,
        currentStep: 21,
        totalSteps: 20,
        taskReference: "AMM 32-11-02-603-001",
        steps:[],
        references: [],
        materials: []
    }
]
  