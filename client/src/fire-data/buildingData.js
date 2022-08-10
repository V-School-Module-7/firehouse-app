module.exports = {
    info: [
        {
            id: 1,
            name: 'Type I', 
            path: '/fire/building-types/type-1', 
            data: [
                { 
                    characteristics: [
                        {__html: '<b> <center> Characteristics </center> </b>'},
                        {__html: '<center> Type I buildings are usually high-rises made of noncombustible or limited combustible material. These structures have structural members including: walls, columns, beams, floors and roofs. </center>'},
                        {__html: '<center> Type I buildings have fire resistive compartmentation characteristics provided by partitions. Floors slow the spread of fire through the building and are able to confine fire to a certain area. </center>'},
                        {__html: '<center> Type I buildings usually have self-pressurizing stairwells and HVAC systems that aid air movement. Many of the buildings that fall into this category will have elevators and control panels to manage fire doors. Type I buildings provide the highest level of protection from fire development and spread as well as collapse. Type I buildings are expected to remain structurally stable during a fire due to protected steel. </center>'},
                        {__html: '<center> Type I buildings will not burn, however, the structure will degrade from fire and heat. The degree of degradation will depend on building material, amount/intensity of heat, duration of impingement and contents of the structure. </center>'}
                    ],
                    materials: [
                        {__html: '<b> <center> Materials </center> <b>'},
                        {__html: '<center><li>Noncombustible or limited combustible material</li> <li>Usually protected steel or concrete</li></center>'}
                    ],
                    hazards: [
                        {__html: '<b> <center> Hazards </center> </b>'},
                        {__html: '<center><li>Contents</li> <li>Ventilation</li> <li>Openings made in partitions</li> <li>Improperly designed HVAC systems</li></center>'}
                    ],
                    stackEffect: [
                        {__html: '<b> <center> Stack Effect </center> </b>'},
                        {__html: '<center> The Stack effect is the temperature difference between the temperature inside of the structure. The difference will cause the air within the structure to rise or fall depending on the variation between the two. Air movement becomes apparent in structures over 60 feet and more distinct as the structure increases in height. The taller the building, the greater the temperature difference. If the temperature inside of the building is cooler than the temperature outside, air current within the building will be driven downward. </center>'},
                        {__html: '<center> The opposite also applies, if the temperature inside the building is warmer than the temperature outside, air current within the building will be driven upward. </center>'},
                        {__html: '<center> The contrast in pressure forces warmer air in a building upward until it reaches a point within the building where the temperature is equal and the density of the air is balanced. The point of equilibrium is known as the stratification location. Air will flow upward and then horizontally at this point which will cause fire and smoke to spread laterally. In most cases, it happens in the middle of the building as the pressures equalize. </center>'},
                        {__html: '<center> Smoke is influenced by the stack effect and will be drawn toward any shaft or stairwell. On higher floors, air movement draws fire and smoke away from shafts or stairwells toward the exterior of the building. In cases in which fires occur within the location of stratification, the stack effect has little effect on smoke movement. </center>'},
                    ],
                    ventilation: [
                        {__html: '<b> <center> Ventilation </center> </b>'},
                        {__html: '<center> Prior to 1960, Type I high rises had windows that opened. After 1960, Type I high rise buildings are constructed as sealed structures, meaning that windows may be non-operational, causing them to be very difficult to penetrate. Roofs are extremely difficult to penetrate. Firefighting operations must be coordinated in order to successfully ventilate a high rise structure. HVAC systems, sky lights, scuttle hatches and stairwells may be utilized for ventilation operations. When using stairwells, ensure that a separate stairwell is designated for civilian egress. </center>'}
                    ],
                    burnTime: [
                        {__html: '<b> <center> Burn Time </center> </b>'},
                        {__html: '<center> Structural components such as floors, walls and ceilings are fire resistive up to 3 to 4 hours depending on materials and components. </center>'}
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Type II", 
            path: '/fire/building-types/type-2', 
            data: []
        },
        {
            id: 3,
            name: "Type III", 
            path: '/fire/building-types/type-3', 
            data: []
        },
        {
            id: 4,
            name: "Type IV", 
            path: '/fire/building-types/type-4', 
            data: []
        },
        {
            id: 5,
            name: "Type V", 
            path: '/fire/building-types/type-5', 
            data: []
        },
        
    ]
}