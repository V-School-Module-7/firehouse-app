module.exports = {
    info: [
        {
            id: 1,
            name: 'Ventilation', 
            path: '/fire/ventilation', 
            summary:{
                // title: "VEIS",
                data: [
                    "Ventilation is the planned and systematic removal process of smoke, heat and gases from a structure. By removing smoke from a structure, visibility will improve which will assist with rescue operations and increase survivability for possible victims.",
                    "When effectively ventilating a structure, the potential of flashover and backdraft decreases. Ventilation must be conducted in a coordinated manner with fire attack crews or it can result in fire growth and can present as a potential hazard for fire crews. Prior to ventilation operations, an assessment and size up should be done to determine the best strategy and ventilation tactic."
                ]
            },
            naturalVentilation:{
                title: "Natural Ventilation",
                data: [
                    "Natural ventilation utilizes natural convection currents and airflows by opening doors, windows, skylights or other openings of the structure. Natural ventilation should be coordinated with rescue and fire attack crews and communicated with incident command. Natural ventilation can be advantageous when time permits. When conducting natural ventilation, remove any obstructions near windows, doors or other openings."
                ]
            },
            mechanicalVentilation:{
                title: "Mechanical Ventilation",
                data: [
                    "Mechanical ventilation includes: positive pressure, negative pressure and a combination of the two. When conducting positive pressure ventilation, air flow is directed inward to force clean pressurized air into the structure with the use of a fan.",
                    "The best place for the fan is dependent on the size of the fan, the size of the entrance and the number of available fans. Positive pressure ventilation is most effective when the exhaust opening is between 3/4 to 1 3/4 of the size of the entrance opening. For best results, remove obstructions from windows and openings to improve efficiency.",
                    "Negative pressure ventilation includes the use of a smoke ejector placed in a structural opening. Negative pressure will draw heat, smoke and toxic gases from within the structure through the blower and out of the structure. Smoke ejectors can be placed in doorways, hallways or other openings. A combination of both positive and negative pressure can be utilized for maximum efficiency and can be used in conjunction with one another."
                ],
                imageData1: [
                    "Positive pressure will introduce clean air into the structure and force smoke out the exhaust opening. "
                ],
                image2: "../assets/ventilation/Negative-Pressure-Ventilation-pic.js",
                imageData2: [
                    "Negative pressure will draw smoke from the structure and fresh air is drawn into the structure by the negative pressure the fan created."
                ],
                image3: "../assets/ventilation/Combination-Ventilation-pic.js",
                imageData3: [
                    "Combined ventilation utilizes both positive and negative pressure to remove smoke, heat and toxins from a structure."
                ]
            },
            verticalVentilation:{
                title: "Vertical Ventilation",
                data: [
                    "Vertical ventilation involves accessing the roof of a structure and manually making openings for smoke to exit the structure. Vertical ventilation is a coordinated operation between interior crews, personnel on the roof of the structure and the incident commander. Tactics, strategies, operations and policies vary from department to department, however, safety precautions are relatively similar.",
                    "Escape routes must be established, safety precautions must be in place, sizing up the structure, observing obstructions and hazards, sounding the roof, observing the potential for collapse, controlling tools and exercising caution are all inclusive."
                ]
            },
            hydraulicVentilation:{
                title: "Hydraulic Ventilation",
                data: [
                    "Hydraulic ventilation utilizes the air drawn into a fog stream to force heat, gas and smoke products out of a structure. In order to perform hydraulic ventilation, a fog nozzle is set on a wide pattern that covers 85% - 95% of the window or opening. The tip of the nozzle should be at least 2 feet from the opening. For optimal results, utilize a larger opening for faster ventilation.",
                    "Although hydraulic ventilation can be utilized when other types of ventilation are unavailable, detrimental results can occur if done incorrectly. An increase of water damage can occur within the structure, firefighting operations may be temporarily discontinued when personnel are performing hydraulic ventilation, the amount of ice outside the structure will increase in adverse weather conditions and water supply may be affected."
                ],
                imageData1: [
                    "Use a wide pattern and stand at least 2 feet from the opening."
                ]
            },
            horizontalVentilation:{
                title: "Horizontal Ventilation",
                data: [
                    "Horizontal ventilation is the planned and systematic movement and removal of smoke, heat and gases by modifying the flow of gases in a horizontal direction within a structure.",
                    "Horizontal ventilation involves the application of either mechanical (positive pressure, negative pressure or combination), natural ventilation or hydraulic ventilation.",
                    "In order to achieve horizontal ventilation, fire personnel must control the entrance opening, control the exhaust opening and control the path of travel between the two openings."
                ],
                imageData1: [
                    "Size up the structure and determine the best ventilation method. Use a coordinated attack and communicate with crews in the fireground."
                ]
            },
        }
    ]
}

